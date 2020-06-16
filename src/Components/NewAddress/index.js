import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const DivWrapper = styled.div`
    height: 100vh;
`

const ButtonCreate = styled(Button)`
    margin-top: 10px;
`

const NewAddress = () => {

    return(
        <Container fixed spacing={4}>
            <DivWrapper>
                <Typography>Meu endereço</Typography>
                <TextField 
                    label="Logradouro"
                    placeholder="Rua / Av."
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    required
                />
                <TextField
                    label="Número"
                    placeholder="Número"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    required
                />
                <TextField
                    label="Complemento"
                    placeholder="Apto. / Bloco"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                />
                <TextField
                    label="Bairro"
                    placeholder="Bairro"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    required
                />
                <TextField
                    label="Cidade"
                    placeholder="Cidade"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    required
                />
                <TextField
                    label="Estado"
                    placeholder="Estado"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    required
                />
                <ButtonCreate 
                    fullWidth 
                    color="primary" 
                    variant="contained"
                    disableElevation>
                    Salvar
                </ButtonCreate>
            </DivWrapper>
        </Container>
    )
}

export default NewAddress