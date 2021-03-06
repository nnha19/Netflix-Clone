import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { searchToggleSliceActions } from "./store/slices/searchToggle";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "./store/slices/userInfo";
import { dropDownSliceActions } from "./store/slices/dropDownSlice";
import userSlice, { userSliceActions } from "./store/slices/userSlice";

import NavBar from "./share/UI/navbar/navbar";
import HomePage from "./homePage/pages/homePage";
import ViewDetailByCate from "./viewDetailByCate/pages/viewDetailByCatePage";
import SearchResultPage from "./search/pages/searchResultPage";
import Auth from "./share/Components/Auth/Auth";
import UserListPage from "./userList/pages/userListPage";
import TvShowPage from "./tvShowsPage/page/tvShowPage";
import MoviesPage from "./moviesPage/pages/moviesPage";
import LatestMoviesPage from "./latestMovies/pages/latestMovies";
import Footer from "./share/UI/footer/footer";

import "./App.css";

const App = () => {
  document.title = "Netflix";
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    isAuthenticated && dispatch(getUserList({ userId }));
  }, [isAuthenticated]);

  const showSearch = useSelector((state) => state.searchToggle.showSearch);

  const hideSearchHandler = (e) => {
    !e.target.closest("#user-profile") &&
      dispatch(dropDownSliceActions.toggleDropDown(false));
    showSearch &&
      !e.target.closest("#nav-bar__search") &&
      dispatch(searchToggleSliceActions.hideSearch());
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userAuth"));

    if (userInfo) {
      dispatch(userSliceActions.autoLogin(userInfo));
    }
  }, [isAuthenticated]);

  const authenticatedRoutes = (
    <>
      <Route exact path="/browse" component={HomePage} />
      <Route exact path="/browse/tv-shows" component={TvShowPage} />
      <Route exact path="/browse/movies" component={MoviesPage} />
      <Route exact path="/browse/latest" component={LatestMoviesPage} />
      <Route exact path="/browse/:movieCategory" component={ViewDetailByCate} />
      <Route exact path="/search/:query" component={SearchResultPage} />
      <Route exact path="/:uid/my-list" component={UserListPage} />
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
        <Route exact path="/" component={isAuthenticated ? HomePage : Auth} />
        {isAuthenticated && authenticatedRoutes}
        {!isAuthenticated && unAuthenticatedRoutes}
      </Switch>
      <Redirect from="/" to={isAuthenticated ? "/browse" : "/login"} />
      <Footer />
    </div>
  );
};

export default App;
