import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>
          <Route exact path="/watched">
            <Watched />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
