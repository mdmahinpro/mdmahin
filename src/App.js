import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import AllinOne from "./components/AllinOne/AllinOne";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <AllinOne></AllinOne>
        </Route>
        <Route path="/skills">
          <Skills></Skills>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
