import React from "react";
import { useProtectedPage } from "../../Hooks/ProtectedPage";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CardProduct from "../../Components/CardProduct";
import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid gray"
  },
  button: {
    marginRight: "20%",
  },
  card: {
    height: "30vh",
    borderRadius: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    marginRight: "10%",
  },
  cover: {
    height: 110,
  },
}));

const Restaurant = () => {
  const classes = useStyles();
  useProtectedPage();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item className={classes.header} xs={12}>
          <IconButton className={classes.button}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant='h5' align='center' component='span'>
            Restaurante
          </Typography>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cover}
              component='img'
              image='http://soter.ninja/futureFoods/logos/outback.png'
              title='Logotipo Outback'
            />
            <CardContent>
              <Typography
                gutterBottom
                color='primary'
                variant='h5'
                component='h2'
              >
                Outback Steakhouse
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Carnes
              </Typography>
              <Typography
                className={classes.text}
                variant='body2'
                color='textSecondary'
                component='span'
              >
                20 min
              </Typography>
              <Typography
                variant='body2'
                color='textSecondary'
                component='span'
              >
                Frete: R$ 18,00
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                "Alameda dos Marsupiais, 505 - Humaitá"
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant='h5' component='h2'>
            Refeição
          </Typography>
        </Grid>
        <CardProduct
          preco='R$ 82,90'
          id='1'
          foto='https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/5221af98-5ad4-42e2-a767-23d1545b82d5/201911191742_Cuuv_j.jpg'
          nome='Jackaroo ribs & steak'
          descricao='Exclusividade Outback'
        />
      </Grid>
    </Container>
  );
};

export default Restaurant;