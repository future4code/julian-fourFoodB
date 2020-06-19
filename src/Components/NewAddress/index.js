import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { PrincipalButton } from "../../Themes";
import Grid from "@material-ui/core/Grid";
import { useProtectedPage } from "../../Hooks/ProtectedPage";
import { useForm } from "../../Hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewAddress = () => {
  useProtectedPage();
  const history = useHistory();
  const token = localStorage.getItem('token')

  const { form, onChange } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)

    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };

    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address`,
        body,
        {
          headers: {
            Auth: token, 
          },
        }
      )
      .then((response) => {
        window.alert("Alterado com sucesso.");
        history.push("/perfil");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container fixed>
      <Typography>Meu endereço</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label='Logradouro'
              placeholder='Rua / Av.'
              fullWidth
              variant='outlined'
              required
              name='street'
              value={form.street}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Número'
              placeholder='Número'
              fullWidth
              variant='outlined'
              required
              name='number'
              value={form.number}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Complemento'
              placeholder='Apto. / Bloco'
              fullWidth
              variant='outlined'
              name='complement'
              value={form.complement}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Bairro'
              placeholder='Bairro'
              fullWidth
              variant='outlined'
              required
              name='neighbourhood'
              value={form.neighbourhood}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Cidade'
              placeholder='Cidade'
              fullWidth
              variant='outlined'
              required
              name='city'
              value={form.city}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='Estado'
              placeholder='Estado'
              fullWidth
              variant='outlined'
              required
              name='state'
              value={form.state}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <PrincipalButton
              fullWidth
              color='primary'
              variant='contained'
              disableElevation
              type='submit'
            >
              Salvar
            </PrincipalButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default NewAddress;
