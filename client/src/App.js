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
  const isAuthenticated = useSelector((state) => !!state.token);
  const dispatch = useDispatch();
  const showSearch = useSelector((state) => state.searchToggle.showSearch);

  const hideSearchHandler = (e) => {
    showSearch &&
      !e.target.closest("#nav-bar__search") &&
      dispatch(searchToggleSliceActions.hideSearch());
  };

  const authenticatedRoutes = (
    <>
      <Route exact path="/browse" component={HomePage} />
      <Route exact path="/browse/:movieCategory" component={ViewDetailByCate} />
      <Route path="/search/:query" exact component={SearchResultPage} />
    </>
  );

  const unAuthenticatedRoutes = (
    <>
      <Route exact path="/login" component={Auth} />
    </>
  );

  return (
    <div onClick={hideSearchHandler} className="wrapper">
      <NavBar />
      <Switch>
        {isAuthenticated && authenticatedRoutes}
        {!isAuthenticated && unAuthenticatedRoutes}
      </Switch>
      <Redirect to={isAuthenticated ? "/browse" : "/login"} />
    </div>
  );
};

export default App;
