import styled from 'styled-components';

export const ProfileContainer = styled.div` /* Container perfil */
  width: 98vw;
  margin: 0;
  padding: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleBar = styled.div` /* Barra título */
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 16px;
  font-family: Roboto;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
`

export const PersonalDataContainer = styled.div` /* Container dados */
    width: 90%;
    height: 120px;
    margin-top: 44px;
    display: flex;
`

export const InfoContainer = styled.div` /* Container Nome, Email, CPF */
  width: 92%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`

export const P = styled.p` /* Parágrafo para exemplo */
  margin: 0;
  font-family: Roboto;
  font-size: 16px;
`

export const EditButtonContainer = styled.div` /* Container botão edição Nome, Email, CPF */
  width: 8%;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const AddressContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: flex-start;
  background-color: #eeeeee;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0 5% 0 5%;
`

export const InfoAddress = styled.div`
  width: 82%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`

export const DescriptionAddress = styled.p`
  font-family: Roboto;
  color: #b8b8b8;
  margin: 0;
`

export const Address = styled.p`
  font-family: Roboto;
  color: #000000;
  margin: 0;
  font-weight: bold;
`

export const HistoricContainer = styled.div` /* Container dados */
  width: 90%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`

export const Historic = styled.div` /* Container Nome, Email, CPF */
  width: 90%;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
`
