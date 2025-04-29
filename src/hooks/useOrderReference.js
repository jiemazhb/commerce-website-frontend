import { useState, useRef, useEffect } from "react";

export default function useOrderReference(productList) {
  const [reference, setReference] = useState("");
  const hasGeneratedReference = useRef(false);

  const generateReference = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
      .toString().padStart(2, "0")}${currentDate.getDate().toString().padStart(2, "0")}`;
    const randomNumber = Math.floor(Math.random() * 90 + 10);
    setReference(`MS${formattedDate}${randomNumber}`);
  };

  useEffect(() => {
    if (productList.length > 0 && !hasGeneratedReference.current) {
      generateReference();
      hasGeneratedReference.current = true;
    } else if (productList.length === 0) {
      setReference("");
      hasGeneratedReference.current = false;
    }
  }, [productList]);

  return reference;
}
