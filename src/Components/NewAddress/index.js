import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { PrincipalButton } from '../../Themes'
import Grid from "@material-ui/core/Grid";

const DivWrapper = styled.div`
    height: 100vh;
`


const NewAddress = () => {


    return (
        <Container fixed>
            <Typography>Meu endereço</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Logradouro"
                        placeholder="Rua / Av."
                        fullWidth
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Número"
                        placeholder="Número"
                        fullWidth
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Complemento"
                        placeholder="Apto. / Bloco"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Bairro"
                        placeholder="Bairro"
                        fullWidth
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Cidade"
                        placeholder="Cidade"
                        fullWidth
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Estado"
                        placeholder="Estado"
                        fullWidth
                        variant="outlined"
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <PrincipalButton
                        fullWidth
                        color="primary"
                        variant="contained"
                        disableElevation>
                        Salvar
                    </PrincipalButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default NewAddress