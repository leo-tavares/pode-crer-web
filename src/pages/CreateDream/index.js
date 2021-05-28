import React, { useState } from "react";
import GlobalStyle from "../../styles/globalStyle";
import Navbar from "../../components/navbar";
import Dropzone from "../../components/upload";

import { CoinConteiner, Container, Content, ResumeContainer, TitleContainer } from "./style";
import TextArea from "../../components/formMessage";
import { useDream } from "../../hooks/dream";

const CreateDream = () => {
  const [goal, setgoal] = useState();
  const [title, setTitle] = useState();
  const [resume, setResume] = useState();
  const { setCreateData } = useDream()
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <h1>Compartilhe seu sonho com a comunidade!</h1>
          <p>aqui você vai poder se expressar sobre seu sonho</p>
          <Dropzone />
          <TitleContainer>
            <p>titulo</p>
            <input
              type="string"
              onChange={e => setTitle(e.target.value)}
              onBlur={() => setCreateData('title', title)}
            />
          </TitleContainer>
          <ResumeContainer>
            <p>Resuma em poucos palavras</p>
            <input
              type="string"
              onChange={(e) => setResume(e.target.value)}
              onBlur={() => setCreateData('resume', resume)}
            />
          </ResumeContainer>
          <CoinConteiner>
            <p>De quanto precisa para realizar seu sonho?</p>
            <input
              type="number"
              min={1}
              onChange={(e) => setgoal(e.target.value)}
              onBlur={() => setCreateData('goal', goal)}
            />
          </CoinConteiner>
          <TextArea />
        </Content>
        <GlobalStyle />
      </Container>
    </>
  );
};

export default CreateDream;
