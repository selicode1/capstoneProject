import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../components/Sidebar";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { useAuth } from "../AuthContext";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Dashboard = () => {
  const { user } = useAuth();

  // Dashboard stats states
  const [sales, setSales] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [newOrders, setNewOrders] = useState(0);
  const [successfulOrders, setSuccessfulOrders] = useState(0);
  const [profitChartData, setProfitChartData] = useState({
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
    datasets: [
      {
        label: "Total Profit ($)",
        data: new Array(12).fill(0),
        borderColor: "#fff",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        tension: 0.4,
        fill: true,
      },
    ],
  });
  const [topSellingData, setTopSellingData] = useState({
    labels: [],
    datasets: [
      {
        label: "Units Sold",
        data: [],
        backgroundColor: "#FF5733",
      },
    ],
  });
  const [orders, setOrders] = useState([]);
  const [customersForWeek, setCustomersForWeek] = useState(0);

  // Chart options for profit chart
  const profitChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#ddd" },
      },
      y: {
        grid: { display: false },
        ticks: { color: "#ddd" },
        beginAtZero: true,
      },
    },
  };

  // Chart options for top selling chart
  const topSellingOptions = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  // Fetch dashboard data on component mount
  useEffect(() => {
    async function fetchDashboardData() {
      try {
        const token = localStorage.getItem("token"); 
        if (!token) {
          console.log("User not logged in");
        }
        const response = await fetch("http://192.168.17.62:8000/api/farmer_dashboard", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();

        // Update dashboard states with returned data
        setSales(data.Balance);
        setTotalOrders(data.total_Orders);
        // Assuming newOrders and successfulOrders are returned or can be derived from Order_types
        // Here you can update them if needed:
        if(data.Order_types) {
          setNewOrders(data.Order_types.new || 0);
          setSuccessfulOrders(data.Order_types.successful || 0);
        }
        setCustomersForWeek(data.Customers_for_week);

        // Update profit chart data
        const profitLabels = Object.keys(data.Profit_chart).sort();
        const profitValues = profitLabels.map(label => data.Profit_chart[label]);
        setProfitChartData({
          labels: profitLabels,
          datasets: [
            {
              label: "Total Profit ($)",
              data: profitValues,
              borderColor: "#fff",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              tension: 0.4,
              fill: true,
            },
          ],
        });

        // Update top selling chart data
        if (data.top_selling_products) {
          const labels = Object.keys(data.top_selling_products);
          const values = Object.values(data.top_selling_products);
          setTopSellingData({
            labels: labels,
            datasets: [
              {
                label: "Units Sold",
                data: values,
                backgroundColor: "#FF5733",
              },
            ],
          });
        }
        // For orders, update state if you add an API for orders later
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    }

    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  return (
    <div className="dash">
      <Sidebar />
      <div className="dashboard">
        <div className="dash-head">
          <h1 className="dash-title">Dashboard</h1>
          <div className="icon">
            <input type="text" placeholder="Search" className="search-top" />
            <i className="fi fi-rr-list ico"></i>
            <i className="fi fi-rr-bell-notification-social-media ico"></i>
          </div>
        </div>

        <div className="dashboard-container">
          <div className="welcome-card">
            <div>
              <h2>Welcome,   {user || "Guest"}</h2>
              <p>Here are your recent statistics</p>
            </div>
          </div>
          <div className="rank-area">
            <div className="left-panel">
              <div className="card orders-card">
                <h3>Sales</h3>
                <p className="cash-in-amount">{sales}</p>
                <p className="recency">Last month Order ↑</p>
              </div>

              <div className="card orders-card">
                <h3>Total Orders</h3>
                <p className="stat-count">{totalOrders}</p>
                <p className="recency">Last month Order ↑</p>
              </div>

              <div className="card orders-card">
                <h3>New Orders</h3>
                <p className="stat-count">{newOrders}</p>
                <p className="recency">Last month Order ↑</p>
              </div>

              <div className="card orders-card">
                <h3>Successful Orders</h3>
                <p className="stat-count">{successfulOrders}</p>
                <p className="recency">Last month Order ↑</p>
              </div>
            </div>

            {/* Right Panel */}
            <div className="right-panel">
              <div className="sales-container">
                {/* Top Selling Products Chart */}
                <Bar data={topSellingData} options={topSellingOptions} />
              </div>

              <div className="profit-dashboard">
                <div className="profit-summary">
                  <div className="profit-card">
                    <i className="fi fi-rr-users"></i>
                    <p>New Customers</p>
                    <p>
                      {customersForWeek} <span className="profit-negative">+0%</span>
                    </p>
                    <small>Last Week</small>
                  </div>
                  <div className="profit-card">
                    <i className="fi fi-rr-money"></i>
                    <p>Total Profit</p>
                    <p>
                      ${sales} <span className="profit-positive">+0%</span>
                    </p>
                    <small>Weekly Profit</small>
                  </div>
                </div>

                <div className="profit-chart">
                  <h4>Total Profit</h4>
                  <Line data={profitChartData} options={profitChartOptions} />
                </div>
              </div>

              <div className="profile-card1">
                <div className="profile-header">
                  <h3>Profile</h3>
                  <div className="rank-badge">#No Rank</div>
                </div>
                <div className="profile-info">
                  <img src="/src/assets/user.png" alt="pro-pic" className="profile-pic" />
                  <h4 className="profile-name">  {user || "Guest"}</h4>
                  <small>Loading...</small>
                  <div className="rating1">Rating: N/A</div>
                  <div className="profile-card1-footer">
                    <a href="/audience">View Reviews →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="orders-section">
            <div className="search-filter-container">
              <h4 style={{ fontWeight: "bold" }}>Recent Orders</h4>
              <a href="/product" className="print-button">
                <span className="print-text">View all</span>
              </a>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Customer name</th>
                  <th>Product name</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.name}</td>
                      <td>{order.product_name}</td>
                      <td>{order.quantity}</td>
                      <td>{order.date}</td>
                      <td>{order.price}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No recent orders found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
