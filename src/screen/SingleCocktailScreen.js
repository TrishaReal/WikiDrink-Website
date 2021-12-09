import React from "react";
import { Loading, ErrorMessage } from "../components";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import useFetch from "../useFetch";
import useTitle from "../useTitle";
import { FaDraft2Digital } from "react-icons/fa";

//(39) Ora modifico la pagina delle ricette di ogni singolo drink:
//Interagisco con il secondo LINK dell'API, quindi ci sarà la necessità di richiamare lo useFetch,
//passandogli come primo paramentro un id e come secondo paramentro 'true' (esattamente come richiedere
//lo useFetch stesso che ha un 2° parametro per distinguere e cambiare in maniera dinamica quello che è
//L'utilizzo dello url di turno )
const SingleCocktailScreen = () => {
  //(40) Adesso mi serve ottenere questo 'id' passata come primo paramentro al nostro useFetch importato. Questo 'id' non è altro che
  //il valore che troviamo al termine del nostro link. Possiamo accedervi utilizzando il matchParams al quale possiamo accedere all'interno dei nostri componenti
  //attraverso il Route , oppure utilizzando lo useParams:
  const { id } = useParams(); //Restituisce un oggetto che contiene quelli che sono gli url params che passiamo all'interno della Route, che gestisce il link al quale mi trovo.
  const { isLoading, isError, data } = useFetch(`i=${id}`, true); //Guarda punto 39.

  //(44) Passo il mio custom hook useTitle:
  useTitle(data && data.drinks ? data.drinks[0].strDrink : "Not Found");
  //(45)Necessito passa questo custom hook in tutte le mie screen. -> AboutScreen.js

  //(41) Render Condizionale per controllare se stessi loggando:
  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  if (isError) {
    return (
      <Wrapper>
        <div className="container cocktail-content">
          <header>
            <Link to="/">
              <IoArrowBackCircleSharp className="icon" />
            </Link>
          </header>
          <ErrorMessage>Cocktail non disponibile </ErrorMessage>
        </div>
      </Wrapper>
    );
  }

  //(41) decostruisco il mio oggetto in modo poterlo utilizzare :
  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: type,
    strGlass,
    strDrinkThumb: image,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strInstructionsIT,
    strInstructions,
  } = data.drinks[0];

  //(42) mi costruisco poi un mio array di oggetti:
  const strInstructionsList = [
    { istruzione: strIngredient1, qty: strMeasure1 },
    { istruzione: strIngredient2, qty: strMeasure2 },
    { istruzione: strIngredient3, qty: strMeasure3 },
    { istruzione: strIngredient4, qty: strMeasure4 },
    { istruzione: strIngredient5, qty: strMeasure5 },
  ];

  return (
    <Wrapper>
      <div className="container cocktail-content">
        <header>
          <Link to="/">
            <IoArrowBackCircleSharp className="icon" />
          </Link>
          <h4 className="back-arrow">TORNA IN HOME</h4>
        </header>
        <hr />
        <div className="cocktail-container">
          <img src={image} alt={name} className="img" />
          <div className="cocktail-details">
            <div className="spacer">
              <h2>{name}</h2>
              <div className="cocktail-type">
                <p className="label">{type}</p>
                <p className="label">{category}</p>
                <p className="label">{strGlass}</p>
              </div>
            </div>
            <hr />
            <div className="spacer">
              <h4>Ingredienti:</h4>
              <ul className="instruction-list">
                {strInstructionsList.map((el, index) => {
                  if (el.istruzione) {
                    return (
                      <li key={index}>
                        <p className="info">
                          {el.qty} {el.istruzione}
                        </p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <hr />
            <div className="spacer">
              <h4>Istruzioni:</h4>
              <p className="info">
                {strInstructionsIT ? strInstructionsIT : strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 96vh;
  padding-bottom: 4rem;
  .spacer {
    display: grid;
    gap: 0.325rem;
  }
  .cocktail-content {
    display: grid;
    gap: 2rem;
    header {
      display: grid;
      align-items: center;
      justify-content: flex-start;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      margin-top: 2rem;
      margin-bottom: 0;
      .icon {
        font-size: 2.5rem;
        transition: var(--transition);
        &:hover {
          color: var(--byzantine);
          transform: scale(1.02);
        }
      }
      .back-arrow {
        text-transform: uppercase;
        color: var(--primary-gray);
        font-weight: 500;
      }
    }
    .cocktail-container {
      margin-top: 1rem;
      display: grid;
      gap: 2rem;
      .img {
        width: 100%;
        border-radius: var(--radius);
      }
      .cocktail-details {
        display: grid;
        gap: 1rem;
        h2 {
          text-transform: uppercase;
        }
        .cocktail-type {
          display: grid;
          grid-template-columns: auto auto auto;
          justify-content: flex-start;
          gap: 0.5rem !important;
          .label {
            text-transform: lowercase;
            font-size: 0.8em;
            font-weight: 700;
            letter-spacing: var(--letter-spacing);
            font-variant: small-caps;
            color: var(--soft-dark-gray);
            border: 1px solid var(--soft-light-gray);
            border-radius: var(--radius);
            background-color: var(--extra-light-gray);
            padding: 0rem 0.5rem;
          }
        }
        .info {
          color: var(--soft-dark-gray);
          max-width: 55ch;
        }
        h4 {
          color: var(--dark-gray);
        }
        .instruction-list {
          list-style: outside;
          padding-left: 1.1rem;
        }
      }
    }
  }
  @media screen and (min-width: 753px) {
    min-height: 84.5vh;
    hr {
      display: none;
    }
    .cocktail-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      .img {
        max-height: 500px;
        grid-column: 1/6;
        grid-row: 1/1;
        width: 100%;
      }
      .cocktail-datails {
        grid-column: 6/-1;
        grid-row: 1/1;
        width: 100%;
        gap: 1rem !important;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .cocktail-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      .img {
        max-height: 600px;
        grid-column: 1/5;
        grid-row: 1/1;
        width: 100%;
      }
    }
  }
`;

export default SingleCocktailScreen;

//(43 - creo un nuovo custom hook per modificare in maniera dinamica quello ch eè il titolo della pagina rispetto alla quale ci troviamo. -> useTitle.js)
