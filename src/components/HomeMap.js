
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Marker = ({ text,restaurant_id, history }) => <div  onClick={ (e) => 
    {localStorage.restaurant_id=restaurant_id
        history.push('/show')
    }} >{text}</div>;
 
class HomeMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 17
  };
 
  render() {
      let coo
      if(this.props.AllRestaurant){
        coo={
            lat:40.700862,
            lng:-73.987472
        }
    }
    console.log(this.props.AllRestaurant)
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
                defaultCenter={coo}
                defaultZoom={this.props.zoom}
                >
             {allCoordinates}
            
                </GoogleMapReact>
          :null}
      </div>
    );
  }
}
 
export default HomeMap;