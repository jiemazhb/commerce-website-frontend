import React, { useEffect, useState, useContext, useRef } from 'react';
import { ProductContext } from '../productContext';
import { Toast } from 'bootstrap';

export default function OrderCalculations({ orderDetails, orderData }) {
  const [reference, setReference] = useState("");
  const [quantity, setQuantity] = useState(0);
  const hasGeneratedReference = useRef(false);
  const [tax, setTax] = useState(0);
  const TAX_RATE = 0.10;
  const [total, setTotal] = useState(0);

  const { productList } = useContext(ProductContext);
  const orderCount = productList.length;

  const subTotal = productList.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  const handleGenerateReference = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
      .toString().padStart(2, "0")}${currentDate.getDate().toString().padStart(2, "0")}`;
    const randomNumber = Math.floor(Math.random() * 90 + 10);
    setReference(`MS${formattedDate}${randomNumber}`);
  };

  useEffect(() => {
    if (productList.length > 0 && !hasGeneratedReference.current) {
      handleGenerateReference();
      hasGeneratedReference.current = true;
    } else if (productList.length === 0) {
      setReference("");
      setTax(0);
      setTotal(0);
      hasGeneratedReference.current = false;
    }
  }, [productList]);


  useEffect(() => {
    const calculatedTax = subTotal * TAX_RATE;
    setTax(calculatedTax);

 
    setTotal((subTotal + calculatedTax).toFixed(2));


    if (orderData) {
      orderData({
        referenceNo: reference,
        tax: calculatedTax,
        total: (subTotal + calculatedTax).toFixed(2),
      });
    }
  }, [subTotal, tax]);

  const handleClickPlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleClickMinus = () => {
    setQuantity((prevQuantity) => (prevQuantity - 1 <= 0 ? 1 : prevQuantity - 1));
  };

  return (
    <div className="card-body mt-5">
      <h3 className="card-title mb-4">Summary</h3>
      <div>
        <div className="d-flex justify-content-between">
          <p className="text-body fw-semibold">Reference :</p>
          <p className="text-danger fw-semibold">{reference}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-body fw-semibold">Total Orders: </p>
          <p className="text-danger fw-semibold">{orderCount}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-body fw-semibold">Service fee :</p>
          <ul className="nav p-0 m-0">
            <li className="nav-item me-3">
              {/* <a className="nav-link p-0" href="#" onClick={handleClickPlus}>{!shoppingBtnStatus ? "+" : ""}</a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link p-0" href="#" onClick={handleClickMinus}>{!shoppingBtnStatus ? "-" : ""}</a> */}
            </li>
          </ul>
          <p className="text-body-emphasis fw-semibold">{quantity}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-body fw-semibold">Tax :</p>
          <p className="text-body-emphasis fw-semibold">{tax.toFixed(2)}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-body fw-semibold">Subtotal :</p>
          <p className="text-body-emphasis fw-semibold">{subTotal.toFixed(2)}</p>
        </div>

        <div className="d-flex justify-content-between border-top border-translucent border-dashed pt-">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-0">{total}</h4>
        </div>
      </div>
    </div>
  );
}
