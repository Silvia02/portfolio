import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  margin-top: 0;
  height: 400px;
  justify-content: center;
  text-align: center;


  @media (max-width: 600px) {
    height: auto;
  }


  .boxProject {
    margin-top: 0;
    padding: 20px;
    color: white;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }
  h1 {
    margin-top: 100px;
    color: orange;
    line-height: 1rem;
    font-size: 2rem;
    margin-bottom: 60px; 
    text-decoration: underline; 
  }
  .project-list{
    width: 100%;
    display: flex;
    justify-content: center;


  }
  .project-title{
    width: 50%;
    display: flex;
    justify-content:center;
  }

  .boxProject p {
    margin-bottom: 20px;
    margin-top: 20px;
    justify-content: initial;

    
  }
  .boxProject a {
    padding: 20px;
    text-decoration: none;
    color: orange;
    margin-top: 10px;
  }
  a:hover {
    color: hotpink;
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
            <p className="project-title">
              An application built in React.js, TypeScript, REST API and scss.
            </p>
            <a href="https://silvia02.github.io/beer-pagination/">
              Go to this project...😎 
            </a>
          </List>
          <List className="project-list">
            <p className="project-title">
              A simple application called Nail Polish built with REST API, clean
              javascript, html and css.
            </p>
            <a href="https://silvia02.github.io/Nail_app/">
              Go to this project...😎 
            </a>
          </List>
        </div>
      </Section>
    </>
  );
};
export default Projects;
