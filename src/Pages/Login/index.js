import React, { useState } from "react";
import { useStyles } from "./style";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Logo from "../../Images/logo-future-eats-invert.png";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useForm } from "../../Hooks/useForm";
import { PrincipalButton } from "../../Themes";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";

const Login = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const classes = useStyles();
  const {
    form,
    onChange,
    clickShowPassword,
    mouseDownPassword,
    resetForm,
  } = useForm({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleClickShowPassword = () => clickShowPassword();
  const handleMouseDownPassword = (event) => mouseDownPassword(event);

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/login`,
        body
      )
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        history.push("/home");
      })
      .catch((error) => {
        setOpen(true);
        resetForm();
      });
  };

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item className={classes.logo} xs={11}>
        <Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='error'>
            <AlertTitle>Erro</AlertTitle>
            Dados incorretos!
          </Alert>
        </Snackbar>
        <img src={Logo} alt={"logo aplicativo"} />
      </Grid>
      <Grid item className={classes.formWrapper} xs={11}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h5' align='center'>
                Entrar
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                variant='outlined'
                label='E-mail'
                placeholder='email@email.com'
                type='email'
                name='email'
                value={form.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl required fullWidth variant='outlined'>
                <InputLabel htmlFor='password'>Senha</InputLabel>
                <OutlinedInput
                  placeholder='Mínimo 6 caracteres'
                  name='password'
                  type={form.showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleInputChange}
                  inputProps={{
                    pattern: "/^.{6,}$/",
                    title: "A senha deve conter no mínimo 6 caracteres",
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {form.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <PrincipalButton
                variant='contained'
                fullWidth
                disableElevation
                color='primary'
                type='submit'
              >
                Entrar
              </PrincipalButton>
            </Grid>
            <Grid item xs={12}>
              <Typography
                onClick={() => history.push("/cadastro")}
                align='center'
                className={classes.register}
              >
                Não possui cadastro? Clique aqui.
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
