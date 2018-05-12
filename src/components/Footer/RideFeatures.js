import React from "react";
import { View, StyleSheet } from "react-native";
import { WHITE   } from '../../utils/colors.js';

const RideFeatures = (props) => {
  return (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: WHITE,
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 25
  }
});

export default RideFeatures;