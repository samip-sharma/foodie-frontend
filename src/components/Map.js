import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


  function Map() {
        return(
            <React.Fragment>
                <GoogleMap defaultZoom={10} defaultCenter={{lat: 40.7128, lng:74.0060}}/>
            </React.Fragment>
        )
    
}

 const WrappedMap=withScriptjs(withGoogleMap(Map))

 export default function ReturnMap(){
    return(
        <div>
            <WrappedMap googleMapURL={null}/>
        </div>
    )
}