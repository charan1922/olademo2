import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { LIGHT_GREEN   } from '../../utils/colors.js';


const RideButton = ({ text }) => {
  return (
        <TouchableOpacity style={styles.Item}>
          <Text style={styles.Title}>{text}</Text>
        </TouchableOpacity>
  );
};
export default RideButton;

const styles = StyleSheet.create({

  Item: {
    alignItems: "center",
    justifyContent: "center"
  },
  Title: {
    fontSize: 11,
    color: LIGHT_GREEN
  }
});
