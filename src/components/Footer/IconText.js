import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { GREEN, WHITE, GREY , TEXT_GREY } from "../../utils/colors.js";

const IconText = ({ icon, title }) => {
  return (
    <View style={styles.containerStyle}>
      <Icon name={icon} size={20} color={GREY} />
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
    color:TEXT_GREY,
    fontSize: 7,
    maxWidth: 40,
    marginLeft: 5
  }
});

export default IconText;
