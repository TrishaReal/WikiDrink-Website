import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinkComponent, SocialComponent } from "../utils/links";

//(15) importo ancora useGlobalContext per aprire sta volta la sidebar
import { useGlobalContext } from "../context";

//(5) Creazione Navbar.
const Navbar = () => {
  //(16) richiamo la mia funzione per aprire la sidebar: "onClick={openSidebar}"
  const { openSidebar } = useGlobalContext();

  return (
    <nav className="nav">
      <div className="nav-container container">
        <header className="nav-header">
          <Link to="/" className="nav-brand">
            <h3>Wiki Drink</h3>
          </Link>
          <div>
            <button className="icon-btn btn nav-toggler" onClick={openSidebar}>
              <FaBars className="nav-icon" />
            </button>
          </div>
        </header>
        <LinkComponent classLink="nav-links" />
        <SocialComponent classSocial="socialTop" />
      </div>
    </nav>
  );
};

export default Navbar;

//(6 on Footer.js)
//(17 Creo la mia pagina ErrorScreen.js)
