import { Fragment } from "react";
import "./Welcome.css";

import exitIcons from "../../assets/Wink-Exit-Icons.svg";
import WelcomeNav from "../../components/Welcome/Welcome-Nav";
import Home from "../Homepage/homepage";

export default function WelcomePage() {
  return (
    <>
      <div className="welcomepage">
        <div className="nineties-navbar-top">
          Play Wink!
          <img src={exitIcons} />
        </div>
        <WelcomeNav />
        <Home />
      </div>
    </>
  );
}
