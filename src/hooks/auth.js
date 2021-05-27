import { createContext, useCallback, useContext, useState } from "react";
import firebase from "firebase";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const tokenStorageKey = "@podecrer:token";
  const userStorageKey = "@podecrer:user";

  const [data, setData] = useState(() => {
    let auxData = {};
    const token = localStorage.getItem(tokenStorageKey);
    const user = localStorage.getItem(userStorageKey);

    if (token && user) {
      auxData = {
        token,
        user: JSON.parse(user),
      };
    }
    return auxData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const {data: { user, token } } = await api.post("/session", { email, password });
    localStorage.setItem(tokenStorageKey, token);
    localStorage.setItem(userStorageKey, JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signUp = useCallback(
    async ({ email, password, name }) => {
      await api.post("/user", { email, password, name });
      await signIn({ email, password });
    },
    [signIn]
  );

  const signOut = useCallback(async () => {
    await firebase.auth().signOut();
    localStorage.removeItem(tokenStorageKey);
    localStorage.removeItem(userStorageKey);
    setData({});
  }, []);

  const forgotPassword = useCallback(async (email) => {
    await firebase.auth().sendPasswordResetEmail(email);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, signUp, forgotPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro do AuthProvider");
  }
  return context;
};
