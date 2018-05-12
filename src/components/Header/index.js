import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { LIGHT_GREEN , WHITE , LIGHT_GREY  } from '../../utils/colors.js';

export default class Header extends Component {
  render() {
    const {
      rideTextStyle,
      container,
      rentalsStyle,
      rideTypes,
      rentalsTextStyle
    } = styles;

    return (
      <View style={container}>
        <TouchableOpacity>
          <Icon name="menu" size={25} />
        </TouchableOpacity>
        <View style={rideTypes}>
          <Text style={rideTextStyle}>Daily Rides</Text>
          <Text style={rideTextStyle}>Outstation</Text>
          <View style={rentalsStyle}>
            <Text style={rentalsTextStyle}>Rentals</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View>
            <Icon name="notifications" size={25} />
          </View>
          
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: WHITE,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  rideTypes: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1
  },

  rideTextStyle: {
    fontSize: 10
  },

  rentalsTextStyle: {
    fontSize: 10,
    fontWeight: "400"
  },
  rentalsStyle: {
    borderRadius: 50,
    borderWidth:0.5,
    borderColor: LIGHT_GREY,
    backgroundColor: LIGHT_GREEN,
    padding: 7,
  }
});
