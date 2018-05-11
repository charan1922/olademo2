import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import RideFeatures from "./RideFeatures";
import IconText from "./IconText";
import RideButton from "./RideButton";

export default class Footer extends Component {
  render() {
    const {
      rideTextStyle,
      container,
      rentalsStyle,
      rideTypes,
      rentalsTextStyle
    } = styles;

    return (
      <View>
        <View style={styles.newFeature}>
          <Text style={styles.newFeatureTextStyle}>
            AC cabs now available at hourly packages
          </Text>
        </View>

        <View style={styles.cabIcon}>
          <Icon name="subway" size={30} />
          <Text style={styles.cabIconText}>6 min away</Text>
        </View>

        <View style={styles.rentInfo}>
          <Text style={styles.rentInfoText}>
            Rent a cab at flexible hourly packages
          </Text>
          <Icon name="info" style={{ marginLeft: 10 }} size={15} />
        </View>

        <RideFeatures>
          <IconText icon="timer" title="Hourly Packages" />
          <IconText icon="timeline" title="Multiple Stops" />
          <IconText icon="timer" title="Always Available" />
        </RideFeatures>

        <View style={styles.tabBar}>
          <RideButton text="RIDE NOW" />
          <View style={{ borderColor: "#565454", borderWidth: 0.5 }} />
          <RideButton text="RIDE LATER" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#202020",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  //Ac cabs now
  newFeature: {
    backgroundColor: "#D4DB2B",
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  newFeatureTextStyle: {
    fontSize: 10,
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
    fontWeight: "600"
  },

  //cab Icon
  cabIcon: {
    backgroundColor: "#FFFFFF",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  cabIconText: { fontSize: 8, fontWeight: "500" }
});
