
import React, { useState, useEffect } from 'react'
import { useProtectedPage } from '../../Hooks/ProtectedPage'
import {
    TitleBar, PersonalDataContainer, InfoContainer, 
    AddressContainer, DescriptionAddress, InfoAddress, Address, HistoricContainer, Historic
} from '../Profile/style'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios'
import FooterBar from '../../Components/FooterBar'
import {HeaderTitle} from '../../Components/Header'

const Profile = () => {
    useProtectedPage()

  let token = localStorage.getItem("token");

    if (token === null) {
        token = sessionStorage.getItem('token')
    }

  const [userData, setUserData] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setUserData(response.data.user);
      })
      .catch((err) => {
        window.alert(err);
      });
  };

    const getHistory = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history')
    }
    return (
        <div>
            <HeaderTitle titlePage="Meu perfil" />

            <Container>
                <PersonalDataContainer>
                    <InfoContainer>
                        <Typography>{userData.name}</Typography>
                        <Typography>{userData.email}</Typography>
                        <Typography>{userData.cpf}</Typography>
                    </InfoContainer>
                    
                        <EditIcon />
                    
                </PersonalDataContainer>

                
                    <InfoAddress>
                        <DescriptionAddress>Endereço Cadastrado</DescriptionAddress>
                        <Address>{userData.address}</Address>
                    </InfoAddress>
                    
                        <EditIcon />
                    
                

                <HistoricContainer>
                    <Typography>Histórico de Pedidos</Typography>
                </HistoricContainer>

                <Historic>
                    Você não realizou nenhum pedido
                </Historic>
            </Container>

            <FooterBar activeProfile="primary"/>
        </div>
    )
}

export default Profile;
