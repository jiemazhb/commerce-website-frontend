import React from "react";

export default function QuantitySelector({ quantity, setQuantity }) {
  const handleClickPlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleClickMinus = () => {
    setQuantity((prevQuantity) => (prevQuantity - 1 <= 0 ? 1 : prevQuantity - 1));
  };

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-primary btn-sm" onClick={handleClickMinus}>-</button>
      <span className="mx-2">{quantity}</span>
      <button className="btn btn-outline-primary btn-sm" onClick={handleClickPlus}>+</button>
    </div>
  );
}
