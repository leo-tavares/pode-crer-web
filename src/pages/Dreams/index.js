import React, { useState } from "react";
import {
  ContainerDreamsPage,
  DivDonation,
  Section,
  Div,
  ButtonDonation,
  DonationH1,
  DivSection,
  DivDescription,
  DivDesc,
  DreamImg,
} from "./style";
import Description from "../../components/description";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import ModalConfirm from "../../components/modalConfirm";
import { useDream } from "../../hooks/dream";

const DreamSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { current } = useDream();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [visible, setVisible] = useState(false);

  function switchVisible() {
    setVisible(!visible);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ContainerDreamsPage>
        <div>{current.title}</div>
        <p>{current.user_id?.name || ""}</p>
        <Section>
          <DreamImg src={current.picture} />
          <Div>
            <DivDonation>
              <DonationH1>oi</DonationH1>
              <ButtonDonation onClick={switchVisible}>
                Apoiar sonho
              </ButtonDonation>
            </DivDonation>
          </Div>
        </Section>
      </ContainerDreamsPage>
      <DivSection>
        <DivDesc>
          <DivDescription>Descrição</DivDescription>
          <Description>{current.description}</Description>
        </DivDesc>
      </DivSection>
      {visible && (
        <ModalConfirm
          description={current.description}
          switchVisible={switchVisible}
        />
      )}
    </>
  );
};

export default DreamSection;
