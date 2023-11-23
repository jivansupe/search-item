import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import DrugSearch from './views/pages/DrugSearch/DrugSearch';
import DrugDetails from './views/pages/DrugDetails/DrugDetails';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="drugs/search" element={<DrugSearch />} />
          <Route exact path="drugs/:drugName" element={<DrugDetails />} />
          {/* <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} /> */}
        </Routes>
        {/* <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="drugs/search">DrugSearch</Link></li>
          </ul>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
