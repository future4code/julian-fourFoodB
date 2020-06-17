import React, {useState, useEffect} from 'react'
/* import { useProtectedPage } from '../../Hooks/ProtectedPage' */
import { ProfileContainer, TitleBar, PersonalDataContainer, InfoContainer, EditButtonContainer, 
P, AddressContainer, DescriptionAddress, InfoAddress, Address, HistoricContainer, Historic } from '../Profile/style'
import EditIcon from '@material-ui/icons/Edit';
/* import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home'; */

const Profile = () => {
/*     useProtectedPage() */
    return(
        <ProfileContainer>
            <TitleBar>Meu Perfil</TitleBar>

            <PersonalDataContainer>
                <InfoContainer>
                    <P>Bruna Oliveira</P>
                    <P>bruna_o@gmail.com</P>
                    <P>333.333.333-33</P>
                </InfoContainer>
                <EditButtonContainer>
                    <EditIcon/>
                </EditButtonContainer>
            </PersonalDataContainer>

            <AddressContainer>
                <InfoAddress>
                    <DescriptionAddress>Endereço Cadastrado</DescriptionAddress>
                    <Address>Rua Alessandra Vieira, 42 - Santana</Address>
                </InfoAddress>
                <EditButtonContainer>
                    <EditIcon/>
                </EditButtonContainer>
            </AddressContainer>

            <HistoricContainer>
                <P>Histórico de Pedidos</P>
            </HistoricContainer>
            
            <Historic>
            Você não realizou nenhum pedido    
            </Historic> 
        </ProfileContainer>
    )
}

export default Profile