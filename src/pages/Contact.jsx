import React, { useState } from "react";
import "./Contact.css";
import "./Home.css";
import { ContactInfo } from "../components/ContactInfo";
import { Form, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState({ date: "", guests: "" });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const today = new Date().toISOString().split("T")[0];
    setDate(selectedDate);
    if (selectedDate < today) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "La fecha debe ser desde hoy en adelante.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, date: "" }));
    }
  };

  const handleGuestsChange = (e) => {
    const selectedGuests = e.target.value;
    setGuests(selectedGuests);
    if (selectedGuests < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        guests: "El número de invitados debe ser al menos 1.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, guests: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_SERVICEID;
    const templateId = process.env.REACT_APP_TEMPLATEID;
    const publicKey = process.env.REACT_APP_PUBLICKEY;

    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "La fecha debe ser desde hoy en adelante.",
      }));
    }
    if (guests < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        guests: "El número de invitados debe ser al menos 1.",
      }));
    }
    if (date >= today && guests >= 1) {
      // Submit the form
      console.log("Form submitted:", { date, guests });
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: "Restaurante La Mesa de Todos",
      message: message,
      from_email: email,
      from_phone: phoneNum,
      from_date: date,
      from_guests: guests,
    };

    //enviar email por emailjs
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setLastName("");
        setFirstName("");
        setEmail("");
        setMessage("");
        setPhoneNum("");
        setDate("");
        setGuests(1);
      })
      .catch((error) => {
        console.log("Email failed to send", error);
      });
  };

  return (
    <div className="contact-page" id='find-us-2'>
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Contáctanos</h1>
        </div>
      </header>

      <div className="container my-5" >
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <ContactInfo />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="first-name">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    id="first-name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="last-name">Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    id="last-name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    required
                  />
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="email-address">
                    Correo Electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    id="email-address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="phone-number">N° Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    id="phone-number"
                    value={phoneNum}
                    onChange={(e) => {
                      setPhoneNum(e.target.value);
                    }}
                    required
                  />
                </div>
              </Form.Group>
              <Form.Group className="row mb-3">
                <div className="col-md-6">
                  <Form.Label htmlFor="date">Fecha de Reserva</Form.Label>
                  <Form.Control
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    required
                  />
                  {errors.date && <Alert variant="danger">{errors.date}</Alert>}
                </div>
                <div className="col-md-6">
                  <Form.Label htmlFor="guests-number">
                    Número de Invitados
                  </Form.Label>
                  <Form.Control
                    type="number"
                    id="guests-number"
                    value={guests}
                    onChange={handleGuestsChange}
                    required
                  />
                  {errors.guests && (
                    <Alert variant="danger">{errors.guests}</Alert>
                  )}
                </div>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label htmlFor="comments">Mensaje Adicional</Form.Label>
                <Form.Control
                  type="textarea"
                  id="comments"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <button type="submit" className="btn btn-success btn-lg">
                Reservar
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
