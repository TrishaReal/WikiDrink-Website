import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

//(1) Creazione Context
const AppContext = createContext();

const AppProvider = ({ children }) => {
  //(8) Mostra e nascondi sidebar: creo state per iniziare.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [query, setQuery] = useState("negroni");

  //(35a).
  const [scrollPosition, setScrollPosition] = useState(0);

  //(29) Passo il mio useFetch:
  const { isLoading, data, isError, count } = useFetch(`s=${query}`);

  //(30) Creo una funzione che mi permetta di mutare e variare il mio state query:
  const searchCocktail = (input) => {
    setQuery(input);
  };

  //(35b) Definisco le Scroll Position functions che andrò successivamente ad importarle nel file Cocktail.js
  const getScrollPosition = (value) => {
    setScrollPosition(value);
  };

  const deleteScrollPosition = (value) => {
    setScrollPosition(0);
  };

  //(10) Dichiaro due funzioni: 1° è per aprire la sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  //2° per chiudere la sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }; //Entrambe queste funzioni li andrò a passare all'interno del value di "AppContext.provider" qui sotto.

  //(9) passo un'oggetto a "AppContext.provider"
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar, //Guarda punto (10)
        closeSidebar, //Guarda punto (10)
        query,
        isLoading,
        data,
        isError,
        count,
        searchCocktail,
        scrollPosition,
        getScrollPosition,
        deleteScrollPosition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//(2) Custom Hook che ci permette di utilizzare il nostro context una volta importato.
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
//(3) importo app provider a index.js
//(11 importo useGlobalContext in sidebar per collegare le funzioni apri e chiude sidebar)
//(13 importo useGlobalContext in links.js per collegare la funzione di chiudere la sidebar ogni qual volta che clicco su uno dei menu)
