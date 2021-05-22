import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DreamSection from "../pages/Dreams";
import ForgotPassoword from "../pages/ForgotPassword";
import SignIn from "../pages/SignIn";
import Error from "../components/errorPage"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/recuperarAcesso">
        <ForgotPassoword />
      </Route>
      <Route path="/dreamssection">
        <DreamSection />
      </Route>
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default Routes;
