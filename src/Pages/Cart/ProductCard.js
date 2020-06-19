import React from 'react'
import {
    Typography,
    IconButton,
    Card,
    CardContent,
    CardMedia,
    makeStyles,
    Container,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      height: '15vh',
    },
    image: {
        width: "35%"
    },
    description: {
        fontSize: "12px"
    },
  }));

const ProductCard = () => {
    const classes = useStyles();

    return (
        <div>
           <Card className={classes.root} variant="outlined">
               <CardMedia
                className={classes.image}
                component='img'
                image='http://soter.ninja/futureFoods/logos/outback.png'
                title='Logotipo Outback'
               />
               <CardContent>
                   <Typography align="justify" color="error" gutterBottom>Nome do produto</Typography>
                   <Typography align="justify" color="textSecondary" variant="subtitle2" className={classes.description} gutterBottom>Descrição</Typography>
                   <Typography align="justify">R$00,00</Typography>
               </CardContent>
           </Card>
        </div>
    )
}

export default ProductCard
