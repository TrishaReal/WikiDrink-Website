import React from "react";
import { LinkComponent, SocialComponent } from "../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";

//(11) Importo useGlobalContext in sidebar per collegare le funzioni apri e chiude sidebar.
import { useGlobalContext } from "../context";

//(7) Creazione Sidebar
const Sidebar = () => {
  //Destrutturo il value object di "AppContext.provider" del file context.js:
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-content">
        <header className="nav-header container">
          <div className="nav-brand">
            <h3>Drink Team</h3>
          </div>
          <button className="nav-toggler btn icon-btn" onClick={closeSidebar}>
            {" "}
            {/* 12 -Aggiungo al button la funzione per chiudere la sidebar: onClick={closeSidebar} */}
            <VscArrowSmallLeft className="nav-icon" />
          </button>
        </header>
        <div className="container">
          <LinkComponent classLink="sidebar-links" />
        </div>
        <SocialComponent classSocial="sidebar-social" />
      </div>
    </aside>
  );
};

export default Sidebar;

//(8 in context.js)
//(13 in links.js)
