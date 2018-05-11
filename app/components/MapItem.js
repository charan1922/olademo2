import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { MapView, } from "expo";
import { Marker, Callout } from "react-native-maps";
import { markerData, cabMarkerData } from "./MarkerData";
import CustomCallout from "./CustomCallout";

const LATITUDE = 17.4375;
const LONGITUDE = 78.4483;



export default class MapItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0.01222,
        longitudeDelta: 0.00421
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
              // title={marker.title}
              // description={marker.description}
              showsUserLocation={true}
              image={require('../../assets/pin.png')}
            >
              <Callout tooltip style={styles.customView}>
                <CustomCallout title={marker.title} description={marker.description} />
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
              image={require('../../assets/rental_topview.png')}
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
    height: 150,
  },
  plainView: {
    width: 60,
  },


});
