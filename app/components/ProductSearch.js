// app/components/ProductSearch.js
"use client"; // Add this directive

import { useState, useEffect } from 'react';

function ProductSearch() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch products from fakestoreapi.com
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>
                            <img src={product.image} alt={product.title} width={50} />
                        </td>
                        <td>${product.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductSearch;
