import styled from "styled-components";

export const LoggedDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 8px;
    a {
      text-decoration: none;
      color: black;
      margin-right: 8px;
      &:hover{
        color: green;
      }
    }

`
export const Logout = styled.button`
    border: none;
    background-color: #FF5959;
    color: white;

    &:hover {
        background-color: #fff;
        border: 2px solid #FF5959;
        color: #FF5959;
        padding: 0 10px;
    }

`
