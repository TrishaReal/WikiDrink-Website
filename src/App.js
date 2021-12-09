import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";
import ErrorScreen from "./screen/ErrorScreen";

//(4) Creazione Router.
function App() {
  return (
    <Router className="App">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/contattaci" component={ContactScreen} />
        <Route path="/cocktail/:id" component={SingleCocktailScreen} />
        <Route path="*" component={ErrorScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

//(5 on Navbar.js)
