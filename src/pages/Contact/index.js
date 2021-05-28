import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ContactCard, ContactWraper, Container, ImageContact, ContactItem, ContactList } from './style'
import ImageGabriel from "../../images/gabriel.jpeg"
import ImageLeonardo from "../../images/leo.jpeg"
import ImageNicolas from "../../images/1618011135033.jpeg"
import ImageVitor from "../../images/vitor.jpeg"
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Container>
            <ContactWraper>
                <ContactCard>
                    <ImageContact src={ImageGabriel} alt="Imagem do desenvolvedor Gabriel"/>
                    <p>Gabriel Narcizo</p>
                        <ContactList>
                            <ContactItem>
                                <a targed="_blank" href="https://www.linkedin.com/in/eli-gabriel-narcizo"><FaLinkedin /></a>
                            </ContactItem>
                            <ContactItem>
                                <a targed="_blank" href="https://github.com/GabrielNarcizo"><FaGithub /></a>                            
                            </ContactItem>
                            </ContactList>
                </ContactCard>
                <ContactCard>
                    < ImageContact src={ImageLeonardo} alt="Imagem do desenvolvedor Leonardo"/>
                    <p>Leonardo Tavares</p>
                    <ContactList>
                            <ContactItem>
                                <a targed="_blank" href="https://www.linkedin.com/in/leo-tavares-2021/"><FaLinkedin /></a>                            
                            </ContactItem>
                            <ContactItem>
                                <a targed="_blank" href="http://github.com/leo-tavares/"><FaGithub /></a>                            
                            </ContactItem>
                    </ContactList>
                </ContactCard>
                <ContactCard>
                    <ImageContact src={ImageNicolas} alt="Imagem do desenvolvedor Nicolas"/>
                    <p>Nicolas Cardia</p>
                    <ContactList>
                        <ContactItem>
                            <a targed="_blank" href="https://www.linkedin.com/in/nicolas-cardia-silva/"><FaLinkedin /></a>                        
                        </ContactItem>
                        <ContactItem>
                            <a targed="_blank" href="https://github.com/NicolasCardia"><FaGithub /></a>                        
                        </ContactItem>
                    </ContactList>
                </ContactCard>
                <ContactCard>
                    <ImageContact src={ImageVitor} alt="Imagem do desenvolvedor Vitor"/>
                    <p>Vitor Vaz</p>
                    <ContactList>
                            <ContactItem>
                                <a targed="_blank" href="https://www.linkedin.com/in/vitor-vaz-andrade/"><FaLinkedin /></a>                            
                            </ContactItem>
                            <ContactItem>
                                <a targed="_blank" href="https://github.com/Vitor-Vaz"><FaGithub /></a>
                            </ContactItem>
                    </ContactList>
                </ContactCard>
            </ContactWraper>
        </Container>
        <Footer />
        </>
    )
}

export default Contact;
