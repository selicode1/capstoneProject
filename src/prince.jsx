import React, { useEffect, useState } from "react";

export default function Statistics() {
  const [stats, setStats] = useState(null);
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
        setStats(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Statistics</h1>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {stats ? (
        <ul>
          <li>Sales: {stats.totalSales || 0}</li>
          <li>Total Orders: {stats.totalOrders || 0}</li>
          <li>New Orders: {stats.newOrders || 0}</li>
          <li>Successful Orders: {stats.successfulOrders || 0}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
