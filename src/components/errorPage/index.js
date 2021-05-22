import React from 'react'
import { ImageNotFound, NotFound } from './style';
import ImageErro from "../../images/error-404.jpg"


const Error = () => {
    return (
        <NotFound>
            <ImageNotFound src={ImageErro} alt="Página não encontrada" />
        </NotFound>
    )
}

export default Error;
