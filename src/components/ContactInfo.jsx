import React from "react";
import Map from './Map';
export function ContactInfo() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">¿Dónde encontrarnos?</h2>
            <Map />
            <p className="mb-5">Av. Oswaldo Guayasamín y Pje. El Valle</p>
            <h3>Horario de atención</h3>
            <p className="m-0">Lunes - Viernes: 10:00 - 21:00</p>
            <p>Sabado - Domingo: 10:00 - 20:00</p>
        </div>
    )
}