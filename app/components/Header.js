import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Icon name="menu" size={25} />
        </TouchableOpacity>
        <View style={styles.rideTypes}>
          <Text style={styles.rideTypeTextStyle}>Daily Rides</Text>
          <Text style={styles.rideTypeTextStyle}>Outstation</Text>
          <View style={styles.rentalsTextStyle}>
            <Text style={styles.rideTypeTextStyle}>Rentals</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="notifications" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#FFFFFF",
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  rideTypes: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    flex: 1
  },

  rideTypeTextStyle: {
    fontSize: 10
  },

  rentalsTextStyle: {
    borderRadius: 6,
    borderColor: "#E5E5E5",
    backgroundColor: "#DCE147"
  }
});
