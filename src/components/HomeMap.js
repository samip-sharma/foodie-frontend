import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text,restaurant_id, history }) => <div className="marker-gmap"  onClick={ (e) => 
    {localStorage.restaurant_id=restaurant_id
        history.push('/show')
    }} >{text}</div>;

class HomeMap extends Component {

  render() {
      let coo
      if(this.props.AllRestaurant && this.props.coordinates){
        coo = {
            lat:40.700862,
            lng:-73.987472
        }
    }
    let allCoordinates = this.props.AllRestaurant.map((restaurant) => {
        return <Marker
        lat = {restaurant.coordinates.latitude}
        lng = {restaurant.coordinates.longitude}
        text = {`📍${restaurant.name}`}
        restaurant_id = {restaurant.id}
        history = {this.props.history}
        />
    })

    return (
      <div className="home-map" style={{ height: '70vh', width: '80vw' }}>
          {  coo?
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={this.props.coordinates}
                defaultZoom={17.2}
                >
            {allCoordinates}
            
                </GoogleMapReact>
          :null}
      </div>
    );
  }
}

export default HomeMap;