/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MapItem from "./app/components/MapItem";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.navBar}>
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

       <View style={styles.body}>
       <MapItem/>
       </View>



          <View style={styles.newFeature}> 
              <Text style={styles.newFeatureTextStyle}>AC cabs now available at hourly packages</Text>
          </View>

              <View style={styles.cabIcon}> 
               <Icon name="subway"  size={30}/>
               <Text style={styles.cabIconText}>6 min away</Text>
              </View>

            <View style={styles.rentInfo}> 
              <Text style={styles.rentInfoText}>Rent a cab at flexible hourly packages</Text>
              <Icon name="info" style={{ marginLeft: 10}} size={15}/>
           </View>

          <View style={styles.rideFeature}>
              <View style={styles.rideFeatureItem}>
              <Icon name="timer" size={20}/>
              <Text style={styles.rideFeatureTitle}>Hourly Packages</Text>
            </View >
            <View style={styles.rideFeatureItem}> 
            <Icon name="timeline" size={20}/>
            <Text style={styles.rideFeatureTitle}>Multiple Stops</Text>
            </View>
            <View style={styles.rideFeatureItem}>
            <Icon name="timer" size={20}/>
            <Text style={styles.rideFeatureTitle}> Always Available</Text>
            </View>
          </View>

         <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem}>
           <Text style={styles.tabTitle}>RIDE LATER</Text>
            </TouchableOpacity>
            <View style={{borderColor: '#565454' , borderWidth:0.5  }}/>
            <TouchableOpacity style={styles.tabItem}>
           <Text style={styles.tabTitle}>RIDE NOW</Text>
            </TouchableOpacity>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
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
    flex:1
  },

  rideTypeTextStyle:{
    fontSize: 10
    },

    rentalsTextStyle:{
      borderRadius: 6,
      borderColor: '#E5E5E5',
      backgroundColor: '#DCE147'
      },

  body:{
    flex:1
  },
  tabBar:{
    backgroundColor: "#202020",
    height:50,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  tabItem:{
   alignItems: 'center', 
   justifyContent: 'center' 
  },
  tabTitle:{
    fontSize: 11,
    color:'#C2CE44'
  },

  //Ac cabs now
  newFeature:{
    backgroundColor: '#D4DB2B',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  newFeatureTextStyle:{
    fontSize: 10,
    fontWeight: '400'
  },

  //Hourly packages
rideFeature:{
  backgroundColor: '#FFFFFF',
  height: 45,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingHorizontal: 25
},

  rideFeatureItem:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rideFeatureTitle:{
    fontSize: 7,
    maxWidth:40,
    marginLeft: 5
   },



   //rent a cab
   rentInfo:{
      backgroundColor: '#FFFFFF',
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
   },
   rentInfoText:{
      fontSize: 10 ,
      fontWeight: '600'
   },

   //cab Icon
   cabIcon:{backgroundColor: '#FFFFFF',
      height: 50,
    justifyContent: 'center',
    alignItems: 'center'
},
   cabIconText:{fontSize: 8 , fontWeight: '500'}
});
