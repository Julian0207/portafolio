import './Razas.css';
import modalRazas from './modalRazas';
function Razas(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
   
      <img src={props.img} className="cards-img-top" alt="..." />
    
      <div className="card-body">
        <h5 className="card-title">{props.raza}</h5>
        <p className="card-text">{props.descripcion}</p>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-bs-target={`#modal${props.id}`}>
      Ver más
    </button>
    </div>
<modalRazas id={`modal${props.id}`}/>
</div>
  );
}

export default Razas;