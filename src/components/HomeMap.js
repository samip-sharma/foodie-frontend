
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Marker = ({ text,restaurant_id, history }) => <div  onClick={ (e) => 
    {localStorage.restaurant_id=restaurant_id
        history.push('/show')
    }} >{text}</div>;
 
class HomeMap extends Component {
 
  render() {
      let coo
      if(this.props.AllRestaurant && this.props.coordinates){
        console.log(localStorage.xcoo)
        console.log(localStorage.ycoo)
        coo={
            lat:40.700862,
            lng:-73.987472
        }
    }
    let allCoordinates = this.props.AllRestaurant.map((restaurant) => {
        return <Marker
        lat={restaurant.coordinates.latitude}
        lng={restaurant.coordinates.longitude}
        text={`📍${restaurant.name}`}
        restaurant_id={restaurant.id}
        history={this.props.history}
            />
    })

    return (
      // Important! Always set the container height explicitly
      <div className="each-map" style={{ height: '500px', width: '500px' }}>
          {  coo?
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={this.props.coordinates}
                defaultZoom={17}
                >
             {allCoordinates}
            
                </GoogleMapReact>
          :null}
      </div>
    );
  }
}
 
export default HomeMap;