import React, { useCallback } from "react";
import { LoggedDiv, Logout } from "./style";
import { useAuth } from "../../hooks/auth";
import { useHistory, Link } from "react-router-dom";

const Logged = () => {
  const { user, signOut } = useAuth();

  const history = useHistory();

  const logout = useCallback(async () => {
    await signOut();
    history.push("/");
  }, [history, signOut]);

  return (
    <LoggedDiv>
      <Link to="userdashboard">
        <span>{user.name}</span>
      </Link>
      <Logout onClick={logout}>SAIR</Logout>
    </LoggedDiv>
  );
};

export default Logged;
