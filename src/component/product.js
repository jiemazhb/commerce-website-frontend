import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductList from './productPage/productList'
import PlaceOrder from './productPage/placeOrder'
import ProductDetails from './productPage/productDetails'
import ProductCategory from './productPage/productCategory'


export default function Product() {

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectCategory, setCategory] = useState("")
    const [productList, setProductList] = useState([])

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }

    const handleBack = () => {
        setSelectedProduct(null);
    }

    const handleCategoryChange = (newSelection) => {
        setCategory(newSelection);
    }

    // call by default, load all product
    useEffect(() => {
        const fetchAllItems = async () => {
            try {
                // const response = await axios.get('http://localhost:8222/api/v1/products');
                const response = await axios.get('http://PRODUCT-SERVICE:8222/api/v1/products');
                setProductList(response.data);
            } catch (error) {
                console.error("Error fetching all items:", error);
            }
        };

        fetchAllItems();
    }, []);

    // refresh by category
    useEffect(() => {

        const url = selectCategory
            ? `http://PRODUCT-SERVICE:8222/api/v1/products/category?selectedCategory=${selectCategory}`
            : 'http://PRODUCT-SERVICE:8222/api/v1/products';

        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setProductList(response.data);
            } catch (error) {
                console.error("error fetching product: ", error);
            }
        }

        fetchData();

    }, [selectCategory]);

    return (
        <div>
            <div className="row">
                <div className="col-10 ">
                    <ProductCategory onSelectionChange={handleCategoryChange} />

                    {selectedProduct ? (
                        <ProductDetails product={selectedProduct} onBack={handleBack} />
                    ) : (

                        <ProductList items={productList} onProductClick={handleProductClick} />
                    )}

                </div>
                <div className="col-2">
                    <PlaceOrder productData={selectedProduct} />
                </div>
            </div>

        </div>

    );
}
