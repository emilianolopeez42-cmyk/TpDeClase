import React, { useState } from 'react'


function FichaDeTurno({cargando, error, turno}) {

    if (cargando) {
        return (<p>Todavia no llegaron los datos..</p>);
    }

    if (error) {
        return (<p>La busqueda fallo...</p>);
    }
    if (!turno) {
        return (<p>No hay turno...</p>);
    }
    
    const claseContenedor = turno.urgente 
    ? 'ficha-turno ficha-turno--urgente' 
    : 'ficha-turno';

    return (
        <div className={claseContenedor}>
                <h2>Ficha de Turno </h2>
                <p>Paciente: {turno.paciente}</p>
                <p>Fecha: {turno.fecha}</p>
                <p>Hora: {turno.hora}</p> 
                {turno.urgente && <span className="insignia-urgente">Urgente</span>}
                <p>Observaciones: {turno.observaciones ?? 'No hay observaciones'}</p>
                <p>Sesiones: {turno.secciones}</p>
        </div>
    )

}

export default FichaDeTurno;
