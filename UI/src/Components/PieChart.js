import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import { Doughnut } from 'react-chartjs-2';

const PieChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pie-chart'); // Replace with your actual API endpoint
        const label = response.data.map(item => item.label);
        const value = response.data.map(item => item.value);

        // Assuming your API sends an object with "labels" and "values" properties
        setData({
          labels: label,
          datasets: [
            {
              data: value,
            //   backgroundColor: [
            //     'rgba(255, 99, 132, 0.7)',
            //     'rgba(54, 162, 235, 0.7)',
            //     'rgba(255, 206, 86, 0.7)',
            //     // Add more colors as needed
            //   ],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once

  return (
    <div>
      <h2>Pie Chart</h2>
      <div style={{ maxWidth: '400px', margin: 'auto' }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default PieChart;
