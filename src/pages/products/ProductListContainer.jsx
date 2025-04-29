import { useEffect } from "react";
import { ProductDetails, ProductList } from "..";
import { useDispatch } from "react-redux";
import { useCartActions, useProductAction } from "../../hooks";

export default function ProductListContainer() {
  const dispatch = useDispatch();

  const { handleAddToCart, setProductQuantity, quantity } = useCartActions();
  const {
    handleProductClick,
    productList,
    status,
    handleBack,
    selectedProduct,
    filterProductsByCategory,
  } = useProductAction();
  
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (status === "idle") {
      filterProductsByCategory();
    }
  }, [status, dispatch]);

  return (
    <div>
      {status === "loading" && <p>Loading products...</p>}

      {status === "failed" && (
        <div style={{ padding: 20, color: "red" }}>
          <h3>Failed to load products. The server is not running.</h3>
          <p>Please try again later.</p>
        </div>
      )}

      {status === "succeeded" &&
        productList.length > 0 &&
        (selectedProduct ? (
          <ProductDetails
            OnAddToCart={handleAddToCart}
            product={selectedProduct}
            onBack={handleBack}
            setQuantity={setProductQuantity}
            quantity={quantity}
          />
        ) : (
          <ProductList
            productList={productList}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
          />
        ))}

      {/* {selectedProduct ? (
        <ProductDetails OnAddToCart = {handleAddToCart} product={selectedProduct} onBack={handleBack} setQuantity={setProductQuantity}
        quantity={quantity} />
      ) : (
        <ProductList productList = {productList} onProductClick={handleProductClick } onAddToCart = {handleAddToCart}/>
      )} */}
    </div>
  );
}
