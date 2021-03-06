import './App.css';
import Error404 from './pages/Error404';
import Perros from './pages/Perros';
import 'bootstrap/dist/css/bootstrap.min.css';

import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Portafolio from './pages/Portafolio';
function App() {
  return (
  <Router>

<Switch>

<Route exact path="/">

<Home/>

</Route>
<Route path="/portafolio">
<Portafolio/>
</Route>
<Route component={Error404}/>
<Route path="/perros">
  <Perros/>
</Route>

</Switch>

  </Router>
  
    );
}

export default App;
