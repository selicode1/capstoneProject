import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import './SalesChart.css'

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SalesChart = () => {
    const data = {
        labels: ["Electronic", "Furniture", "Clothes", "Shoes"],
        datasets: [
          {
            label: "Sales Overview",
            data: [55640, 11420, 1840, 2120], // Sales data
            backgroundColor: [
              "#66cc33", // Light Green
              "#339900", // Darker Green
              "#99cc66", // Soft Green
              "#66aa33", // Medium Green
            ],
            borderColor: "rgba(0, 0, 0, 0)", // No borders
            borderWidth: 2,
            hoverOffset: 6,
          },
        ],
      };
    
      const options = {
        responsive: true,
        cutout: "70%", // Creates the ring effect
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#333",
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            displayColors: true,
          },
        },
      };

  return (
    <div className="dough-chart p-4 rounded-lg">
      <Doughnut data={data} options={options} />
      <div className="chart-center-text">
        <div className="main-text">0</div>
        <div className="sub-text">Weekly Visits</div>
      </div>
    </div>
  );
};

export default SalesChart;
