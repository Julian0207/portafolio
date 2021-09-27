import '../components/contact/Contact.css';
import{
    Link
   } from "react-router-dom";

function Home(){

    return(
        <><button type="button" class="btn btn-danger"><Link to="/portafolio">Ir al portafolio </Link> </button><div><center>
            <h1 className="pagprin">Página principal</h1>
            <div className="botonini">

            </div>
        </center>
        </div></>

    );
}

export default Home;