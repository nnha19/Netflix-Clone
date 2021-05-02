import NavBar from "./share/UI/navbar/navbar";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import HomePage from "./homePage/pages/homePage";
import ViewAllMovieCatePage from "./homePage/pages/viewAllMovieCatePage";

import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <NavBar />
      <Switch>
        <Route exact path="/browse" component={HomePage} />
        <Route
          exact
          path="/browse/:movieCategory"
          component={ViewAllMovieCatePage}
        />
      </Switch>
    </div>
  );
};

export default App;
