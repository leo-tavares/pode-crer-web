import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 760px;

    }
`

export const ContactWraper = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`
export const ContactCard = styled.div`
    background: #01bf71;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.2s ease-in-out;

        p{
            font-size: 1rem;
            color: #fff;
            font-weight: bold;
        }
`

export const ImageContact = styled.img`
    width: 300px;
`

export const ContactList = styled.ul`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    padding: 0;
    text-decoration: none;

    @media screen and (max-width: 768px) {
        width: 80%;
      };

    @media screen and (max-width: 500px) {
        width: 100%;
    }


`;

export const ContactItem = styled.li`
    list-style: none;
    font-size: 30px;
    transition: 0.3s;
    text-decoration: none;

        a {
            text-decoration: none;
            color: black;

            &:hover{
                transform: scale(1.2);
                color: white;
                cursor: pointer;
            }
        }
    
    &:hover{
        transform: scale(1.2);
    }

`;