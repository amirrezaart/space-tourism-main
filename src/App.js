import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import Destination from "./Components/Pages/Destination";
import Crew from "./Components/Pages/Crew";
import Technology from "./Components/Pages/Technology";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/destination" exact component={Destination} />
          <Route path="/crew" exact component={Crew} />
          <Route path="/technology" exact component={Technology} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
