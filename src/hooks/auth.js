import { createContext, useCallback, useContext, useState } from "react";
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
    console.log(token, user);
    return auxData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    // const response = await api.post("sessions", { email, password });
    // const { token, user } = response.data;
    localStorage.setItem(tokenStorageKey, "token");
    localStorage.setItem(userStorageKey, JSON.stringify({ email }));
    setData({ token: "token", user: { email } });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(tokenStorageKey);
    localStorage.getItem(userStorageKey);
    setData({});
  }, []);

  const forgotPassword = useCallback(() => {
    console.log("recuperando password...");
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, forgotPassword }}
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
