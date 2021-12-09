import React from "react";
import { Hero } from "../components";
import backImage from "../assets/image/Contact-hero.png";
import useTitle from "../useTitle";

//(25) Modifico la facciata della pagina dei contatti.
const ContactScreen = () => {
  useTitle("Contattaci"); //(45)
  return (
    <>
      <Hero img={backImage} disableOverlay>
        <div className="contact-hero container">
          <div className="contact-hero-text">
            <div className="contact-hero-title">
              <h2 className="contact-title">
                Vorresti aggiungere un Cocktail?
              </h2>
              <h4 className="contact-subtitle">
                Il nostro team è semore disponibile per valutare possibili nuove
                ricette ed ad aggiungere alla nostra database
              </h4>
            </div>
          </div>
          <div className="contact-form-container container">
            <form
              action="https://formspree.io/f/mdoboorl"
              method="POST"
              className="contact-form container"
            >
              <div className="form-group">
                <label htmlFor="email">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="name"
                  className="input"
                  placeholder="Daniele"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="cognome">Cognome</label>
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  className="input"
                  placeholder="Pani"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="daniele@esempio.com"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="cellulare">Telefono</label>
                <input
                  type="cel"
                  id="cellulare"
                  name="cellulare"
                  className="input"
                  placeholder="555 555-555"
                />
                <hr />
              </div>
              <div className="form-group">
                <label htmlFor="ricetta">La tua ricetta</label>
                <input
                  type="text"
                  id="ricetta"
                  name="ricetta"
                  className="input"
                  placeholder="Descrivi la tua ricetta"
                />
                <hr />
              </div>
              <button type="submit" className="btn btn-primary">
                Invia Ricetta
              </button>
            </form>
          </div>
        </div>
      </Hero>
    </>
  );
};

export default ContactScreen;
//(26 modifico la Home page --> HomeScreen.js)
