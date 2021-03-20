import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBImpMG_ykm_Z7TUiorqttDDRA6pKdHE1M" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={24.2276742}
            lng={89.7020581}
            text="Workplace of Prodip M"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
