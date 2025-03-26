import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import "./Product.css";
import { useAuth } from "../AuthContext";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  const orders = [
    // {
    //   id: 1,
    //   name: "Mama",
    //   product: "Tomatoes",
    //   status: "New",
    //   quantity: 10,
    //   date: "May 2, 2024",
    //   price: "235",
    //   statusColor: "blue-product",
    // },
  ];


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); 
        if (!token) {
          console.log("User not logged in");
        }
        const response = await fetch("https://agrilinkapi.onrender.com/api/farmer/ordersPage", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }); 
        if (!response.ok) throw new Error("Failed to fetch orders");
        const data = await response.json();
        console.log(data)
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []); // Empty dependency array ensures it runs once on mount

  const products = [
    "/src/assets/fam8.jpeg",
    "/src/assets/fam8.jpeg",
    "/src/assets/fam8.jpeg",
    "/src/assets/fam8.jpeg",
  ];

  // const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  //   const sampleOrders = Array.from({ length: 5 }, (_, index) => ({
  //     id: index + 1,
  //     name: ["John Doe", "Jane Smith", "Robert Brown", "Emily White", "David Johnson"][index],
  //     product_name: ["Tomatoes", "Carrots", "Cabbages", "Peppers", "Onions"][index],
  //     status: ["New", "New", "Delivered", "Canceled", "Pending"][index],
  //     quantity: generateRandomNumber(1, 10),
  //     date: `2025-03-${generateRandomNumber(10, 23)}`,
  //     price: `$${generateRandomNumber(5, 50)}`,
  //   }));
  
    // const [orders, setOrders] = useState(sampleOrders);
  

  return (
    <div className="dash">
      <Sidebar />
      <div className="dashboard">
        <div className="dash-head">
          <h1 className="dash-title">Orders Placed</h1>
          <div className="icon">
            <input type="text" placeholder="Search" className="search-top" />
            <i class="fi fi-rr-list ico"></i>
            <i class="fi fi-rr-bell-notification-social-media ico"></i>
          </div>
        </div>

        <div className="board-container">
          {/* Orders Table */}
          <div className="orders-section">
            <table>
              <thead>
                <tr>
                  <th>Customer name</th>
                  <th>Product name</th>
                  <th>Status</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <div className="user-info">
                          <div className="user-dtl">
                            <span>{order.customer_name}</span>
                          </div>
                        </div>
                      </td>
                      <td>{order.product_name}</td>
                      <td>
                        <span
                          className={`status-dot ${order.statusColor}`}
                        ></span>
                        {order.order_status}
                      </td>
                      <td>{order.quantity}</td>
                      <td>{order.order_date}</td>
                      <td>{(order.total_price ?? 0).toLocaleString("gh-GH", { style: "currency", currency: "GHS" })}</td>
                      <td data-cell="Action">
                        <div className="action-menu">
                          <button className="menu-btn">•••</button>
                          <div className="menu-dropdown">
                            <a className="act-btn">
                              <span className="edit">Processing</span>
                            </a>
                            <a className="act-btn">
                              <span className="delete">Reject</span>
                            </a>
                            <a className="act-btn">
                              <span className="print">Print Invoice</span>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No orders found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Profile Section */}
          <div className="profile-section-product">
            <div className="profile-card-product">
              <img
                src="/src/assets/user.png"
                alt="pro-pic"
                className="profile-pic"
              />
              <h4 className="profile-name">{user || "Guest"}</h4>
              <small>Lamar48@gmail.com</small>

              {/* Add Product Button */}
              <div>
                <button
                  className="add-product-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Add Product
                </button>

                {/* Modal */}
                {isModalOpen && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <button
                        className="close-btn"
                        onClick={() => setIsModalOpen(false)}
                      >
                        &times;
                      </button>
                      <h2 className="modal-title">Add New Product</h2>
                      <form>
                        <div className="form-group">
                          <label>Product Name</label>
                          <input type="text" placeholder="Enter product name" />
                        </div>

                        <div className="form-group">
                          <label>Product Image</label>
                          <input type="file" />
                        </div>

                        <div className="form-group">
                          <label>Farm Location/ID</label>
                          <input
                            type="text"
                            placeholder="Enter farm location"
                          />
                        </div>

                        <div className="form-group">
                          <label>Price</label>
                          <input type="number" placeholder="Enter price" />
                        </div>

                        <div className="form-group">
                          <label>Quantity</label>
                          <input type="number" placeholder="Enter quantity" />
                        </div>

                        <div className="form-group">
                          <label>Description</label>
                          <textarea placeholder="Enter product description"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                          Add Product
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="card-product orders-card">
              <h3>Total Orders</h3>
              <p className="stat-count">0</p>
              <p className="recency">Last month Order ↑</p>
            </div>

            <div className="card-product orders-card">
              <h3>New Orders</h3>
              <p className="stat-count">0</p>
              <p className="recency">Last month Order ↑</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
