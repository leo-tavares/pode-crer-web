import { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";
import { useAuth } from "./auth";

const DreamContext = createContext({});

export const DreamProvider = ({ children }) => {
  const [dream, setDream] = useState({});
  const [current, setCurrent] = useState({});
  const { token, user } = useAuth();
  const getDreams = useCallback(async () => {
    const { data } = await api.get("/dream");
    setDream(data);
  }, []);

  const setCurrentDream = useCallback((current) => {
    setCurrent(current);
  }, []);

  const uploadImage = useCallback(
    async (id, img) => {
      const formData = new FormData();
      formData.append("imagem", img);
      const { data } = await api.post(`/dream/picture/${id}`, formData, {
        headers: {
          "Content-Type": `multipart/form-data;`,
          Authorization: `Bearer ${token}`,
        },
      });
    },
    [token]
  );

  const createDream = useCallback(async () => {
    const { data } = await api.post(
      "/dream",
      {
        ...dream.newDream,
        picture: undefined,
        userId: user.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    await uploadImage(data.dream.id, dream.newDream?.picture);
  }, [dream.newDream, user.id, token, uploadImage]);

  const searchSpecifcDreams = useCallback(async (title) => {
    const { data } = await api.get(`/dream/search/${title}/1`);
    setDream(data);
  }, []);

  const setCreateData = useCallback(
    async (key, value) => {
      setDream({
        ...dream,
        newDream: {
          ...dream.newDream,
          [key]: value,
        },
      });
    },
    [dream]
  );

  const historyUserTransations = useCallback(async (id) =>{
    const { data } = await api.get(`/user/history/${id}`)

    return data;
  }, []
  )

  const donate = useCallback(
    async (value) => {
      await api.post(
        "/donate",
        { value, userId: user.id, dreamId: current.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    [current?.id, token, user?.id]
  );

  return (
    <DreamContext.Provider
      value={{
        dream,
        current,
        getDreams,
        uploadImage,
        createDream,
        setCreateData,
        searchSpecifcDreams,
        setCurrentDream,
        historyUserTransations,
        donate,
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
