import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DreamSection from "../pages/Dreams";
import SignIn from "../pages/SignIn";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/dreamssection">
        <DreamSection />
      </Route>
    </Switch>
  );
};

export default Routes;
