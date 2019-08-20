
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 17
  };
 
  render() {
    //   console.log(this.props)
      let coo
      if(this.props.coordinates){
        coo={
            lat:this.props.coordinates.latitude,
            lng:this.props.coordinates.longitude
        }
    }
    console.log(coo)
    //   console.log(this.props.coordinates)
    return (
      // Important! Always set the container height explicitly
      <div className="each-map" style={{ height: '300px', width: '300px' }}>
          {  coo?
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                defaultCenter={coo}
                defaultZoom={this.props.zoom}
                >
                <AnyReactComponent  
                    lat={coo.lat}
                    lng={coo.lng}
                    text="📍"
                />
                </GoogleMapReact>
          :null}
      </div>
    );
  }
}
 
export default SimpleMap;