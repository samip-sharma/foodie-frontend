import React from 'react';
import './App.css';
import Login from './components/Login'
import ReturnMap from './components/Map'


class App extends React.Component {
  state={
    name:'',
    user_name:'',
    defaultQuery:'?term=food&location=nyc'
  }

  onLogin=(user_data)=>{
    console.log(user_data)
  }

  componentDidMount(){
  }



  render(){
    return (
      <React.Fragment>
        <div className="App">
        <Login onLogin={this.onLogin} />
        {/* <ReturnMap /> */}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
