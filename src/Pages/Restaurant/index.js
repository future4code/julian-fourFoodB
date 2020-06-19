import React, { useEffect, useState } from "react";
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
  Container
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid gray"
  },
  button: {
    marginRight: "20%"
  },
  card: {
    height: "30vh",
    borderRadius: "10px"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  text: {
    marginRight: "10%"
  },
  cover: {
    height: 110
  }
}));

const Restaurant = () => {
  const classes = useStyles();
  useProtectedPage();
  const params = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState();

  const getRestaurantDetails = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${
          params.restaurantId
        }`,
        {
          headers: {
            auth: window.localStorage.getItem("token")
          }
        }
      )
      .then(response => {
        console.log(response.data);
        setRestaurantDetails(response.data.restaurant);
      });
  };

  useEffect(() => {
    getRestaurantDetails();
    console.log(restaurantDetails);
  }, []);

  return (
    <Container>
      {restaurantDetails === undefined ? (
        <p>Carregando...</p>
      ) : (
        <Grid container spacing={2}>
          <Grid item className={classes.header} xs={12}>
            <IconButton className={classes.button}>
              <ArrowBackIosIcon />
            </IconButton>
            <Typography variant="h5" align="center" component="span">
              Restaurante
            </Typography>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                component="img"
                image={restaurantDetails.logoUrl}
                title="Logotipo"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  color="primary"
                  variant="h5"
                  component="h2"
                >
                  {restaurantDetails.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {restaurantDetails.category}
                </Typography>
                <Typography
                  className={classes.text}
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  {restaurantDetails.deliveryTime} min
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  Frete: R$ {restaurantDetails.shipping}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {restaurantDetails.address}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h5" component="h2">
              Refeição
            </Typography>
          </Grid>
          {restaurantDetails.products.map(product => {
            return (
              <CardProduct
                preco={"R$ " + product.price.toFixed(2)}
                id={product.id}
                foto={product.photoUrl}
                nome={product.name}
                descricao={product.desciption}
              />
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default Restaurant;
