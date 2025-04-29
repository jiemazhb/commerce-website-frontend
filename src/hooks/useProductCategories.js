import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories, setSelectedCategory } from "../redux/categorySlice";
import { fetchProductsByCategory } from "../redux/productSlice"; 

export default function useProductCategories() {
  const dispatch = useDispatch();
  const { categories, selectedCategory, status } = useSelector((state) => state.categories);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const handleCategoryChange = (categoryId) => {
    dispatch(fetchProductsByCategory(categoryId)); 
    dispatch(setSelectedCategory(categoryId));
  };

  return { 
    categories, selectedCategory, handleCategoryChange, status };
}
