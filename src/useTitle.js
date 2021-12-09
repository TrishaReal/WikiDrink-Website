import { useEffect } from "react";

//(43) Creo un nuovo custom hook per modificare in maniera dinamica quello che
//è il titolo della pagina rispetto alla quale ci troviamo.
const useTitle = (title) => {
  useEffect(() => {
    document.title = `Wiki Drink - ${title}`;
  }, [title]);
};

export default useTitle;

//(44 utilizzo il mio custom hook useTitle all'interno del file SingleCocktailScreen.js)
