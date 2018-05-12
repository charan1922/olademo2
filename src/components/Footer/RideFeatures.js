import React from "react";
import { View, StyleSheet } from "react-native";

const RideFeatures = (props) => {
  return (
    <View style={styles.containerStyle}>
        {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#FFFFFF",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 25
  }
});

export default RideFeatures;