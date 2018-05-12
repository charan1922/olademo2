import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const IconText = ({ icon, title }) => {
  return (
    <View style={styles.containerStyle}>
      <Icon name={icon} size={20} />
      <Text style={styles.titleTextStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleTextStyle: {
    fontSize: 7,
    maxWidth: 40,
    marginLeft: 5
  }
});

export default IconText;
