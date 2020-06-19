import React, { useState, useEffect } from 'react';
import { useProtectedPage } from '../../Hooks/ProtectedPage';
import {
    Typography,
    Grid,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    Button
} from '@material-ui/core';
import { PrincipalButton } from '../../Themes';
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from './ProductCard';
import FooterBar from '../../Components/FooterBar'
import { HeaderTitle } from '../../Components/Header'

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    title: {
        padding: "12px"
    },
    address: {
        backgroundColor: "#eeeeee",
        padding: "16px",
    },
    empty: {
        marginBottom: "45px"
    },
    payment: {
        padding: "16px",
    },
    radioGroup: {
        width: "100vw"
    },
    button: {
        backgroundColor: "#e8222e",
        height: "42px",
        //width: "328px",
        borderRadius: "2px",
        textTransform: "none",
        //position: "absolute",
        //bottom: "16px",
        //left: "16px",
    }
}))

const Cart = () => {
    //useProtectedPage()
    const classes = useStyles();
    return (
        <div>
            <HeaderTitle titlePage="Meu carrinho" />
            <div className={classes.root}>
                <div className={classes.address}>
                    <Typography align="justify" gutterBottom color="textSecondary">Endereço de entrega</Typography>
                    <Typography align="justify" >Rua Alessandra Vieira, 42</Typography>
                </div>
                <div className={classes.payment}>
                    {/* <Typography className={classes.empty}>Carrinho vazio</Typography> */}
                    <Typography align="justify" color="error" gutterBottom>Bullguer Villa Madalena</Typography>
                    <Typography align="justify" color="textSecondary" gutterBottom>R. Fradique Coutinho, 1136 - Vila Madalena</Typography>
                    <Typography align="justify" color="textSecondary" gutterBottom>30 - 45 min</Typography>
                    <Grid item container direction="column" spacing={2}>
                        <Grid item>
                            <ProductCard />
                        </Grid>
                        <Grid item>
                            <ProductCard />
                        </Grid>
                    </Grid>

                    <Typography align="right">Frete R$0,00</Typography>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography>SUBTOTAL</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" color="error">R$00.00</Typography>
                        </Grid>
                    </Grid>
                    <Typography align="justify">Forma de pagamento</Typography>
                    <hr />
                    <form onSubmit="">
                        <FormControl component="fieldset" >
                            <RadioGroup className={classes.radioGroup}>
                                <FormControlLabel value="dinheiro" control={<Radio color="default" />} label="Dinheiro" />
                                <FormControlLabel value="cartao" control={<Radio color="default" />} label="Cartão de crédito" />
                            </RadioGroup>

                        </FormControl>
                        <Button variant="contained" fullWidth className={classes.button} disableElevation>Confirmar</Button>
                    </form>
                </div>

                <FooterBar activeCart="primary" />

            </div>
        </div>
    )
}

export default Cart