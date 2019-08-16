import React from 'react';
import './App.css';
import Login from './components/Login'
import ReturnMap from './components/Map'
import Yelp from 'yelp'


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
    var yelp = new Yelp({
      consumer_key: 'cQIy3LDS7Xw7Xt6W-4iSW7rkaPuuv56XJ9UgQK1I0Y55Ks4BlJeys3j6B7Ewje2scBJEjbfCEId7dd2foDVpCLvGasb0vklV4ZEZBkJqmj_KTzIhNg3yh4P_pXBVXXYx',
      consumer_secret: 'cQIy3LDS7Xw7Xt6W-4iSW7rkaPuuv56XJ9UgQK1I0Y55Ks4BlJeys3j6B7Ewje2scBJEjbfCEId7dd2foDVpCLvGasb0vklV4ZEZBkJqmj_KTzIhNg3yh4P_pXBVXXYx'
    });


  yelp.search({ term: 'food', location: 'Montreal' })
  .then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});
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
