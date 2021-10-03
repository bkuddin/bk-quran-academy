import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Header></Header>
        <Switch>
          <Route exact path="home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
