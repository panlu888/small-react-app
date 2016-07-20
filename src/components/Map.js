import { default as React, Component } from "react";
import { GoogleMapLoader, GoogleMap, InfoWindow, Marker } from "react-google-maps";
var _ = require('lodash');

const PopInfoWindow = React.createClass({
  getInitialState: function() {
    return {center: {}, markers: []};
  },

  componentWillMount: function() {
    var center = this.props.center, 
    position = new google.maps.LatLng(Number(center.lat), Number(center.lon)),
    marker = _.assign({}, {'position': position}, {'showInfo': false}),
    newCenter = {};
    _.set(newCenter, 'lat', Number(center.lat));
    _.set(newCenter, 'lng', Number(center.lon));
    this.setState({center: newCenter, markers: [marker]});
  },

  handleMarkerClick: function(marker) {
    marker.showInfo = true;
    this.setState({markers: [marker]});
  },

  handleMarkerClose: function(marker) {
    marker.showInfo = false;
    this.setState({markers: [marker]});
  },
  
  renderInfoWindow: function(ref, marker) {
    return (
      <InfoWindow 
      key={ref+'_info_window'}
      onCloseClick={this.handleMarkerClose.bind(this, marker)}>
        <div>hello world</div>  
      </InfoWindow>
    );
  },

  render: function() {
    var self = this;
    return (
      <GoogleMapLoader 
        containerElement={
          <div
            {...this.props}
            style={{
              height: '100%',
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
                  onClick={self.handleMarkerClick}>
                    {marker.showInfo ? self.renderInfoWindow(ref, marker): null}
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

module.exports = PopInfoWindow;
