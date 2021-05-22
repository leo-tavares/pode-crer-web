import { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

const DreamContext = createContext({});

export const DreamProvider = ({ children }) => {
  const [dream, setDream] = useState();

  const getDreams = useCallback(async () => {});

  return (
    <DreamContext.Provider
      value={{
        dream,

      }}
    >
      {children}
    </DreamContext.Provider>
  );
};

export const useDream = () => {
  const dreamContext = useContext(DreamContext);
  if (!dreamContext) {
    throw new Error("DreamContext deve ser utilizado dentro de DreamProvider");
  }
  return dreamContext;
};
