import React from 'react';
import Sidebar from '../components/Sidebar';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import "./Statistics.css";
import { useEffect, useState } from "react";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

// Function to generate random data
const generateRandomData = (length, min, max) => {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

const moneyForm = generateRandomData(1, 500, 5000)[0].toLocaleString("gh-GH", {
  style: "currency",
  currency: "GHS",
});




export default function Statistics() {
  const [revenue, setRevenue] = useState(null);
  const [unrealizedProfit, setUnrealizedProfit] = useState(0);
  const [pending, setPending] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const [cancelled, setCancelled] = useState(0);
  const [SalesCategories, setSales] = useState(0);
  
 
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;

    async function fetchData() {
      try {
        const response = await fetch("http://192.168.9.90:8000/api/farmer/statistics", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch statistics data");

        const data = await response.json();
        console.log(data)
        setRevenue(data.user_balance);
        setUnrealizedProfit(data.unrealized);
        if (data.order_types){
          setPending(data.order_types.pending || 0)
          setDelivered(data.order_types.delivered || 0)
          setCancelled(data.order_types.cancelled || 0)
          setTotalOrders(pending + delivered + cancelled)
          setSales(data.salesCategory)
        }
        
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, [token]);

  





















  // Randomized Data
  const orderData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: generateRandomData(6, 10, 100), // Random orders between 10 and 100
        borderColor: "#047857",
        backgroundColor: "rgba(51, 102, 255, 0.2)",
        tension: 0.4, // Smooth curve
        fill: true,
      },
    ],
  };

  const orderOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const orderStatusData = {
    labels: ["Pending", "Delivered", "Canceled"],
    datasets: [
      {
        data: [pending, delivered, cancelled], // Random order status counts
        backgroundColor: ["#FFC107", "#28A745", "#DC3545"],
      },
    ],
  };

  const orderStatusOptions = {
    responsive: true, // ✅ Makes the chart responsive
    maintainAspectRatio: false, // ✅ Allows it to adjust properly in different screen sizes
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 14, // ✅ Increases font size for better readability
            weight: "bold",
          },
          color: "#333", // ✅ Sets legend text color
          padding: 20, // ✅ Adds space between legend items
        },
      },
    },
    layout: {
      padding: 15, // ✅ Adds some spacing around the chart
    },
  };

  const topSellingOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // ✅ Removes gridlines on X-axis
        },
      },
      y: {
        grid: {
          display: false, // ✅ Removes gridlines on Y-axis
        },
        ticks: {
          beginAtZero: true, // ✅ Ensures the scale starts from zero
        },
      },
    },
  };
  

  const topSellingData = {
    labels: ["Product Sales"],
    datasets: [
      {
        label: "Product X",
        data: generateRandomData(1, 50, 200),
        backgroundColor: "#FF5733",
        borderRadius: 10,
      },
      {
        label: "Product B",
        data: generateRandomData(1, 50, 200),
        backgroundColor: "#33FF57",
        borderRadius: 10,
      },
      {
        label: "Product C",
        data: generateRandomData(1, 50, 200),
        backgroundColor: "#3380FF",
        borderRadius: 10,
      },
      {
        label: "Product D",
        data: generateRandomData(1, 50, 200),
        backgroundColor: "#F39C12",
        borderRadius: 10,
      },
      {
        label: "Product E",
        data: generateRandomData(1, 50, 200),
        backgroundColor: "#8E44AD",
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="dash">
      <Sidebar />
      <div className="dashboard">
        <div className="dash-head">
          <h1 className="dash-title">Statistics</h1>
          <div className="icon">
            <i className="fi fi-rr-search ico"></i>
            <i className="fi fi-rr-list ico"></i>
            <i className="fi fi-rr-bell-notification-social-media ico"></i>
          </div>
        </div>

        <div className="dash-contain">
          {/* Left Section */}
          <div className="left-side">
            {/* Key Metrics */}
            <div className="metrics">
              <div className="card small moneyBox">
                <h6>Total Revenue</h6>
                <p className="value">{(revenue || 0).toLocaleString("gh-GH", {style: "currency", currency: "GHS"})}</p>
                <span>+{generateRandomData(1, 1, 20)[0]}% this month</span>
              </div>


              <div className="card small">
                <h6>Unrealized Revenue</h6>
                <p className="value">{(unrealizedProfit ?? 0).toLocaleString("gh-GH", { style: "currency", currency: "GHS" })}</p>
                <span>+{generateRandomData(1, 1, 20)[0]}% this month</span>
              </div>

              <div className="card small">
                <h6>Total Orders</h6>
                <p className="value">{pending + delivered + cancelled}</p>
                <span>
                  Completed: {delivered} | Pending: {pending} | Canceled: {cancelled}
                </span>
              </div>

              
            </div>

            {/* Order Trends Graph */}
            <div className='graph-container'>
              <div className="card chart-container">
                <h3>Order Trends</h3>
                <Line data={orderData} options={orderOptions} />
              </div>

              {/* Orders by Status (Pie Chart) */}
              <div className="card chart-container">
                <h3>Orders by Status</h3>
                {/* Put an if statement here to show no data found  */}
                <Pie  className='pieChart' data={orderStatusData} options={orderStatusOptions} />
              </div>
            </div>

            <div className='graph-container'>
              {/* Top-Selling Products (Bar Chart) */}
              <div className="card chart-container">
                <h3>Top Selling Categories</h3>
                <Bar className='chartCategories'  data={topSellingData} options={topSellingOptions} />
              </div>

              {/* Top Sales Months (Bar Chart) */}
              <div className="card chart-container">
                <h3>Top Sales Months</h3>
                <Bar data={topSellingData} options={topSellingOptions} />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-side">
            {/* Orders by Region (Placeholder) */}
            <div className="card small notifications">
              <h6>Notifications</h6>
              <div className="not-container">
                <div className='me-box'>
                  <h4>Pending Orders</h4>
                  <p>Hello You have 3 pending orders</p>
                </div>
                <div className='me-box'>
                  <h4>Cash In</h4>
                  <p>Your Account has been credited with GHS24.00 from order 123122</p>
                </div>
                <div className='me-box'>
                  <h4>New Order</h4>
                  <p>Hello Please You have recieved a new order in your email</p>
                </div>
                <div className='me-box'>
                  <h4>New Order</h4>
                  <p>Hello Please You have recieved a new order in your email</p>
                </div>
                <div className='me-box'>
                  <h4>New Order</h4>
                  <p>Hello Please You have recieved a new order in your email</p>
                </div>
              </div>
            </div>

            {/* Payment Methods Used */}
            <div className="card small">
              <div className="head-items">
                <h6>Payment Methods</h6>
                <button>Add method</button>
              </div>
              <img src="" alt="" />
              <div className="card2">
                <h2 className='card-logo'>AGRI-<span>LINK</span></h2>
                <img className='evm'  src="/assets/evm.png" alt=""/>
                <h3 className='cardNum'>1234 5678 9101 1121</h3>
                <div className="name-items">
                  <h3 className='cardholder'>CARDHOLDER</h3>
                  <div className="inner-items">
                    <h3 className='name'>FARMER KWASI</h3>
                    <h3 className='styled'>PLATINUM</h3>
                  </div>
                </div>
              </div>
              {/* <p className="value">Mobile Money: {generateRandomData(1, 20, 70)[0]}%</p>
              <p className="value">Bank Transfer: {generateRandomData(1, 5, 40)[0]}%</p>
              <p className="value">Cash: {generateRandomData(1, 5, 50)[0]}%</p> */}
            </div>

            {/* Export Reports */}
            <div className="export-card">
              <h3>Export Reports</h3>
              <button className="export-btn">Download CSV</button>
              <button className="export-btn">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
