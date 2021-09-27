import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";
import{
  Link
 } from "react-router-dom";
function Portafolio(){

return(
  <><button type="button" class="btn btn-danger"><Link to="/home">Volver al inicio  </Link> </button><div className="container">
    <div className="left">
      <Header />
    </div>
    <div className="rigth">
      <Contact />
    </div>
  </div></>

);

}

export default Portafolio;