import NavBar from "./share/UI/navbar/navbar";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import HomePage from "./homePage/pages/homePage";
import ViewDetailByCate from "./viewDetailByCate/pages/viewDetailByCatePage";
import SearchResultPage from "./search/pages/searchResultPage";

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
          component={ViewDetailByCate}
        />
        <Route path="/search/:query" exact component={SearchResultPage} />
        <Redirect to="/browse" />
      </Switch>
    </div>
  );
};

export default App;
