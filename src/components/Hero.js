import React from "react";
import backImage from "../assets/image/home-hero.jpg";

//(20) Sviluppo il mio Hero Component che sarà riutilizzabile
const Hero = ({ children, img, disableOverlay }) => {
  //(21) aggiungo immagine di default se per caso ci dimenticassimo di passarne una:
  const image = img ? img : backImage;

  return (
    <div
      className="hero-img-container"
      style={{
        background: `url(${image})`, //Guarda punto 21
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={`${!disableOverlay ? "hero-overlay" : ""}`}>
        <div className="container hero-container">{children}</div>
      </div>
    </div>
  );
};

export default Hero;

// (22 passo l'image di default a AboutScreen.js)
