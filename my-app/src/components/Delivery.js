import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Delivery.css";

const Delivery = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Check role to ensure unauthorized users don't access the dashboard
        const role = localStorage.getItem("role");
        const name = localStorage.getItem("name");

        if (role !== "delivery") {
            alert("Unauthorized Access. Redirecting to home...");
            navigate("/");
        } else {
            setUserName(name || "Delivery Partner");
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("name");
        navigate("/");
    };

    return (
        <div className="delivery-dashboard">
            <header className="delivery-header">
                <h1>Delivery Dashboard</h1>
                <div className="header-actions">
                    <span className="welcome-text">Welcome, {userName}!</span>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </header>

            <main className="delivery-main">
                <section className="stats-section">
                    <div className="stat-card">
                        <h3>Pending Deliveries</h3>
                        <p>0</p>
                    </div>
                    <div className="stat-card">
                        <h3>Completed Deliveries</h3>
                        <p>0</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Earnings</h3>
                        <p>$0.00</p>
                    </div>
                </section>

                <section className="delivery-list-section">
                    <h2>Active Orders</h2>
                    <div className="empty-state">
                        <p>No active orders assigned to you right now.</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Delivery;
