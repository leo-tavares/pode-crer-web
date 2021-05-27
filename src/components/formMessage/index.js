import React, { useCallback } from 'react'
import { useHistory } from 'react-router';

const TextArea = () => {
    const history = useHistory();

    const voltarInicio = useCallback ( async () => {
        history.push("/");
    }, [history])

    return (
        <div>
            <label for="mensagem">Descreva seu sonho:</label>
            <textarea cols="70" rows="10" id="mensagem" class="input-padrao" required></textarea>
            <button onClick={voltarInicio}>Agora não!</button>
            <input type="submit" value="Enviar mensagem" className="enviar"></input>
        </div>
    )
}

export default TextArea
