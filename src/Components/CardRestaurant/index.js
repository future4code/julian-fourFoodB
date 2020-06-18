import React from 'react'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'

const CardRestaurant = (props) => {

    return(
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.restaurantImage}
                    title={props.restaurantName}
                />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography color="primary" gutterBottom variant="body1" component="h2">
                                {props.restaurantName}
                            </Typography>

                        </Grid>

                        <Grid item xs={6}>

                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.deliveryTime}
                            </Typography>

                        </Grid>

                        <Grid item xs={6}>

                            <Typography align="right" variant="body2" color="textSecondary" component="p">
                                Frete: R$ {props.freteValue}
                            </Typography>

                        </Grid>

                    </Grid>

                </CardContent>
            </CardActionArea>

        </Card>
    )
}

export default CardRestaurant