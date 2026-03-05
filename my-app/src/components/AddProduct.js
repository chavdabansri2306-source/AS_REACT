import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Seller.css";

function AddProduct() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        img: null
    });

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
            const response = await axios.post("http://127.0.0.1:8000/Products/create/", data, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Product added successfully!");
            navigate("/view-products");
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Failed to add product. Please check the backend.");
        }
    };

    return (
        <div className="product-form-container">
            <h2>Add New Product</h2>

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
                        placeholder="Describe your product in detail..."
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="premium-input premium-textarea"
                    />
                </div>

                <div className="form-group">
                    <label>Product Image</label>
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
                    <button type="submit" className="btn-premium btn-primary" style={{ flex: 1, justifyContent: "center" }}>
                        Submit Product
                    </button>
                    <button type="button" onClick={() => navigate("/seller")} className="btn-premium btn-secondary" style={{ flex: 1, justifyContent: "center" }}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
