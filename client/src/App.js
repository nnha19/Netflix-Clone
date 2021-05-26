import NavBar from "./share/UI/navbar/navbar";

import { Route, Link, Switch, Redirect } from "react-router-dom";

import { searchToggleSliceActions } from "./store/slices/searchToggle";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./homePage/pages/homePage";
import ViewDetailByCate from "./viewDetailByCate/pages/viewDetailByCatePage";
import SearchResultPage from "./search/pages/searchResultPage";
import Auth from "./share/Components/Auth/Auth";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const showSearch = useSelector((state) => state.searchToggle.showSearch);

  const hideSearchHandler = (e) => {
    showSearch &&
      !e.target.closest("#nav-bar__search") &&
      dispatch(searchToggleSliceActions.hideSearch());
  };

  return (
    <div onClick={hideSearchHandler} className="wrapper">
      <NavBar />
      <Auth />
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
