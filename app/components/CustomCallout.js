import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons";
export default CustomCallout = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bubble}>
        <View style={styles.wrapper}>
          <View style={{ backgroundColor: "green", height: 5, width: 5, borderRadius: 50, }} />
        </View>
        <View styles={{ flex: 1, }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc} numberOfLines={1}>{description}</Text>
        </View>
        <View style={styles.wrapper}>
          <Image source={require('../../assets/fav.png')} style={{ height: 16, width: 16, }} />
        </View>
      </View>
      <View style={styles.arrowBorder} />
      <View style={styles.arrow} />
      {/* <Text>HI</Text> */}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  bubble: {
    flexDirection: 'row',
    justifyContent: "space-around",
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    borderRadius: 6,
  },
  wrapper: { justifyContent: 'center', alignItems: "center", marginLeft: 10, marginRight: 10 },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 13,
    borderColor: 'transparent',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  title: {
    fontSize: 8,
    fontWeight: '200',
    color: "#565252"
  },
  desc: {
    fontSize: 10,
    fontWeight: '400'
  }
});
