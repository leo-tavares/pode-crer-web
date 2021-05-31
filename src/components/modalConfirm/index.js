import React, { useCallback, useState } from "react";
import { FiX } from "react-icons/fi";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/auth";
import { useDream } from "../../hooks/dream";

import {
  CardDiv,
  ButtonConfirm,
  FieldDescription,
  FieldValue,
  MainContainer,
  ButtonClose,
} from "./styles";

const ModalConfirm = ({ switchVisible, description }) => {
  const { token } = useAuth();
  const { donate } = useDream();
  const [value, setValue] = useState(0);
  const history = useHistory();
  return (
    <MainContainer>
      <CardDiv>
        <ButtonClose onClick={switchVisible}>
          <FiX size={20} />
        </ButtonClose>
        <h1> Confirme Sua doação! </h1>
        <FieldDescription>{description}</FieldDescription>
        <FieldValue>
          <h5> Valor: </h5>
          <input type="number" onChange={(e) => setValue(e.target.value)} />
        </FieldValue>

        <ButtonConfirm
          children={"Ajudar esse sonho"}
          onClick={useCallback(async () => {
            if (!token) {
              alert("Você deve estar logado para realizar uma doação");
            }
            try {
              await donate(value);
              switchVisible();
              history.push("userdashboard");
            } catch (error) {
              alert(error?.response?.data?.message || "Ops!");
            }
          }, [donate, switchVisible, token, value])}
        />
      </CardDiv>
    </MainContainer>
  );
};

export default ModalConfirm;
