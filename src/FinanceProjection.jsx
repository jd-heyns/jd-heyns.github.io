import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {

Chart as ChartJS,
LineElement,
CategoryScale,
LinearScale,
PointElement,
Legend,
Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip);

// Example assets and their historical returns (dummy data)
const assets = [
{ name: "Stocks", returns: [0, 2, 5, 7, 10, 12, 15, 18, 20, 22, 25] },
{ name: "Bonds", returns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
{ name: "Gold", returns: [0, 1.5, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
];

const years = Array.from({ length: 11 }, (_, i) => `Year ${i}`);

function normalizeWeights(weights) {
const total = weights.reduce((a, b) => a + b, 0);
return weights.map((w) => (total === 0 ? 1 / weights.length : w / total));
}

export default function FinanceProjection() {
const [weights, setWeights] = useState([0.5, 0.3, 0.2]);

const handleSlider = (idx, value) => {
    const newWeights = [...weights];
    newWeights[idx] = parseFloat(value);
    setWeights(newWeights);
};

const normWeights = normalizeWeights(weights);

// Calculate portfolio returns
const portfolioReturns = assets[0].returns.map((_, i) =>
    assets.reduce((sum, asset, j) => sum + asset.returns[i] * normWeights[j], 0)
);

const data = {
    labels: years,
    datasets: [
        ...assets.map((asset, i) => ({
            label: asset.name,
            data: asset.returns,
            borderColor: ["#3b82f6", "#10b981", "#f59e42"][i],
            fill: false,
            borderDash: [5, 5],
            pointRadius: 0,
        })),
        {
            label: "Portfolio",
            data: portfolioReturns,
            borderColor: "#ef4444",
            fill: false,
            pointRadius: 3,
            borderWidth: 3,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { position: "top" },
        tooltip: { mode: "index", intersect: false },
    },
    scales: {
        y: { beginAtZero: true, title: { display: true, text: "Value (%)" } },
        x: { title: { display: true, text: "Time" } },
    },
};

return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2>Portfolio Performance Projection</h2>
        <div style={{ marginBottom: 30 }}>
            {assets.map((asset, i) => (
                <div key={asset.name} style={{ margin: "10px 0" }}>
                    <label>
                        {asset.name}: {(normWeights[i] * 100).toFixed(1)}%
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={weights[i]}
                            onChange={(e) => handleSlider(i, e.target.value)}
                            style={{ width: 200, marginLeft: 10 }}
                        />
                    </label>
                </div>
            ))}
            <div style={{ fontSize: 12, color: "#BBB" }}>
                (Weights are normalized to sum to 100%)
            </div>
        </div>
        <Line data={data} options={options} />
    </div>
);
}