import React from 'react';


import {
    CardDiv,
    ButtonConfirm,
    FieldDescription,
    FieldValue,
    MainContainer,
    ButtonClose
} from './styles'



const ModalConfirm = ({switchVisible}) => {




    return (
        <MainContainer>

        
        <CardDiv>
            <ButtonClose
                onClick={switchVisible}
            > X </ButtonClose>
            <h1> Confirme Sua doação! </h1>
            <FieldDescription>
                Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </FieldDescription>
            <FieldValue>
                <h5> Valor: </h5>
                <input type='number' />
            </FieldValue>




            <ButtonConfirm children={"Ajudar esse sonho"} />
        </CardDiv>
        </MainContainer>
    )
}

export default ModalConfirm;
