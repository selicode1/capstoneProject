import React from "react";
import "./donut-chart.css"



const DonutChart = () => {
  return (
    <div class="donut-card">
        <div class="donut-chart">
            <svg viewBox="0 0 36 36">
                <circle class="circle-bg" cx="18" cy="18" r="15.915"></circle>
                <circle class="circle-expense" cx="18" cy="18" r="15.915"></circle>
                <circle class="circle-income" cx="18" cy="18" r="15.915"></circle>
                <circle class="circle-total-sale" cx="18" cy="18" r="15.915"></circle>
                <circle class="circle-refunded" cx="18" cy="18" r="15.915"></circle>
            </svg>
            <div class="donut-text">
                <p>Total</p>
                <h3>$3M</h3>
            </div>
        </div>
        <div className="chart1">
        <div class="chart-legend">
            <div class="legend-item"><span class="legend-box income"></span> Income</div>
            <div class="legend-item"><span class="legend-box total-sale"></span> Total Sale</div>
            <div class="legend-item"><span class="legend-box expense"></span> Expense</div>
            <div class="legend-item"><span class="legend-box refunded"></span> Refunded</div>
        </div>
        <div class="view-reports">
            View Report →
        </div>
        </div>
    </div>
  );
};

export default DonutChart;
