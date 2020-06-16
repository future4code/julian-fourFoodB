import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Logo from "../../Images/logo-future-eats-invert.png";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useForm } from "../../Hooks/useForm";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  button: {
    height: theme.spacing(6),
    backgroundColor: "#e8222e",
    textTransform: "none",
    fontSize: 18,
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  logo: {
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formWrapper: {
    height: "70vh",
  },
  title: {
    fontSize: "1.5em",
  },
}));

const Login = () => {
  const classes = useStyles();
  const { form, onChange, clickShowPassword, mouseDownPassword } = useForm({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(name, value);
  };

  const handleClickShowPassword = () => {
    clickShowPassword();
  };

  const handleMouseDownPassword = (event) => {
    mouseDownPassword(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item className={classes.logo} xs={11}>
        <img src={Logo} alt={"logo aplicativo"} />
      </Grid>
      <Grid item className={classes.formWrapper} xs={11}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <span className={classes.title}>Entrar</span>
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
              <Button
                variant='contained'
                fullWidth
                disableElevation
                className={classes.button}
              >
                Entrar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <span>Não possui cadastro? Clique aqui.</span>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
