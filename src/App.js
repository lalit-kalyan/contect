import Home from "./pages/home/Home";
import "./app.css";
import Contect from "./components/contect/Contect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contect">
            <Contect />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
