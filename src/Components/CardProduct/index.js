import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
} from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  cover: {
    width: 151,
  },
  content: {
    flex: '1 0 auto',
  },
}));

const CardProduct = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Card>
          <CardMedia
            component='img'
            image={props.foto}
            title={props.nome}
            className={classes.cover}
          />
          <div>
          <CardContent className={classes.content}>
            <Typography
              color='primary'
              variant='h6'
              component='h2'
            >
              {props.nome}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {props.descricao}
            </Typography>

            <Typography variant='h6' component='span'>
              {props.preco}
            </Typography>
              <Button onClick={props.addProduct} color='primary' variant='outlined'>
                adicionar
            </Button>
          </CardContent>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CardProduct;
