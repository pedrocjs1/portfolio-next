"use client";
import { useState, useEffect } from "react";
import style from "./Contact.module.css";
import { send, init } from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const Swal = require("sweetalert2");

  useEffect(() => {
    init("nTXaQ2Lg9vkjyoBHt");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !msg ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      Swal.fire({
        title: "Error!",
        text: "Por favor complete todos los campos.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    send("service_g3yun4c", "template_gnri6s6", {
      from_name: email,
      to_name: name,
      message: msg,
    });
    setName("");
    setEmail("");
    setMsg("");
    Swal.fire({
      title: "Correo enviado!",
      icon: "success",
      confirmButtonText: "Ok",
    });
  };

  return (
    <section id={`${style.contact}`} className="p-5">
      <div>
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className={`${style.sectionHeading} text-black`}>Contact Us</h2>
            <h3 className={style.contactSubtitle}>Contactar conmigo</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className={style.formGroup}>
                    <input
                      value={name}
                      type="text"
                      className={style.formControl}
                      placeholder="Your Name *"
                      id="name"
                      required
                      data-validation-required-message="Please enter your name."
                      onChange={(event) => setName(event.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className={style.formGroup}>
                    <input
                      value={email}
                      type="email"
                      className={style.formControl}
                      placeholder="Your Email *"
                      id="email"
                      required
                      data-validation-required-message="Please enter your email address."
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={style.formGroup}>
                    <textarea
                      value={msg}
                      className={style.formControl}
                      placeholder="Your Message *"
                      id="message"
                      required
                      data-validation-required-message="Please enter a message."
                      onChange={(event) => setMsg(event.target.value)}
                    />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="clearfix" />
                <div className="col-lg-12 text-center">
                  <div id="success" />
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className={`btn ${style.btnSend} btn-xl`}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
