import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountDown from "../../CountDown";
import Home from "../../Home";
import About from "../../About";
import NavBar from "../../NavBar";
import BoilingVerdict from "../../BoilingVerdict";
import Calculator from "../../Calculator";
import Hooks from "../../Hooks";
class Header extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" caseSensitive={false} element={<Home />} exact />
            <Route path="/about" caseSensitive={false} element={<About />} />
            <Route
              path="/details"
              caseSensitive={false}
              element={<CountDown />}
            />
            <Route
              path="/temp"
              caseSensitive={false}
              element={<BoilingVerdict />}
            />
            <Route
              path="/calculator"
              caseSensitive={false}
              element={<Calculator />}
            />
            <Route path="/hooks" caseSensitive={false} element={<Hooks />} />
          </Routes>
        </Router>
      </>
    );
  }
}
export default Header;
