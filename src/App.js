import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Links from "./pages/Links";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      {/* <Wrapper> */}
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/links" component={Links} />
        <Route exact path="/contact" component={Contact} />
      {/* </Wrapper>
      <Footer /> */}
    </div>
  </Router>
  );
}

export default App;
