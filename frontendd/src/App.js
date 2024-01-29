import logo from './logo.svg';
import './App.css';
import ApiDataTable from './Components/ApiDataTable';
import PieChart from './Components/PieChart';
import Graph from './Components/Graph';

function App() {
  return (
    <div className="App">
      <ApiDataTable/>
      <PieChart/>
      <Graph/>
    </div>
  );
}

export default App;
