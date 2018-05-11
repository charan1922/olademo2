import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import RideFeatures from "./RideFeatures";
import IconText from "./IconText";
import RideButton from "./RideButton";
import moduleName from '../../assets/ola_rental.png'

export default class Footer extends Component {
  render() {
    const { newFeature, newFeatureTextStyle, cabIcon, cabIconText, rentInfo, rentInfoText, tabContainer } = styles;

    return (
      <View>
        <View style={newFeature}>
          <Text style={newFeatureTextStyle}>
            AC cabs now available at hourly packages
          </Text>
        </View>

        <View style={cabIcon}>
          <Image source={require('../../assets/ola_rental.png')} style={{ width: 32, height: 32, marginVertical: 5 }} />
          <Text style={cabIconText}>6 min away</Text>
        </View>

        <View style={rentInfo}>
          <Text style={rentInfoText}>
            Rent a cab at flexible hourly packages
          </Text>
          <Icon name="info" style={{ marginLeft: 3 }} size={15} color="#87ceeb" />
          {/* <Image source={require('../../assets/info.png')} style={{ width: 14, height: 14, marginLeft:3}} /> */}

        </View>

        <RideFeatures>
          <IconText icon="redeem" title="Hourly Packages" />
          <IconText icon="timeline" title="Multiple Stops" />
          <IconText icon="timer" title="Always Available" />
        </RideFeatures>

        <View style={tabContainer}>
          <RideButton text="RIDE NOW" />
          <View style={{ borderColor: "#565454", borderWidth: 0.5 }} />
          <RideButton text="RIDE LATER" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "#202020",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  //Ac cabs now
  newFeature: {
    backgroundColor: "#D4DB2B",
    height: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  newFeatureTextStyle: {
    fontSize: 9,
    fontWeight: "400"
  },

  //rent a cab
  rentInfo: {
    backgroundColor: "#FFFFFF",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  rentInfoText: {
    fontSize: 10,
    fontWeight: "400"
  },

  //cab Icon
  cabIcon: {
    backgroundColor: "#FFFFFF",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  cabIconText: { fontSize: 8, fontWeight: "400" }
});
