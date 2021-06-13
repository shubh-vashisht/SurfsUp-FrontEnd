import "./App.css";
import HomePage from "./components/homepage/homepage";
import Navbar from "./components/navbar/navbar";
import NotFound from "./components/notFounf/notFound";
import Footer from "./components/footer/footer";
import Restaurants from "./components/restaurants/eat";
import Hotels from "./components/stay/stay";
import Sports from "./components/adventures/sports";
import LoginForm from "./components/signin/loginform";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/eat" exact component={Restaurants} />
          <Route path="/stay" exact component={Hotels} />
          <Route path="/sports" exact component={Sports} />
          <Route path="/signin" exact component={LoginForm} />

          <Route path="/notFound" exact component={NotFound} />
          <Redirect path="/:id" to="/notFound" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
