import React, { useEffect, useState } from "react";
import { Hero, Cocktails, Loading, ErrorMessage } from "../components";
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie";
import animationData from "../assets/animation/drink-animation.json";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import useTitle from "../useTitle";

//(26) Inizio a modificare la Home page.
const HomeScreen = () => {
  useTitle("Home"); //(45)
  //(31)passo tutte le funzioni:
  const {
    query,
    isLoading,
    data,
    isError,
    count,
    searchCocktail,
    deleteScrollPosition,
    scrollPosition,
  } = useGlobalContext();

  //(27) Definisco uno 'state' per far funzionare l'input di ricerca dei drinks:
  const [input, setInput] = useState(query);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktail(input);
  };

  //(38) Dichiaro un useEffect che mi sarà utile per quando l'utente vuol tornare indietro nella lista dei drink,
  // si ritroverà sempre allo stesso punto in cui era senza necessità di un'ulteriore scroll o ricerca.
  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
      deleteScrollPosition();
    }
  }, []);

  return (
    <>
      <Hero>
        <div className="home-hero">
          <div className="home-hero-text">
            <div className="home-hero-title">
              <h2 className="brand-color">WIKI DRINK</h2>
              <h4>Tutti i cocktail del mondo a portata di click</h4>
            </div>
            <p>
              Wiki Drink è un database internazionale che mette a tua
              dispozione, in maniera{" "}
              <span className="brand-color">Gratuita</span> , le ricette dei più
              importanti e diffusi cocktail al mondo.
            </p>
            <Link to="/about" className="btn btn-primary">
              Scopri di più
            </Link>
          </div>
          <div className="home-hero-img">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                reverse: true,
                animationData,
                renederSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={360}
            />
          </div>
        </div>
      </Hero>

      <section className="container home-screen">
        <div className="search-bar">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="drink">
                <h4>Cerca il tuo drink</h4>
              </label>
              <div className="input-search">
                <input
                  id="drink"
                  className="input"
                  placeholder={query}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn icon-btn" type="submit">
                  <FaSearch className="icon" />
                </button>
              </div>
            </form>
          </div>
          <p className="result"> {count} risultati</p>
        </div>

        {!isLoading && isError ? (
          <ErrorMessage>Nessun Drink Trovato</ErrorMessage>
        ) : !isLoading && !isError ? (
          <Cocktails data={data.drinks} />
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
};

export default HomeScreen;

//(28 - creo un file su src --> useFetch.js per fetchare i dati dalle API)
//(32 - Modifico il file Cocktails.js per essere pronta a mostrare tutta la lista dei drink)
//(39 - Ora modifico il SingleCocktailScreen.js)
