// ApiDataTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Grid } from '@mui/material';
import PieChart from './PieChart';
import Graph from './Graph';

const ApiDataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/table');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Quantity', accessor: 'quantity' },
    { header: 'Price', accessor: 'price' },
  ];

  return (
    <Grid container style={{ height: '100%' }}>
      {/* Main content */}
      <Grid item xs={12} style={{ padding: '20px' }}>
        <Grid container direction="column" spacing={2}>
          {/* Statboard at the top */}
          

          {/* Table */}
          <Grid item>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {columns.map(function (column) {
                      return <TableCell key={column.accessor}>{column.header}</TableCell>;
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(function (row) {
                    return (
                      <TableRow key={row.id}>
                        {columns.map(function (column) {
                          return <TableCell key={column.accessor}>{row[column.accessor]}</TableCell>;
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ApiDataTable;
