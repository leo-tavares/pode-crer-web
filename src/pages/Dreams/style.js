import styled from 'styled-components';

export const ContainerDreamsPage = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f1f4f4;
`

export const Section = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-itemns: center;
`
export const ImageDream = styled.img`
    height: 500px;
    margin: 0 30px;
`

export const Div = styled.div`
    height: 300px;
    width: 370px;
    background-color: #f8f8ff;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);

`
export const DivDonation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    margin: 50px;
`

export const ButtonDonation = styled.button`
    padding: 15px 50px;
    border-style: none;
    background-color: #01bf71;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #fff;

    &:hover {
        background-color: #fff;
        border: 1px solid black;
        color: #000;
    }
`

export const DonationH1 = styled.h1`
    font-size: 45px;
`
export const DonationP = styled.p`
    font-size: 20px;
    margin: 20px;
`

export const NavSection = styled.div`
    display: flex;
`

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
    width: 50%;
`

export const A = styled.a`
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #000;
    padding: 15px;
    
    &:hover {
        border-bottom: 5px solid #01bf71;
        background-color: #f1f4f4;
    }
`