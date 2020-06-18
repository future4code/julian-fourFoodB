import React, {useState, useEffect} from 'react';
import {useProtectedPage} from '../../Hooks/ProtectedPage';
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

const useStyles = makeStyles(theme => ({
    title: {
        padding: "12px"
    },
    address: {
        backgroundColor: "#eeeeee",
        padding: "16px",
        marginBottom: "16px"  
    },
    payment: {
        padding: "16px"
    },
    radioGroup: {
        width: "100vw"
    },
    button: {
        backgroundColor: "#e8222e",
        height: "42px",
        borderRadius: "2px",
        textTransform: "none",
        position: "absolute",
        bottom: "32px",
        right: "16px"
    }
}))

const Cart = () => {
    //useProtectedPage()
    const classes = useStyles();
    return(
        <div>
            <Typography className={classes.title}>Meu carrinho</Typography>
            <div className={classes.address}>
                <Typography align="justify" gutterBottom color="textSecondary">Endereço de entrega</Typography>
                <Typography align="justify" >Rua Alessandra Vieira, 42</Typography>
            </div>
            <Typography>Carrinho vazio</Typography>
            <div className={classes.payment}>
                <Typography align="right">Frete R$0,00</Typography>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography>SUBTOTAL</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" color="error">R$0.00</Typography>
                    </Grid>
                </Grid>
                <Typography align="justify">Forma de pagamento</Typography>
                <hr/>
                <form onSubmit="">
                <FormControl component="fieldset" >
                    <RadioGroup className={classes.radioGroup}>
                        <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro"/>
                        <FormControlLabel value="cartao" control={<Radio/>} label="Cartão de crédito"/>
                    </RadioGroup>
                    
                </FormControl>
                <Button disabled variant="contained" fullWidth className={classes.button} disableElevation>Confirmar</Button>
                </form>
            </div>
            
        </div>
    )
}

export default Cart