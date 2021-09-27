import './Contact.css';
import React from 'react';
import {
    Modal,Button
} from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Competencias
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
          <h4>Habilidades a destacar</h4>
          <p className='texton' > 
          Mis mejores habilidades respecto al menejo proyectos y lenguajes de programacion es SQL ya que en anteriores me especialice
            en la creacion de base de datos y sus relaciones , tambien manejo PHP , js y java los 
            cuales al ser lenguajes logicos son mas complejos de manera.
          </p>
          </center>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>volver</Button>]
          
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModal1(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Formacion academica 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4> </h4>
          <p className='texton'>
            Mi formacion academica empezo en el colegio Dulce Maria , por la localidad de suba
            en donde empeze a estudiar desde primaria hasta bachicher, luego decidi terminar mi
            tecnico y pasar de el a tecnologo , en el SENA  el cual me propuso estudiar una año y
            al finializar pasar a una etapa laboral para adquirir mas experencia.
            Mi viaje no para aqui , tengo planeado entrar a una universidad y seguir con mi estudio 
            apesar de conseguir trabajo gracias al tecnologo mi idea es seguir aprendiendo del mundo digital
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>volver</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Competencias
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <center>
          <h4>Habilidades a destacar</h4>
          </center>
          <p className='texton'>
            Mis mejores habilidades respecto al menejo proyectos y lenguajes de programacion es SQL ya que en anteriores me especialice
            en la creacion de base de datos y sus relaciones , tambien manejo PHP , js y java los 
            cuales al ser lenguajes logicos son mas complejos de manera.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>volver</Button>
          
        </Modal.Footer>
      </Modal>
    );
  }

function  Contact(){
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);

    return(

<div className="cuadromayor">
  <div className="unoinferior">

        <div className="contacto">
         
            <h2>CONTACTO</h2>
<div className="info"><i className="fas fa-envelope"></i>jacastro1430@misena.edu.co </div>
<div className="info"><i class="fas fa-street-view"></i>calle136#126c23 </div>
<div className="info"><i class="fas fa-phone-alt"></i>+57 3166244803 </div>
<h2>Habilidades y competencias</h2>

<center>
<p>JAVA</p><progress value="50" max="100"></progress>
<p>PHP</p><progress value="80" max="100"></progress>
<p>SQL</p><progress value="100" max="100"></progress>
</center>
</div>
</div>
<div classNme="dosinferior">



<h3 className="texton">Habilidades destacables</h3>
<Button variant="primary" onClick={() => setModalShow(true)}>
        Mas informacion 
      </Button>
      <h3 className="texton">Donde me forme academicamente</h3>
     

      <Button variant="primary" onClick={() => setModalShow1(true)}>
        Mas informacion 
      </Button>
<h3 className="texton">Experencia con proyectos digitales</h3>
      <Button variant="primary" onClick={() => setModalShow2(true)}>
        Mas informacion 
      </Button>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <MyVerticallyCenteredModal1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
        <MyVerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />


            
	
            </div>
            
        </div>
       
    )
}

export default Contact;