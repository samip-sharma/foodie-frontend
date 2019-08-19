import React from 'react';
import './App.css';
import Login from './components/Login'
// import ReturnMap from './components/Map'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import RestaurantDetail from './components/RestaurantDetail'
import Friendlist from './components/Friendlist'
import Register from './components/Register'




class App extends React.Component {
  state={
    name:'',
    user_name:'',
    searchTerm:'',
    AllRestaurant:[],
    detailRestaurant:{},
    xcoordinate:40.700862,
    ycoordinate:-73.987472
  }

  onLogin=(user_data)=>{
    console.log(user_data)
  }

  componentDidMount(){
    this.getGeoLocation()
   this.getRestaurantFromYelp()
  }

  handleSearchRestaurant=(term)=>{
    this.getRestaurantFromYelp(term)
  }

  getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState((prevState)=>({
            xcoordinate:position.coords.latitude,
            ycoordinate:position.coords.longitude
          }),this.getRestaurantFromYelp
          )
        }
      )
    } else {
       console.log("error")
    }
  }

  getRestaurantFromYelp=(term="lunch")=>{
    fetch(`http://localhost:3000/getRestaurant/${term}`,{
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
    .then(resp=>resp.json())
    .then((data)=>{
      this.setState({
        AllRestaurant:data.businesses
      })
    })
  }



  render(){
    console.log(this.state)
    return (
      <Switch>
        <Route exact path='/' render={(routerProps)=> <Login  {...routerProps} onLogin={this.onLogin} />} />
        <Route path='/home' render={(routerProps)=> <Home {...routerProps} handleSearchRestaurant={this.handleSearchRestaurant} AllRestaurant={this.state.AllRestaurant}/>} />
        <Route path='/register' render={(routerProps)=> <Register {...routerProps} />} />
        <Route path='/friendlist' render={(routerProps)=><Friendlist {...routerProps}/>} />
        <Route path='/show' render={(routerProps)=><RestaurantDetail detailRestaurant={this.state.detailRestaurant} {...routerProps}/>} />
      </Switch>
    )
  }
}

export default App;
