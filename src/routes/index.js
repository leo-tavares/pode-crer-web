import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DreamSection from "../pages/Dreams";
import ForgotPassoword from "../pages/ForgotPassword";
import SignIn from "../pages/SignIn";
import Error from "../components/errorPage"
import SignUp from "../pages/SignUp";
import CreateDream from "../pages/CreateDream";
import Profile from "../pages/Profile";
import DreamsSearch from "../pages/DreamsSearch";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/signUp">
        <SignUp />
      </Route>
      <Route path="/recuperarAcesso">
        <ForgotPassoword />
      </Route>
      <Route path="/dreamssection">
        <DreamSection />
      </Route>
      <Route path="/createdream">
        <CreateDream />
      </Route>
      <Route path="/dreamSearch">
        <DreamsSearch />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;
