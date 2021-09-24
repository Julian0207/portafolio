import './Header.css';
import foto from './foto.jpg';

function Header(){
    return(
<header>
    <div>
    <div className="parteuno">
    
    <div className="foto">
        <img src={foto} alt="Foto Julian" />
    </div>
<div className="texto">
    <h1><span className="nombre">Alexandra uwu</span></h1>
    <h3>Hoja de vida</h3>
    
</div>
</div>
<div className="partedos">

<h2 className="texnegro">ACERCA DE MÍ</h2>
            <p className="texnegro">Soy Julian Soy tecnico en programacion de software y proximo tecnologo , me considero bueno en diversos lenguajes de programacion como sql , php , java, js , css y el sistema escritor html  y quiero aprender mas!  </p>
            <h2 className="texnegro">Experencia laboral</h2>
            <p className="texnegro">Mi experencia laboral se basa en la creacion de un sistema para un colegio el cual calculaba las notas y las guardaba por estudiante y salon , tambien experencia como trabajador de supermercado </p>

</div>

</div>
</header>
    )
}

export default Header;