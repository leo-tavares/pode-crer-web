import { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

const DreamContext = createContext({});

export const DreamProvider = ({ children }) => {
  const [dream, setDream] = useState({});

  const getDreams = useCallback(async () => {
    const { data } = await api.get("/dream");
    setDream(data);
  }, []);

  const uploadImage = useCallback(async (id, img) => {
    const formData = new FormData();
    formData.append("imagem", img);
    const { data } = await api.post(`/dream/picture/${id}`, formData, {
      headers: {
        "Content-Type": `multipart/form-data;`,
      },
    });
  }, []);

  const createDream = useCallback(async () => {
    const { data } = await api.post("/dream", {
      ...dream.newDream,
      picture: undefined,
      userId: 1,
    });
    await uploadImage(data.dream.id, dream.newDream?.picture);
  }, [dream.newDream, uploadImage]);

  const searchSpecifcDreams = useCallback(async (title) => {
    const {data} = await api.get(`/dream/search/${title}/1`)
    setDream(data);
  }, [])

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
    console.log(dream);
  return (
    <DreamContext.Provider
      value={{
        dream,
        getDreams,
        uploadImage,
        createDream,
        setCreateData,
        searchSpecifcDreams
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
