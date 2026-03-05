import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ViewProducts.css";

function ViewProducts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/Products/");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                await axios.delete(`http://127.0.0.1:8000/Products/${id}/`);
                alert("Product deleted successfully!");
                fetchProducts(); // Refresh list
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("Failed to delete product.");
            }
        }
    };

    return (
        <div className="view-products-container">
            <div className="view-products-header">
                <h2>My Products</h2>
                <button className="btn-back" onClick={() => navigate("/seller")}>
                    ← Back to Dashboard
                </button>
            </div>

            {products.length === 0 ? (
                <div className="empty-state">
                    <p>No products available.</p>
                </div>
            ) : (
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            {product.img && (
                                <div className="product-image-container">
                                    <img
                                        src={product.img.startsWith("http") ? product.img : `http://127.0.0.1:8000${product.img}`}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                </div>
                            )}
                            <div className="product-info">
                                <h3 className="product-title">{product.name}</h3>
                                <p className="product-price">${product.price}</p>
                                <p className="product-description">{product.description}</p>
                            </div>

                            <div className="product-actions">
                                <button
                                    onClick={() => navigate(`/edit-product/${product.id}`)}
                                    className="btn-edit"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="btn-delete"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ViewProducts;
