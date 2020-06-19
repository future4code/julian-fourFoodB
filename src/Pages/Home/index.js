import React, { useState, useEffect, useContext } from "react";
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
import FooterBar from '../../Components/FooterBar'
import {HeaderTitle} from '../../Components/Header'


const Home = () => {
  //useProtectedPage()

  const token = localStorage.getItem("token");

  const history = useHistory();

  const [filterTab, setFilterTab] = useState(null);

  const [restaurantList, setRestaurantList] = useState([]);

  const [inputFilter, setInputFilter] = useState("");

  let filteredList = restaurantList;

  if (filterTab === 0) {
    filteredList = filteredList.filter(restaurant => {
      return restaurant.category.toLowerCase() === "Hamburguer".toLowerCase();
    });
  }
  if (filterTab === 1) {
    filteredList = filteredList.filter(restaurant => {
      return restaurant.category.toLowerCase() === "asiática".toLowerCase();
    });
  }
  if (filterTab === 2) {
    filteredList = filteredList.filter(restaurant => {
      return restaurant.category.toLowerCase() === "italiana".toLowerCase();
    });
  }
  if (filterTab === 3) {
    filteredList = filteredList.filter(restaurant => {
      return restaurant.category.toLowerCase() === "mexicana".toLowerCase();
    });
  }
  if (filterTab === 4) {
    filteredList = filteredList.filter(restaurant => {
      return restaurant.category.toLowerCase() === "Baiana".toLowerCase();
    });
  }

  if (inputFilter !== "") {
    filteredList = filteredList.filter(restaurant => {
      return restaurant.name.toLowerCase().includes(inputFilter.toLowerCase());
    });
  }

  const onChangeFilterTab = (event, newValue) => {
    if (newValue === filterTab) {
      setFilterTab(null);
    } else {
      setFilterTab(newValue);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants",
        {
          headers: {
            Auth: token
          }
        }
      )
      .then(response => {
        setRestaurantList(response.data.restaurants);
      })
      .catch(err => {
        window.alert(err);
      });
  };

  const goToDetails = restaurantId => {
    history.push(`/restaurante/${restaurantId}`);
  };

  return (
    <div>
      <HeaderTitle titlePage="Ifuture"></HeaderTitle>
      <Container>
        <TextField
          label="Restaurante"
          fullWidth
          variant="outlined"
          value={inputFilter}
          onChange={event => setInputFilter(event.target.value)}
        />

        <Tabs
          value={filterTab}
          onChange={onChangeFilterTab}
          textColor="primary"
          variant="scrollable"
          indicatorColor="none"
        >
          <Tab label="Hamburguer" />
          <Tab label="Asiática" />
          <Tab label="Italiana" />
          <Tab label="Mexicana" />
          <Tab label="Baiana" />
        </Tabs>

        <Grid container spacing={2}>
          {filteredList.map(restaurant => {
            return (
              <Grid item onClick={() => goToDetails(restaurant.id)}>
                <CardRestaurant
                  restaurantImage={restaurant.logoUrl}
                  restaurantName={restaurant.name}
                  deliveryTime={restaurant.deliveryTime + " mins"}
                  freteValue={restaurant.shipping}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <FooterBar activeHomePage="primary"/>
    </div>
  );
};

export default Home;
