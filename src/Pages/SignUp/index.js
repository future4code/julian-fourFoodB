import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Logo from "../../Images/logo-future-eats-invert.svg"
import { PrincipalButton } from '../../Themes'
import Container from '@material-ui/core/Container'
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useForm } from "../../Hooks/useForm";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  logo: {
    paddingTop: "24px",
    paddingBottom: "16px"
  },
  title: {
    padding: "12px"
  },
}));



const SignUp = () => {
  const history = useHistory();
  const classes = useStyles();
  const { form, onChange, clickShowPassword, mouseDownPassword } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const signup = () => {
    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password
    }

    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/signup`, body).then(response => {
      console.log(response)
      window.localStorage.setItem('token', response.data.token)
      history.push('/novoendereco')
    })
  }

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleSubmit = event => {
    event.preventDefault()
    signup()
  }

  

  return(
    <Container fixed>
      <img src={Logo} className={classes.logo}/>
      <Typography align="center">Cadastrar</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <TextField
              name="name"
              fullWidth
              required
              value={form.name}
              onChange={handleInputChange}
              variant="outlined"
              label="Nome"
              placeholder="Nome e sobrenome"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              type="email"
              fullWidth
              required
              value={form.email}
              onChange={handleInputChange}
              variant="outlined"
              label="E-mail"
              placeholder="email@email.com"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="cpf"
              fullWidth
              required
              value={form.cpf}
              onChange={handleInputChange}
              variant="outlined"
              label="CPF"
              placeholder="000.000.000-00"
              // inputProps={{
              //   pattern: "/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/",
              //   title: "CPF inválido"
              // }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel htmlFor="senha">Senha</InputLabel>
              <OutlinedInput 
                name="password"
                id="senha"
                placeholder="Mínimo 6 caracteres"
                type={form.showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleInputChange}
                // inputProps={{
                //   pattern: "[A-Za-z ]{6,}",
                //   title: "A senha deve conter pelo menos 6 caracteres"
                // }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={clickShowPassword}
                      onMouseDown={mouseDownPassword}
                    >
                      {form.showPassword ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel htmlFor="confirmar-senha">Confirmar</InputLabel>
              <OutlinedInput
                name="confirmPassword" 
                id="confirmar-senha"
                placeholder="Confirme a senha anterior"
                type={form.showPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleInputChange}
                // inputProps={{
                //   pattern: "[A-Za-z ]{6,}",
                //   title: "A senha deve conter pelo menos 6 caracteres"
                // }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={clickShowPassword}
                      onMouseDown={mouseDownPassword}
                    >
                      {form.showPassword ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <PrincipalButton
              variant="contained"
              fullWidth
              disableElevation
              type="submit"
              color="primary">
              Criar
            </PrincipalButton>
              </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default SignUp