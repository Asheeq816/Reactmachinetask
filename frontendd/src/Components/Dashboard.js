import React from 'react';
import { Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div className="Dashboard">
    <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: 'orange' }}>
              Good Morning..
            </Typography>
      {/* Add any other dashboard content here */}
    </div>
  );
};

export default Dashboard;
