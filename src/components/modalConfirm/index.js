import React, { useCallback } from "react";
import { useAuth } from "../../hooks/auth";

import {
  CardDiv,
  ButtonConfirm,
  FieldDescription,
  FieldValue,
  MainContainer,
  ButtonClose,
} from "./styles";

const ModalConfirm = ({ switchVisible, description }) => {
  return (
    <MainContainer>
      <CardDiv>
        <ButtonClose onClick={switchVisible}> X </ButtonClose>
        <h1> Confirme Sua doação! </h1>
        <FieldDescription>{description}</FieldDescription>
        <FieldValue>
          <h5> Valor: </h5>
          <input type="number" />
        </FieldValue>

        <ButtonConfirm children={"Ajudar esse sonho"} onClick={useCallback(() => {
          const token = localStorage.getItem("@podecrer:token");
          if(!token){
            alert("Você deve estar logado para realizar uma doação")
          }
        },[])} />
      </CardDiv>
    </MainContainer>
  );
};

export default ModalConfirm;
