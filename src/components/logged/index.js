import React, { useCallback } from 'react';
import { LoggedDiv, Logout } from './style';
import {useAuth} from '../../hooks/auth';
import { useHistory } from 'react-router-dom';

const Logged = () => {
    const {user, signOut } = useAuth();

    const history = useHistory();

    const logout = useCallback ( async () => {
        await signOut()
        history.push("/");
    }, [history, signOut])

    return (
        <>
        {user ?
        <LoggedDiv>
            <span>{user.email}</span>
            <Logout onClick={logout}>SAIR</Logout>
        </LoggedDiv> 
        :null}
        </>
       
    )
}

export default Logged;
