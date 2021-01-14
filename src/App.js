import { Router, Link } from '@reach/router';
import Location from './components/Location';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Appetisers from "./components/Appetisers";
import Entrees from "./components/Entrees";
import Desserts from "./components/Desserts";


function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Dojo Diner</h1>
      </div>
      {/* <ul className="nav nav-tabs mt-5">
        <li className="nav-item">
         
          <Link className = "nav-link" to="/location/dc">DC Location</Link>
        </li>
        <li className="nav-item">
          <Link className = "nav-link" to="/location/bali">Bali Location</Link>
        </li>
        <li className="nav-item">
          <Link className = "nav-link" to="/location/miami">Miami Location</Link>
        </li>
      </ul> */}

      <ul className="nav nav-tabs mt-5">
        <li className="nav-item">
         
          <Link className = "nav-link" to="/entrees">Entrees</Link>
        </li>
        <li className="nav-item">
          <Link className = "nav-link" to="/appetisers">Appetisers</Link>
        </li>
        <li className="nav-item">
          <Link className = "nav-link" to="/desserts">Desserts</Link>
        </li>
      </ul>
     

      <Router>
        {/* path("location/<locationname>, views.somefunction") */}
          <Appetisers path = "/appetisers"></Appetisers>
          <Entrees path = "/entrees"></Entrees>
          {/* <Home path = "/"></Home> */}
          <Desserts path= "/desserts"></Desserts>
          <Location path = "/location/:place"></Location>
          {/* <NotFound path ="*"></NotFound> */}

      </Router>
    </div>
  );
}

export default App;
