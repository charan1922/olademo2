/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapItem from "./app/components/MapItem";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <MapItem />
        </View>
        <Footer />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1
  }
});
