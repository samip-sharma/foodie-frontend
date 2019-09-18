import React from 'react';
import './App.css';
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import RestaurantDetail from './components/RestaurantDetail'
import Friendlist from './components/Friendlist'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends React.Component {
  
  state = {
    name: '',
    user_name: '',
    searchTerm: '',
    AllRestaurant: [],
    detailRestaurant: {},
    xcoordinate: 40.700862,
    ycoordinate: -73.987472
  }

  componentDidMount() {
    this.getGeoLocation()
    this.getRestaurantFromYelp()
  }

  handleSearchRestaurant = (term) => {
    this.getRestaurantFromYelp(term)
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          localStorage.xcoo=position.coords.latitude
          localStorage.ycoo=position.coords.longitude
          this.setState((prevState) => ({
            xcoordinate:position.coords.latitude,
            ycoordinate:position.coords.longitude
          }),this.getRestaurantFromYelp
          )
        }
      )
    } else {
      alert("Cannot get your location from your browser. Using default coordinates.")
    }
  }

  getRestaurantFromYelp = (term="food") => {
    fetch(`https://flatiron-foodie.herokuapp.com/getRestaurant/${term}`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accepts":"application/json"
      },
      body:JSON.stringify(
      { xcoo:this.state.xcoordinate,
        ycoo:this.state.ycoordinate}
      )
    })
      .then(resp => resp.json())
      .then((data) => {
        if(!data.error){
          this.setState({
            AllRestaurant: data.businesses
          })
        }
      }
    )
  }



  render() {
    return (
      <Switch>
        <Route exact path='/' render={(routerProps)=> <Login  {...routerProps}/>} />
        <Route path='/home'
          render={(routerProps) => <Home coordinates={{
          lat:this.state.xcoordinate,
          lng:this.state.ycoordinate
          }}
          {...routerProps}
            handleSearchRestaurant={this.handleSearchRestaurant} 
            AllRestaurant={this.state.AllRestaurant}/>} 
          />
          
        <Route path='/register' render={(routerProps)=> <Register {...routerProps} />} />
        <Route path='/friendlist' render={(routerProps)=> <Friendlist handleSearchRestaurant={this.handleSearchRestaurant} {...routerProps}/>} />
        <Route path='/show' render={(routerProps)=><RestaurantDetail detailRestaurant={this.state.detailRestaurant} handleSearchRestaurant={this.handleSearchRestaurant} {...routerProps}/>} />
        <Route path='/profile' render={(routerProps) => <Profile handleSearchRestaurant={this.handleSearchRestaurant} {...routerProps} />} />
      </Switch>
    )
  }
}

export default App;
