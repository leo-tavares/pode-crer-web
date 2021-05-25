import styled from 'styled-components';

export const Progress = styled.div`
    background-color: #d8d8d8;
    border-radius: 20px;
    position: relative;
    margin: 15px 0;
    height: 15px;
    width: 200px;
`

export const ProgressDone = styled.div`
    background: linear-gradient(to left, #01bf71, #00ff00);
    box-shadow: 0 3px 3px -5px #01bf71, 0 2px 5px #00ff00;
    border-radius: 20px;
    color: #006400;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 0;
    opacity: 0;
    transition: 1s ease 0.3s;
`