import{
   Link
  } from "react-router-dom";


function Home(){

    return(

        <div>
            <h1>Página principal</h1>
            <a><Link to="/portafolio">Ir al portafolio</Link> </a>
        </div>

    );
}

export default Home;