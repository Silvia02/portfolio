import React from "react"
import Burger from "./Burger";
import Silvialoga from '../../images/Silvialoga.png'
import {Nav} from '../../styles/Styles.js'

const NavBar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={Silvialoga} alt="loga" />
      </div>
  
          <Burger />

    </Nav>
  );
   
}
export default NavBar;
