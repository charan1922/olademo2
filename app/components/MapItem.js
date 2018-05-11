import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";
import { Marker } from "react-native-maps";
import { MarkerList } from "./MarkerData";
export default class MapItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: []
    };
  }

  fetchMarkerData = () => {
    this.setState({
      isLoading: false,
      markers: MarkerList
    });
  };

  componentDidMount() {
    this.fetchMarkerData();
  }

  render() {
    return (
      <MapView
        style={{
          flex: 1
        }}
        initialRegion={{
          latitude: 17.4375,
          longitude: 78.4483,
          latitudeDelta: 0.0252,
          longitudeDelta: 0.012
        }}
      >
        {this.state.markers.map(marker => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude
          };

          return (
            <MapView.Marker
              key={marker.id}
              coordinate={coords}
              title={marker.stationName}
              description={marker.description}
            />
          );
        })}
      </MapView>
    );
  }
}
