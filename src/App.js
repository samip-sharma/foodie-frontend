import React from 'react';
import './App.css';
import Login from './components/Login'
import ReturnMap from './components/Map'
import { Switch, Route } from 'react-router-dom'


class App extends React.Component {
  state={
    name:'',
    user_name:'',
  }

  onLogin=(user_data)=>{
    console.log(user_data)
  }

  render(){
    // console.log(this.state)
    return (
      <div className="App">
      <Login onLogin={this.onLogin} />
      {/* <ReturnMap /> */}
      </div>
    )
  }
}

export default App;
