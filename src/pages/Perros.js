import Raza from '../components/razas/Razas';
import {perros} from '../components/razas/Perros.json';
function Perros (){

return(

<div className="container-fluid">

<h1>Conoce sobre tus mascotas</h1>
<div className="row">
{ perros.map(perro=>(

<div className="col-12 col-md-4" key={perro.id}> 

<Raza id={perro.id} img={perro.thumbnail} raza={perro.raza} descripcion={perro.descripcion} acercade={perro.acercade} pais={perro.pais}/>

</div>

)) }

</div>
</div>

);

}

export default Perros;