import React from "react";
import silvia from "../../../images/me.jpg";
import { device } from "../../../styles/Devices";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  background: linear-gradient(#e66465, #9198e5);
  max-width: 700px;
  margin: 0px auto;
  border-radius: 15px;
  box-shadow: 20px 10px 20px black;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    background: none;
    box-shadow: none;
  
  
  }
`;

const Column = styled.div`
  width: 50%;
  margin: auto;
  img {
    border-radius: 15px;
    width: 100%;
    box-shadow: 20px 10px 20px black;
  }
`;

const Content = styled.div`
  padding: 5px;
  align-self: center;
  width: 80%;
  max-width: 700px;
  height: auto;
  margin-left: 10%;

  @media only screen and (max-width: 600px) {
    background: linear-gradient(#e66465, #9198e5);
    width: 100%;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
  }
`;

const Home = () => {
  return (
    <>
      <Container>
        <Column>
          <img src={silvia} alt="me" />
        </Column>
        <Content>
          My name is Silvia, I'm a Junior frontend developer. <br /> I like to
          code and to be in constant learning. <br />
          I like the simple things in life. <br /> I am curious and like to
          learn new things. Love quiet places and breathe the fresh air from
          nature. <br />I have big interest and ambition to learn about Web
          Development and the digital world.
          <br />- Stockholm, Sweden!
        </Content>
      </Container>
    </>
  );
};

export default Home;
