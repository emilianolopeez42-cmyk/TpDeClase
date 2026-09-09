import React from 'react'
import FichaDeTurno from './Componentes/FichaDeTurnos/FichaDeTurno'
import './Componentes/FichaDeTurnos/FichaDeTurno.css'


export default function App() {
  return (
    <div>

      <FichaDeTurno cargando={true} />
      <FichaDeTurno error={true} />
      <FichaDeTurno turno={null} />
      <FichaDeTurno turno={{
        paciente: 'Emiliano Lopez',
        hora: '11:30',
        urgente: true,
        observaciones: 'Traer estudios previos',
        sesiones: 4
      }} />
      <FichaDeTurno turno={{
        paciente: 'Ana Gómez',
        hora: '10:00',
        urgente: false,
        observaciones: '',
        sesiones: 0
      }} />
    </div>
  )
}
