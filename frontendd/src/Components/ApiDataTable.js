// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the Table component
const ApiDataTable = () => {
  // State to store the data from the API
  const [data, setData] = useState([]);

  // Effect to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API: endpoint
        const response = await axios.get('http://localhost:3001/api/table');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once

  // Table headers
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Quantity', accessor: 'quantity' },
    { header: 'Price' , accessor: 'price'}
  
  ];

  return (
    <div>
      <h2>API Data Table</h2>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiDataTable;
