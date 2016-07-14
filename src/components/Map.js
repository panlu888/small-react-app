import { default as React, Component } from "react";
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from "react-google-maps";
var _ = require('lodash');

const PopInfoWindow = React.createClass({
  getInitialState: function() {
    return {center: {}, markers: []};
  },

  componentDidMount: function() {
    var center = this.props.center;
    var position = new google.maps.LatLng(center.lat, center.lng);
    var marker = _.assign({}, {'position': position}, {'showInfo': false});
    this.setState({center: center, markers: [marker]});
  },

  handleMarkerClick: function(marker) {
    marker.showInfo = true;
    this.setState({markers: [marker]});
  },

  renderInfoWindow: function(ref, marker) {
    return (
      <InfoWindow>
      </InfoWindow>
    );
  },

  render: function() {
    return (
      <GoogleMapLoader 
        containerElement={
          <div
            {...this.props}
            style={{
              height: '100%'
            }}>
          </div>
        }
        googleMapElement={
          <GoogleMap
            center={this.state.center}
            defaultZoom={4}  
            ref='map'>
            {this.state.markers.map(function(marker, index) {
              const ref = 'marker_' + index;
              return (
                <Marker
                  key={index}
                  ref={ref}
                  position={marker.position}
                  onClick={this.handleMarkerClick.bind(this, marker)}>
                    {marker.showInfo ? this.renderInfoWindow(ref, marker): null}
                  </Marker>
              );
            })
          }
          </GoogleMap>
        }  
      />

    );
  }
});

