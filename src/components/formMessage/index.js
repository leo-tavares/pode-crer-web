import React, { useCallback } from 'react'
import { useHistory } from 'react-router';
import { FormMessage } from './style';

const TextArea = () => {
    const history = useHistory();

    const voltarInicio = useCallback ( async () => {
        history.push("/");
    }, [history])

    return (
        <FormMessage>
            <form>
            <label for="titulo">Título do seu sonho:</label>
            <input type="text" name="titulo" id="titulo"/>
            <label for="mensagem">Descreva seu sonho:</label>
            <textarea cols="70" rows="10" id="mensagem" class="input-padrao" required></textarea>
            </form>
            <button onClick={voltarInicio}>Agora não!</button>
            <input type="submit" value="Enviar mensagem" className="enviar"></input>
        </FormMessage>
    )
}

export default TextArea
