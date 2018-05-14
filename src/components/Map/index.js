import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { MapView } from "expo";
import { Marker, Callout } from "react-native-maps";
import { markerData, cabMarkerData } from "./Data";
import CustomCallout from "./CustomCallout";
import { WHITE } from "../../utils/colors";
const LATITUDE = 17.4375;
const LONGITUDE = 78.4483;
const LATITUDE_DATA = 0.01222;
const LONGITUDE_DATA = 0.00421;

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DATA,
        longitudeDelta: LONGITUDE_DATA
      },
      isLoading: true,
      markerData: [],
      cabMarkerData: []
    };
  }

  fetchMarkerData = () => {
    this.setState({
      isLoading: false,
      markerData,
      cabMarkerData
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
        initialRegion={this.state.region}
        showsUserLocation={true}
      >
        {this.state.markerData.map(marker => {
          const coords = {
            latitude: marker.latitude,
            longitude: marker.longitude
          };
          return (
            <Marker
              key={marker.id}
              coordinate={coords}
              showsUserLocation={true}
              image={require("../../images/pin.png")}
            >
                {/* <View style={styles.radius} /> */}
              <Callout tooltip style={styles.customView}>
                <CustomCallout
                  title={marker.title}
                  description={marker.description}
                />
              </Callout>
            </Marker>
          );
        })}

        {this.state.cabMarkerData.map(marker => {
          const cab_coords = {
            latitude: marker.latitude,
            longitude: marker.longitude
          };
          return (
            <Marker
              key={marker.id}
              coordinate={cab_coords}
              image={require("../../images/rental_topview.png")}
            />
          );
        })}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  customView: {
    width: 330,
    height: 150
  },
  radius: {
    height: 12,
    width: 12,
    borderRadius: 20 / 2,
    backgroundColor: "#007AFF",
    borderWidth: 1,
    borderColor: WHITE,
    position: "absolute",
    top:20,
    elevation:3
  }
});
