import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MapView } from "expo";
import { Marker } from "react-native-maps";
import { markerData } from "./MarkerData";
export default class MapItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markerData: []
    };
  }

  fetchMarkerData = () => {
    this.setState({
      isLoading: false,
      markerData
    });
  };

  componentDidMount() {
    this.fetchMarkerData();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    }

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
        {this.state.markerData.map(marker => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude
          };


          
          return (
            <MapView.Marker
              key={marker.id}
              coordinate={coords}
              title={marker.title}
              description={marker.description}
            />
          );
        })}
      </MapView>
    );
  }
}
