import styled from "styled-components";


export const ContainerProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerDiv = styled.div`
    display: flex;
    margin: 20px;
    justify-content: start;
    flex-direction: column;
    padding: 20px 100px;
    border-radius: 5px;
    width: 500px;
    background-color: #ccc;
        
        input{
            padding: 0 20px;
        }
`

export const Button = styled.button`
    border: 0;
    background: transparent;
    color: #00ff;
    margin-left: 5px;
    cursor: pointer;
`

export const ButtonDelete = styled.button`
    border: 0;
    background: #e57878;
    color: white;
    margin-left: 5px;
    cursor: pointer;
    padding: 10px 15px;

    &:hover{
        background: red;
    }
`