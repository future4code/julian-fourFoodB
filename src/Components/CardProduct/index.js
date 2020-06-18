import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "15vh",
    borderRadius: "10px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    paddingBottom: theme.spacing(1),
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cover: {
    width: 110,
  },
}));

const CardProduct = (props) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          component='img'
          image={props.foto}
          title='Prato jakaroo'
        />
        <CardContent className={classes.content}>
          <Typography
            color='primary'
            className={classes.text}
            variant='h6'
            component='h2'
          >
            {props.nome}
          </Typography>
          <Typography
            className={classes.text}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {props.descricao}
          </Typography>

          <Typography className={classes.text} variant='h6' component='span'>
            {props.preco}
          </Typography>
          <footer className={classes.footer}>
            <Button color='primary' variant='outlined'>
              adicionar
            </Button>
          </footer>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardProduct;
