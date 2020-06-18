import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import { useProtectedPage } from '../../Hooks/ProtectedPage'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CardRestaurant from '../../Components/CardRestaurant'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab';
import FilterContext from '../../Context/FilterContext'

const Home = () => {

    useProtectedPage()

    const token = localStorage.getItem('token')

    const history = useHistory()

    const [filterTab, setFilterTab] = useState(null)

    const [restaurantList, setRestaurantList] = useState([])

    let filteredList = restaurantList

    if(filterTab === 0){
        filteredList = filteredList.filter((restaurant) => {
            return restaurant.category.toLowerCase() === "Hamburguer".toLowerCase()
        })
    }
    if(filterTab === 1){
        filteredList = filteredList.filter((restaurant) => {
            return restaurant.category.toLowerCase() === "asiática".toLowerCase()
        })
    }
    if(filterTab === 2){
        filteredList = filteredList.filter((restaurant) => {
            return restaurant.category.toLowerCase() === "italiana".toLowerCase()
        })
    }
    if(filterTab === 3){
        filteredList = filteredList.filter((restaurant) => {
            return restaurant.category.toLowerCase() === "mexicana".toLowerCase()
        })
    }
    if (filterTab === 4) {
        filteredList = filteredList.filter((restaurant) => {
            return restaurant.category.toLowerCase() === "Baiana".toLowerCase()
        })
    }

    const onChangeFilterTab = (event, newValue) => {
        if(newValue === filterTab){
            setFilterTab(null)
        }else{
            setFilterTab(newValue)
        }
        
    }

    useEffect(() => {
        getRestaurants()
    }, [])

    const getRestaurants = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants', {
                headers: {
                    Auth: token,
                }
            })
            .then(response => {
                setRestaurantList(response.data.restaurants)
            })
            .catch(err => {
                window.alert(err)
            })
    }

    const goToDetails = () => {
        history.push('/home/:id')
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
                    <Tab label="Hamburguer"></Tab>
                    <Tab label="Asiática"></Tab>
                    <Tab label="Italiana"></Tab>
                    <Tab label="Mexicana"></Tab>
                    <Tab label="Baiana"></Tab>
                </Tabs>

                <Grid container spacing={2}>                    

                    {filteredList.map((restaurant) => {
                        return <Grid item onClick={goToDetails}>

                            <CardRestaurant
                                restaurantImage={restaurant.logoUrl}
                                restaurantName={restaurant.name}
                                deliveryTime={restaurant.deliveryTime + " mins"}
                                freteValue={restaurant.shipping}
                            />

                        </Grid>
                    })}

                    
                </Grid>

            </Container>



        </div>
    )
}

export default Home