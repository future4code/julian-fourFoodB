import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Logo from "../../Images/logo-future-eats-invert.svg";
import { PrincipalButton } from "../../Themes";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingTop: "24px",
    paddingBottom: "16px",
  },
  title: {
    padding: "12px",
  },
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container fixed>
      <img src={Logo} alt={"logo aplicativo"} className={classes.logo} />
      <Typography align='center'>Cadastrar</Typography>
      <form>
        <Grid container spacing={2} direction='column'>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              variant='outlined'
              label='Nome'
              placeholder='Nome e sobrenome'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              variant='outlined'
              label='E-mail'
              placeholder='email@email.com'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              variant='outlined'
              label='CPF'
              placeholder='000.000.000-00'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='password'
              fullWidth
              required
              variant='outlined'
              label='Senha'
              placeholder='Mínimo 6 caracteres'
              inputProps={{
                pattern: "/^.{6,}$/",
                title: "A senha deve conter no mínimo 6 caracteres",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type='password'
              fullWidth
              required
              variant='outlined'
              label='Confirmar'
              placeholder='Confirma senha anterior'
            />
          </Grid>
          <Grid item xs={12}>
            <PrincipalButton
              variant='contained'
              fullWidth
              disableElevation
              type='submit'
              color='primary'
            >
              Criar
            </PrincipalButton>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUp;
