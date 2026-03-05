import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Seller.css"; // Import the CSS

function Seller() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    // 🔐 Protect route
    if (role !== "seller") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    navigate("/");
  };

  const sellerName = localStorage.getItem("name") || "Seller";

  return (
    <div className="seller-dashboard-wrapper">
      <div className="seller-dashboard-main">
        <header className="dashboard-header">
          <div className="header-greeting">
            <h1 className="seller-title">Seller Dashboard</h1>
            <p className="seller-subtitle">Welcome back, <span className="highlight-name">{sellerName}</span> 👋</p>
          </div>
          <button className="btn-logout" onClick={handleLogout}>
            <span className="logout-icon">🚪</span> Logout
          </button>
        </header>

        <section className="dashboard-stats-section">
          {/* Placeholder for future stats - adds to the professional look */}
          <div className="stat-card">
            <div className="stat-title">Total Products</div>
            <div className="stat-value">--</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Active Orders</div>
            <div className="stat-value">--</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Revenue</div>
            <div className="stat-value">$0.00</div>
          </div>
        </section>

        <section className="quick-actions-section">
          <h2 className="section-heading">Quick Actions</h2>
          <div className="action-cards-grid">

            <div className="action-card" onClick={() => navigate("/add-product")}>
              <div className="icon-circle icon-add">
                ➕
              </div>
              <div className="action-details">
                <h3>Add Product</h3>
                <p>List a new item in your store</p>
              </div>
              <div className="action-arrow">→</div>
            </div>

            <div className="action-card" onClick={() => navigate("/view-products")}>
              <div className="icon-circle icon-view">
                📦
              </div>
              <div className="action-details">
                <h3>View My Products</h3>
                <p>Manage and track your inventory</p>
              </div>
              <div className="action-arrow">→</div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Seller;