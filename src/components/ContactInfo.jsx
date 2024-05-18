import React from "react";
import Map from './Map';
export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
<<<<<<< HEAD
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">Ubicacion</h2>
            <p className="mb-5">García Moreno, OE1742 y Eugenio Espejo (Centro Histórico)</p>
            <h3>Horario de Apertura</h3>
            <p className="m-0">Lunes a Viernes - 08:00 - 21:00</p>
            <p>Sabados, Domingos y Feriados - 8:00 - 19:30</p>
=======
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">¿Dónde encontrarnos?</h2>
            <Map />
            <p className="mb-5">Av. Oswaldo Guayasamín y Pje. El Valle</p>
            <h3>Horario de atención</h3>
            <p className="m-0">Lunes - Viernes: 10:00 - 21:00</p>
            <p>Sabado - Domingo: 10:00 - 20:00</p>
>>>>>>> ca577ce954b22d315e11ba98f49b12bb439f1cea
        </div>
    )
}