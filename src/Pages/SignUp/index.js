import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Logo from "../../Images/logo-future-eats-invert.svg"

const useStyles = makeStyles(theme => ({
    gridContainer: {
        padding: "16px",
        paddingTop: "8px"
    },
    logo: {
        paddingTop: "24px",
        paddingBottom: "16px"
    },
    title: {
        padding: "12px"
    },
    input: {
        borderRadius: "2px"
    },
    button: {
        height: "42px",
        borderRadius: "2px",
        textTransform: "none",
        fontSize: "16px"
    }
  }));

const SignUp = () => {
    const classes = useStyles();

    return(
        <Grid container direction="column">
            <img src={Logo} className={classes.logo}/>
            <Typography align="center" className={classes.title}>Cadastrar</Typography>
            <form>
            <Grid container spacing={2} className={classes.gridContainer} direction="column">
                <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      fullWidth
                      required
                      variant="outlined"
                      label="Nome"
                      placeholder="Nome e sobrenome"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      fullWidth
                      required
                      variant="outlined"
                      label="E-mail"
                      placeholder="email@email.com"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      fullWidth
                      required
                      variant="outlined"
                      label="CPF"
                      placeholder="000.000.000-00"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      type="password"
                      fullWidth
                      required
                      variant="outlined"
                      label="Senha"
                      placeholder="Mínimo 6 caracteres"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      type="password"
                      fullWidth
                      required
                      variant="outlined"
                      label="Confirmar"
                      placeholder="Confirma senha anterior"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      disableElevation
                      className={classes.button}
                      type="submit"
                      color="primary"
                    >
                      Criar
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Grid>
    )
}

export default SignUp