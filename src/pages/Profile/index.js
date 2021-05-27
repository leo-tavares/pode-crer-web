import React from 'react'
import Dropzone from '../../components/upload';
import { useAuth } from '../../hooks/auth';
import { Button, ContainerDiv, ContainerProfile, ButtonDelete } from './style'

const Profile = () => {
    const {user} = useAuth();
    
    return (
         
        <ContainerProfile>
            <h1>Informações Pessoais</h1>
            <p>Abaixo estão suas informações de cadastro, caso deseje mudar digite a nova informação no campo correspondente!</p>
            <ContainerDiv>
                <div>
                <p>Seu nome: </p>
                <input type="text" name="nome" placeholder="nome de usuario"></input>
                </div>
            </ContainerDiv>
            <ContainerDiv>
                <p>Email:</p>
                <input type="email" name="email" /><Button>Alterar email</Button>
            </ContainerDiv>
            <ContainerDiv>
                <p>Imagem de perfil:</p>
                <Dropzone />
            </ContainerDiv>
            <ContainerDiv>
                <p>Deseja desativar sua conta?</p>
                <ButtonDelete>Desativar conta</ButtonDelete>
            </ContainerDiv>
            <button>Alterar dados</button>
        </ContainerProfile>
    
    )
}

export default Profile
