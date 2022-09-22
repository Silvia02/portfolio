import NavBar from "./components/Nav/NavBar";
import Home from "./components/Nav/Contents/Home";
import Footer from "./components/Nav/Contents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Skills from "./components/Nav/Contents/Skills";
import Projects from "./components/Nav/Contents/Projects";
import Page from "./components/Nav/Contents/Page";

export default function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Home />
        <Skills />
        <Projects />
        <Footer />
      </>
    </Router>
  );
}
