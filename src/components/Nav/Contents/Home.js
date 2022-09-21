import React from "react";
import silvia from "../../../images/me.jpg";
import { DivHome } from "../../Styles.js";
import About from "./About";

const Home = () => {
  return (
    <>
      <DivHome>
        <img src={silvia} alt="me" />
        <div className="textMe">
          <About />
        </div>
      </DivHome>
    </>
  );
};

export default Home;
