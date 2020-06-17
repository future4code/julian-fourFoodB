import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useProtectedPage } from '../../Hooks/ProtectedPage'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CardRestaurant from '../../Components/CardRestaurant'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    title: {

    }
})

const Home = () => {

    const classes = useStyles()

    const [filterTab, setFilterTab] = useState(null)

    const onChangeFilterTab = (event, newValue) => {
        setFilterTab(newValue)
    }

    return (
        <div>
            
            <Container>

                <TextField
                    label="Restaurante"
                    fullWidth
                    variant="outlined"
                />

                <Tabs
                    value={filterTab}
                    onChange={onChangeFilterTab}
                    textColor="primary"
                    variant="scrollable"
                    indicatorColor="none"
                >
                    <Tab value={"Burger"} label="Burger"></Tab>
                    <Tab label="Asiática"></Tab>
                    <Tab label="Massas"></Tab>
                </Tabs>

                <Grid container spacing={2}>

                    <Grid item spacing={2}>

                        <CardRestaurant
                            restaurantImage="https://ogimg.infoglobo.com.br/in/24134237-8b6-4ef/FT1086A/652/b_de_burger_out-8.jpg"
                            restaurantName="Burger"
                            deliveryTime="50-60 mins"
                            freteValue="6,00"
                        />

                    </Grid>

                    <Grid item >

                        <CardRestaurant
                            restaurantImage="https://ogimg.infoglobo.com.br/in/24134237-8b6-4ef/FT1086A/652/b_de_burger_out-8.jpg"
                            restaurantName="Burger"
                            deliveryTime="50-60 mins"
                            freteValue="6,00"
                        />
                    </Grid>
                </Grid>

            </Container>



        </div>
    )
}

export default Home