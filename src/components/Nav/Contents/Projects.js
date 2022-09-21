import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  margin: auto;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  justify-content: center;
  border-radius: 20px;


  .boxProject {
    padding: 20px;
    margin-bottom: 20px;
    color: white;
    width: 50%;
    height: 100%;
    background-color: black;
    margin-top: 50px;
    opacity: 0.7;
    border: solid 19px orange;
    border-radius: 1em;
   

  }
  h1 {
    margin-top: -20px;
    color: hotpink;
    line-height: 1.5em;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 20px; 
    text-decoration: underline; 
  }

  .boxProject p {
    margin-bottom: 30px;
  }
  .boxProject a {
    padding: 20px;
    text-decoration: none;
    color: pink;
  }
  a:hover {
    color: hotpink;
  a:hover {
      color:hotpink;
}

`;

const List = styled.li`
  list-style: none;
`;

const Projects = () => {
  return (
    <>
      <Section id="Projects">
        <div className="boxProject">
          <h1>Projects</h1>
          <List className="project-list">
            <h3>Description:</h3>
            <p className="project-title">
              An application built in React.js, TypeScript, REST API and scss.
            </p>
            <a href="https://silvia02.github.io/beer-pagination/">
              Go to this project...
            </a>
          </List>
          <List className="project-list">
            <h3>Description:</h3>
            <p className="project-title">
              A simple application called Nail Polish built with REST API, clean
              javascript, html and css.
            </p>
            <a href="https://silvia02.github.io/Nail_app/">
              Go to this project...
            </a>
          </List>
        </div>
      </Section>
    </>
  );
};
export default Projects;
