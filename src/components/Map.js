
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div onClick={ (e) => console.log(e.target)} >{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 17
  };
 
  render() {
      let coo
      if(this.props.coordinates){
        coo={
            lat:this.props.coordinates.latitude,
            lng:this.props.coordinates.longitude
        }
    }

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
                <AnyReactComponent 
                    lat={coo.lat + 0.1}
                    lng={coo.lng + 0.1}
                    text="📍"
                />
                </GoogleMapReact>
          :null}
      </div>
    );
  }
}
 
export default SimpleMap;