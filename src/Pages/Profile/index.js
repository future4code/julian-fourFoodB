import React, {useState, useEffect} from 'react'
import { useProtectedPage } from '../../Hooks/ProtectedPage'
import { ProfileContainer, TitleBar, PersonalDataContainer, InfoContainer, EditButtonContainer, 
P, AddressContainer, DescriptionAddress, InfoAddress, Address, HistoricContainer, Historic } from '../Profile/style'
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios'
/* import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home'; */

const Profile = () => {
    useProtectedPage() 

    let token = localStorage.getItem('token')

    if(token === null){
        token = sessionStorage.getItem('token')
    }

    const [userData, setUserData] = useState([])
    const [orderHistory, setOrderHistory] = useState([])

    useEffect(() => {
        getProfile()
    })

    const getProfile = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile', {
                headers: {
                    auth: token
                }
            })
            .then(response => {
                setUserData(response.data.user)
            })
            .catch(err => {
                window.alert(err)
            })
    }

    const getHistory = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history')
    }
    return(
        <ProfileContainer>
            <TitleBar>Meu Perfil</TitleBar>

            <PersonalDataContainer>
                <InfoContainer>
                    <P>{userData.name}</P>
                    <P>{userData.email}</P>
                    <P>{userData.cpf}</P>
                </InfoContainer>
                <EditButtonContainer>
                    <EditIcon/>
                </EditButtonContainer>
            </PersonalDataContainer>

            <AddressContainer>
                <InfoAddress>
                    <DescriptionAddress>Endereço Cadastrado</DescriptionAddress>
                    <Address>{userData.address}</Address>
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