import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

        div{
            display: flex;
            flex-direction: row;
        }

        button {
            border: 1px solid #000;
            margin: 10px;
        }

        input {
            border: none;
            background-color: #01bf71; 
            padding: 0 10px;
            margin: 10px;
        }
`
