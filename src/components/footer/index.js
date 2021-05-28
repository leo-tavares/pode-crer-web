import React from 'react'
import { icons } from 'react-icons';
import {
    FooterDiv,
    FooterContent,
    FooterBottom,
    FooterList,
    FooterItem
} from './style';

import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaYoutube,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <FooterDiv>
                <FooterContent >
                    <h3> Pode Crer</h3>
                    <p>Desenvolvido com muito amor e carinho pela <a href="#" > equipe G3</a> </p>
                    <FooterList>
                        <FooterItem>
                            <FaFacebookF />
                        </FooterItem>
                        <FooterItem>
                            <FaTwitter />
                        </FooterItem>
                        <FooterItem>
                            <FaGooglePlusG />
                        </FooterItem>
                        <FooterItem>
                            <FaYoutube />
                        </FooterItem>
                        <FooterItem>
                            <FaLinkedin />
                        </FooterItem>
                        <FooterItem>
                            <FaGithub />
                        </FooterItem>
                    </FooterList>
                </FooterContent>
                <FooterBottom>
                    <p> Free copyrights &copy;. Equipe Pode Crer.</p>
                </FooterBottom>
            </FooterDiv>

        </>
    )
}

export default Footer
