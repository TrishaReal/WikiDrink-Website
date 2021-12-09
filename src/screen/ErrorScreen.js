import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/animation/404-wine.json";
import { Link } from "react-router-dom";
import useTitle from "../useTitle";

//(17) Creo il mio ErrorScreen:
const ErrorScreen = () => {
  useTitle("Pagina Non Trovata");
  //(18) All'interno del mio wrapper aggiungo un'animazione 'Lottie' per abbellire la pagina Error.
  return (
    <Wrapper>
      <h3>Pagina Non Trovata</h3>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          reverse: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={500}
        height={400}
      />
      <Link to="/" className="btn btn-primary">
        Torna in Home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  display: --ms-grid;
  display: --moz-grid;
  display: --webkit-grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  .btn {
    border-radius: 22px;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;

//(19 inizio a creare la pagina about "Chi Siamo" utilizzanod anche Hero Component)
