import React, { useEffect } from "react";
import Image from "../../images/image.svg";
import {
  DreamsCard,
  DreamsContainer,
  DreamsDescription,
  DreamsDonations,
  DreamsH1,
  DreamsH3,
  DreamsIcon,
  DreamsObjective,
  DreamsProfile,
  DreamsUserImage,
  DreamsWrapper,
  DreamUsername,
} from "./style";
import { useDream } from "../../hooks/dream";
import { useHistory } from "react-router";

const DreamsCards = () => {
  const { dream, getDreams, setCurrentDream } = useDream();

  useEffect(() => {
    getDreams();
  }, [getDreams]);

  const history = useHistory();
  const navigateTo = (path) => history.push(path);
  console.log(dream);
  return (
    <>
      <DreamsContainer id="dreams">
        <h1>Alguns sonhos</h1>
        <DreamsWrapper>
          {dream.length > 0 &&
            dream.slice(0, 6).map((items, key) => {
              return (
                <DreamsCard
                  key={key}
                  onClick={() => {
                    setCurrentDream(items);
                    navigateTo("/dreamssection")
                  }}
                >
                  <DreamsIcon src={items.picture || Image} />
                  <DreamsH3>{items.title}</DreamsH3>
                  <DreamsDescription>{items.description.substring(0, 150) + "..."}</DreamsDescription>
                  <DreamsProfile>
                    <DreamsUserImage
                      src={items.user_id?.avatar || Image}
                    ></DreamsUserImage>
                    <DreamUsername>{items.user_id?.name}</DreamUsername>
                  </DreamsProfile>
                  <DreamsDonations>
                    <DreamsObjective>
                      META:
                      {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "brl",
                        maximumSignificantDigits: 2,
                      }).format(items.goal)}
                    </DreamsObjective>
                  </DreamsDonations>
                </DreamsCard>
              );
            })}
        </DreamsWrapper>
      </DreamsContainer>
    </>
  );
};

export default DreamsCards;
