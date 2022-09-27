import NavBar from "./components/Nav/NavBar";
import Home from "./components/Nav/Contents/Home";
import Footer from "./components/Nav/Contents/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Skills from "./components/Nav/Contents/Skills";
import Projects from "./components/Nav/Contents/Projects";

export default function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Home />
        <Projects />
        <Skills />
        <Footer />
      </>
    </Router>
  );
}
