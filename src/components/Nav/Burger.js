import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { DivWrapper, StyledBurger, Ul } from "../../styles/Styles.js";


const Burger = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
   useEffect(() => {
     const checkIfClickedOutside = (e) => {
       // If the menu is open and the clicked target is not within the menu,
       // then close the menu
       if (open && ref.current && !ref.current.contains(e.target)) {
         setOpen(false);
       }
     };

     document.addEventListener("mousedown", checkIfClickedOutside);

     return () => {
       // Cleanup the event listener
       document.removeEventListener("mousedown", checkIfClickedOutside);
     };
   }, [open]);
   
return (
  <>
    <DivWrapper className="wrapper" ref={ref}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {open && (
        <Ul open={open}>
          <li>
            <Link smooth to="#Skills">
              Skills
            </Link>
          </li>
          <li>
            <Link smooth to="#Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link smooth to="#social-footer">
             Contact
            </Link>
          </li>
        </Ul>
      )}
    </DivWrapper>
  </>
);

}

export default Burger;