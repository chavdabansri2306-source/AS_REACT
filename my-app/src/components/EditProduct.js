import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Seller.css";

function EditProduct() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get product ID from URL
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        img: null
    });

    useEffect(() => {
        // Fetch existing product data
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/Products/`);
                // Find the specific product we are editing
                const product = response.data.find(p => p.id === parseInt(id));
                if (product) {
                    setFormData({
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        img: null // don't prefill file input, let user re-upload if they want
                    });
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        if (e.target.name === "img") {
            setFormData({ ...formData, img: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("price", formData.price);
        if (formData.img) {
            data.append("img", formData.img);
        }

        try {
            const response = await axios.put(`http://127.0.0.1:8000/Products/${id}/`, data, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Product updated successfully!");
            navigate("/view-products");
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Failed to update product.");
        }
    };

    return (
        <div className="product-form-container">
            <h2>Edit Product</h2>

            <form onSubmit={handleSubmit} className="product-form">
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter product name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="premium-input"
                    />
                </div>

                <div className="form-group">
                    <label>Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="0.00"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="premium-input"
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        placeholder="Product Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="premium-input premium-textarea"
                    />
                </div>

                <div className="form-group">
                    <label>Upload New Image (Optional)</label>
                    <div className="file-input-wrapper">
                        <input
                            type="file"
                            name="img"
                            onChange={handleChange}
                            accept="image/*"
                        />
                    </div>
                </div>

                <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                    <button type="submit" className="btn-premium btn-warning" style={{ flex: 1, justifyContent: "center" }}>
                        Update Product
                    </button>
                    <button type="button" onClick={() => navigate("/view-products")} className="btn-premium btn-secondary" style={{ flex: 1, justifyContent: "center" }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;
