import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductCategory({onSelectionChange}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://product-service:8222/api/v1/products/categories');
                setCategories(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("error fetching product: ", error);
            }
        };

        // Call the fetchCategories function inside useEffect
        fetchCategories();
    }, []);  // Empty array ensures this runs once when the component mounts

    const handleChange = (event) => {       
        onSelectionChange(event.target.value); 
    }

    return (
        <div className='mb-3'>
            <form>
                <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
}
