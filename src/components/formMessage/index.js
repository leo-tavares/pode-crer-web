import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { useDream } from "../../hooks/dream";

const TextArea = () => {
  const [description, setDescription] = useState("");
  const history = useHistory();
  const { setCreateData, createDream } = useDream();
  const voltarInicio = useCallback(async () => {
    history.push("/");
  }, [history]);

  const submitOnClick = useCallback(async() => {
    try {
      await createDream()
      history.push('/dreamssection')
    } catch (error) {
      console.log(error);
      alert("Ops!")
    }
  }, [createDream, history])

  return (
    <div>
      <label for="mensagem">Descreva seu sonho:</label>
      <textarea
        cols="70"
        rows="10"
        id="mensagem"
        class="input-padrao"
        onChange={(e) => setDescription(e.target.value)}
        onBlur={() => setCreateData("description", description)}
        required
      ></textarea>
      <button onClick={voltarInicio}>Agora não!</button>
      <input
        type="submit"
        value="Criar sonho"
        onClick={submitOnClick}
        className="enviar"
      />
    </div>
  );
};

export default TextArea;
