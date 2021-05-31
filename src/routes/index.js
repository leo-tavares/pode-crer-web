import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DreamSection from "../pages/Dreams";
import ForgotPassoword from "../pages/ForgotPassword";
import SignIn from "../pages/SignIn";
import Error from "../components/errorPage";
import SignUp from "../pages/SignUp";
import CreateDream from "../pages/CreateDream";
import Profile from "../pages/Profile";
import DreamsSearch from "../pages/DreamsSearch";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact";
import UserDashboard from "../pages/UserDashboard";

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
      <PrivateRoute isPrivate component={CreateDream} path="/createdream" />
      <Route path="/dreamSearch">
        <DreamsSearch />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/userdashboard">
        <UserDashboard />
      </Route>
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;
