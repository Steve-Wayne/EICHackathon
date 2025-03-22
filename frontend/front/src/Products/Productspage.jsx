import React, { useState, useEffect } from "react";
//import "./ProductsPage.css"; // Create CSS for styling

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/products") // Adjust URL if needed
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="products-container">
            <h2>🔥 Products of the Month</h2>
            <div className="products-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <a href={product.website} target="_blank" rel="noopener noreferrer">
                                Visit Website
                            </a>
                        </div>
                        <div className="votes-section">
                            👍 {product.votes} Votes
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
