import styled from 'styled-components';

export const FooterDiv = styled.footer`
    width: 100%;
    height: auto;
    background-color: #01bf71;
    padding-top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const FooterContent = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

        h3{
            font-size: 1.8rem;
            font-weight: 500;
            text-transform: capitalize;
            line-height: 3rem;
        };

        p{

            margin: 10px auto;
            line-height: 28px;
            font-size: 20px;
        };

        a{
            color:white;
            text-decoration:none;
            transition: .2s;
        }

        a:hover{
            text-decoration: underline;
            color: white;
        };


`;

export const FooterBottom = styled.div`
  
    font-size: 15px;
    font-weight: 300;
    text-transform: capitalize;
    text-align: center;
    color: white;
    background-color: #000;
    padding: 5px 0;
`;

export const FooterList = styled.ul`

    width: 35%;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        width: 80%;
      };

    @media screen and (max-width: 500px) {
        width: 100%;
    }

`;

export const FooterItem = styled.li`
    list-style: none;
    font-size: 30px;
    transition: 0.3s;


    &:hover {
        transform: scale(1.2);
        color: white;
        cursor: pointer;
      }

`;