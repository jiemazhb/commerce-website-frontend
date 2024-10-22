import React, { useState, useEffect, useContext } from 'react';
import ViewOrder from '../productPage/viewOrder';
import OrderCalculations from './orderCalculations';
import { ProductContext } from '../productContext';
import useApi from '../intercepter';
import { UserContext } from '../userContext'
import { useNavigate } from 'react-router-dom';

export default function PlaceOrder({ productData }) {
  const [paymentMethod, setPaymentMethod] = useState('');
  const { productList, setProductList } = useContext(ProductContext);
  const [data, setData] = useState({ referenceNo: '', tax: 0, total: 0 });
  const { auth } = useContext(UserContext); 
  const navigate = useNavigate();
  const baseUrlWithInterceptor = useApi();


  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }

    if(!auth){
        setProductList([])
        navigate('/login');
        return
    }

    // 将产品按照ID分组并计算数量
    const groupedProducts = productList.reduce((acc, product) => {
      if (acc[product.Id]) {
        acc[product.Id].quantity += 1;
      } else {
        acc[product.Id] = { productId: product.Id, quantity: 1 };
      }
      return acc;
    }, {});

    const productsArray = Object.values(groupedProducts);
    
    const orders = {
      reference: data.referenceNo,
      amount: data.total,
      paymentMethod: paymentMethod,
      customerId: auth.userId, // 确保 userData 存在
      products: productsArray
    };

    try {       
      const response = await baseUrlWithInterceptor.post('/orders', orders); // 拦截器会自动处理token和headers
      alert('Order placed successfully!');
      setProductList([]);
      setPaymentMethod('');
    } catch (error) {
        console.error('Order placement failed:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div>
      <form>
        <select
          className="form-select"
          aria-label="Select payment method"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select payment method</option>
          <option value="PAYPAL">PAYPAL</option>
          <option value="CREDIT_CARD">CREDIT CARD</option>
          <option value="VISA">VISA</option>
          <option value="MASTER_CARD">MASTER CARD</option>
          <option value="BITCOIN">BITCOIN</option>
        </select>

        {/* OrderCalculations 组件负责计算总价和税费 */}
        <OrderCalculations orderDetails={productData} orderData={setData} />

        <button
          type="button"
          className="btn btn-outline-success mt-5 btn-sm"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
        <ViewOrder />
      </form>
    </div>
  );
}
