import React from 'react';
import './App.css';
import Login from './components/Login'
// import ReturnMap from './components/Map'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import RestaurantDetail from './components/RestaurantDetail'
import Friendlist from './components/Friendlist'




class App extends React.Component {
  state={
    name:'',
    user_name:'',
    searchTerm:'',
    AllRestaurant:[],
    detailRestaurant:{}
  }

  onLogin=(user_data)=>{
    console.log(user_data)
  }

  componentDidMount(){
    fetch("http://localhost:3000/getRestaurant")
    .then(resp=>resp.json())
    .then((data)=>{
      this.setState({
        AllRestaurant:data.businesses
      })
    })
  }



  render(){
    return (
      <Switch>
        <Route exact path='/' render={(routerProps)=><Login  {...routerProps} onLogin={this.onLogin} />} />
        <Route path='/home' render={(routerProps)=><Home {...routerProps} AllRestaurant={this.state.AllRestaurant}/>} />
        <Route path='/friendlist' render={(routerProps)=><Friendlist {...routerProps}/>} />
        <Route path='/show' render={(routerProps)=><RestaurantDetail detailRestaurant={this.state.detailRestaurant} {...routerProps}/>} />

      </Switch>
    )
  }
}

export default App;
