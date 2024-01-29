import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/graph'); // Replace with your actual API endpoint
       

        setData({
          labels: response.data.map(item => item.x),
          datasets: [
            {
              label: 'Graph Data',
              data: response.data.map(item => item.y),
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
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
      <h2>Graph</h2>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <Line
          data={data}
          options={{
            scales: {
              x: {
                type: 'category',
                labels: data.labels,
              },
              y: {
                min: 0,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
