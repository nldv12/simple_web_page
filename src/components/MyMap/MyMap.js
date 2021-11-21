
import React, {Component} from "react";
import "./MyMap.scss"


import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

export class MyMap extends Component {
    state = {
        length: 1
    }
    render() {
        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 52.11367113785384, lng: 20.980048009075297 }}
            >
                <Marker
                    position={{ lat: 52.11367113785384, lng: 20.980048009075297 }}
                />
            </GoogleMap>
        ));

        return (
            <div className="myMap">
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1HTzYsHQxsFTdAR-aGvZEjVNNouekZfA&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div className={"map_container"} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />

            </div>

        )
    }
}