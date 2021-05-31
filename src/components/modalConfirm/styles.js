import styled from "styled-components";
import Button from "../../components/button";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDiv = styled.div`
  @keyframes modal {
    from {
      opacity: 0;
      transform: translate3d(0, -60px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  width: 400px;
  height: auto;
  background-color: #01bf71;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  animation: modal 0.5s;
  h1 {
    text-align: center;
    padding-top: 10px;
    font-size: 25px;
  }

  input {
    text-align: center;
    height: 40px;
    width: 50%;
  }
`;

export const ButtonConfirm = styled(Button)`
  background-color: #b4f8c8;
`;

export const FieldDescription = styled.div``;

export const FieldValue = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

export const ButtonClose = styled.button`
  right: calc(-100% + 25px);
  top: calc(-100% + 20px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  outline: none;
  width: 27px;
  height: 27px;
  border: 1px solid black;
  border-radius: 2px;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: #01bf71;
    border-color: white;
  }
`;
