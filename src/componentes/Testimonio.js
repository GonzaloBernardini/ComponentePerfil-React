import React from 'react';
import '../estilosPersonales/testimonio.css';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' 
            alt='foto testimonio'
            src={require(`../imagenes/testimonio-${props.imagen}.png`)} />
            <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
            <p className='cargo-testimonio'> {props.cargo} en <strong>{props.empresa}</strong></p>
            <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}
export default Testimonio;