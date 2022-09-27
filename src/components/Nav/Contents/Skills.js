import React from "react";
import styled from "styled-components";
import html from "../../../images/html.jpeg";
import JS from "../../../images/171-1718042_javascript-logo-png-transparent-png.png";
import react from "../../../images/react.png";
import UX from "../../../images/ux-ui.png";

const Section = styled.section`
  // background: linear-gradient(
  //   to left,
  //   black,
  //   orange 10%,
  //   black 100%,
  //   black 90%

  //   );
  background: #A36A00;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  opacity: 0.9;


  .box {
    padding: 40px;
    width: 60%;
    margin: auto;
    color: white;
    border-radius: 30px;
    background: black;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5em;

    strong {
      color: black;
    }
  }

  .Html img {
    float: left;
    width: 100px;
    height: 100px;
    object-fit: cover;
    padding: 10px;
  }

  h1 {
    margin-bottom: 20px;
    margin-top: 10px;
    color: black;
    font-size: 2rem;
    text-align: center;
    width: 100%;
    text-decoration: underline;
  }

  /* On screens that are 992px wide or less, go from four columns to two columns */
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    #skills {
      width: 100%;
      //background-color: black;
    }
    .box {
      font-size: 0.9rem;
      background-color: black;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    //background-color: black;
    .box {
      width: 100%;
      //background-color: black;
    }
  }
`;
const Title = styled.h1``;

const Skills = () => {
  return (
    <>
      <Section id="Skills">
        <h1>Important Courses</h1>
        <div className="box">
          <Title className="Html">
            <img src={html} alt="imghtml" />
          </Title>
          <strong>Webbutveckling - Frontend </strong>
          <p>
            The content of the course is HTML5 and styling with CSS3 as well as
            basic UX / UI. Web development for different browsers, responsive
            design and design patterns. Specialization in browser developer
            tools. Also goes through version control with Git and Github. <br />
            The purpose is to lay a good foundation in the two main languages
            and the common tools, as one frontend developers work daily with.{" "}
            <br />
          </p>
          <hr />
        </div>

        <div className="box">
          <Title className="Html">
            <img src={JS} alt="imgCss" />
          </Title>
          <strong>Javascript - Programming</strong>
          <p>
            The course provides a good foundation in the programming language
            Javascript's structure and role in modern web development. The
            course also provides good foundations in computer logic, software
            development, design patterns and browser developer tools. <br />
            Developed good foundations in Javascript's structure and role in
            modern web development. Read and write JavaScript with the latest
            ECMA standard.
            <br />
          </p>
          <hr />
        </div>

        <div className="box">
          <Title className="Html">
            <img src={UX} alt="imgUx" />
          </Title>
          <strong>Frontend - UX/UI</strong>
          <p>
            The course provides cutting-edge expertise in front-end UX / UI.
            In-depth study is given on the perspective introduced in the course
            User experience and interaction design. <br />
            The emphasis is on understanding the product's users - what they
            want, how they work and in what situations they use your product -
            to be able to satisfy theirs needs and expectations. How
            collaboration between market / sales can contribute to delivering
            solid values the target group. <br />
          </p>
          <hr />
        </div>

        <div className="box">
          <Title className="Html">
            <img src={react} alt="imgReact" />
          </Title>
          <strong>Web Framework for Javascript</strong>
          <p>
            The aim of the course is to deepen the ability to develop complex
            web application with front end technologies, libraries and
            frameworks, which are common in the profession. The course also
            includes elements of backend techniques to clarify how an entire web
            application is structured and works. <br />
          </p>
        </div>
      </Section>
    </>
  );
};

export default Skills;
