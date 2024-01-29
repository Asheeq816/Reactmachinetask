// App.js
import React from 'react';
import './App.css';
import ApiDataTable from './Components/ApiDataTable';
import PieChart from './Components/PieChart';
import Graph from './Components/Graph';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      {}
      <div className="left-bar"></div>

      {}
      <div className="content">
        <Dashboard />
        <div className="charts">
          <PieChart />
          <Graph />
        </div>
        <ApiDataTable />
      </div>
    </div>
  );
}

export default App;
