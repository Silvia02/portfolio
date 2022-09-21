/*  */
import styled from "styled-components";

/********Home styles*******/
export const DivHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 200px auto;
  width: 60%;
  justify-content: start;
  border: 10px solid black;
  -webkit-box-shadow: 4px 17px 15px 6px #000000;
  box-shadow: 4px 17px 15px 7px #000000;
  background-color: black;

  img {
    margin: auto;
    width: 20%;
  }
  .textMe {
    display: flex;
    margin: auto;
    font-size: 1rem;
    line-height: 1.4em;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
   display: flex;
   justify-content: center;
    img {
 
      width: 100%;
    }
    .textMe {
      width: 100%;
      height: 100%;
   
    }
  }
`;

//NAVBAR styles
export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  font-family: Arial, Helvetica, sams-serif;
  .logo {
    padding: 20px 0;
    margin: 0 auto;
  }
  img {
    width: 80%;
  }
  @media only screen and (max-width: 700px) {
    .logo img {
      width: 80%;
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
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
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

/**********ABOUT************/
export const DivAbout = styled.div`
  display: flex;

  .divAbout {
    color: white;
    line-height: 1.4em;
    margin: auto;
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    .divAbout {
      margin-top: 50px;
      width: 50%;
    }
  }
  @media (max-width: 600px) {
    .divAbout {
      margin: 20px;
    }
  }
`;
//*********FOOTER*******///
export const FooterSection = styled.section`
  min-height: 200px;
  margin-top: 100px;
  opacity: 0.8;
  background-color: #0d2538;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  .divSocial {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
  }

  .divSocial a {
    color: white;
    padding: 3em 0 0 2em;
  }
  a:hover {
    color: hotpink;
  }

  .divContact {
    display: flex;
    flex-direction: row;
    margin-bottom: 60px;
  }

  span {
    color: white;
    padding: 40px;
  }
`;

export const DivSocial = styled.div``;

export const DivCopy = styled.div``;
