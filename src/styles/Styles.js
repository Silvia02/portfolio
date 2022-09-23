/*  */
import styled from "styled-components";
import { device } from "./Devices";

//NAVBAR styles
export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  margin-bottom: 100px;
  font-family: Arial, Helvetica, sams-serif;
  .logo {
    padding: 20px 0;
    margin: 0 auto;
  }
  img {
    width: 80%;
  }
  @media only screen and (max-width: 700px) {
    margin-bottom: 0;
    .logo img {
      width: 50%;
      margin-top: -35px;
    }
  }
`;

export const DivWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    flex-direction: column;
  }
    @media only screen and (max-width: 768px) {
   ul {
      width: 150px;
      height: 100vh; 
      z-index: 1; 

  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 20;
  // display: none;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Ul = styled.ul`
  z-index: 1;
  li {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  height: 60px;
}
  }
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    width: 50%;
    height: 100%;
    padding:16px;
    border-radius: 4px;
  }
  a:hover {
    background-color: orange;
  }
    @media (max-width: 640px){
     li a{
        width: 100%;
        margin-top: 40px;
      }
    }

`;

export const TitleAbout = styled.h1`
  // text-align: center;
  // font-size: 2rem;
  // color: hotpink;
  //margin-bottom: 20px;
`;

//*********FOOTER*******///

export const FooterSection = styled.div`
  padding: 1rem;
  background: black;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 200px;
  margin: auto;
`;

export const DivSocial = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;

  .menu-simple {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      margin: 20px;
    }
  }
  li {
    justify-content: center;
    font-size: 1.3rem;
    list-style: none;
  }

  li a {
    margin: 10px;
    color: white;
  }
  li:hover a {
    color: orange;
    transition: color 0.3s ease-in;
  }
`;

export const DivCopy = styled.div`
  display: flex;
  margin: auto;

  span {
    margin: 20px;
    color: white;
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    pading: 10px;

    span {
      margin: 5px;
    }
  }
`;
