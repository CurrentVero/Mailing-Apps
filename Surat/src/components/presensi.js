import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from 'react-navigation-drawer';



export default class Presensi extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>

       
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <MaterialCommunityIconsIcon name="menu-open" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.text3}>Presensi</Text>
 
          </View>
          <View style={styles.buttonRowFiller} />
          <View style={styles.rect2}>
  
            <TouchableOpacity style={styles.button3}>
              <MaterialCommunityIconsIcon name="refresh" style={styles.icon3} />
            </TouchableOpacity>
            <View style={styles.button4}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.icon4}
              />
            </View>
          </View>
        </View>
        <Image
          source={require("../assets/images/teepublic6.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.text}>Coming Soon</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button3: {
    backgroundColor: "rgba(251,251,251,1)",
    padding: 11
  },
  MenuIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
 
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  rect: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    marginLeft: 7,
    padding: 11
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
 
  icon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  button2: {
    padding: 11
  },
  button3: {
    padding: 7
  },
  button4: {
    marginRight: 7,
    padding: 9
  },
  icon4: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  rect2: {
    flexDirection: "row",
    alignItems: "center"
  },
  ReloadIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  
  TitiktigaIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  buttonRow: {
    height: 46,
    flexDirection: "row"
  },
  header: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',  
    elevation: 4,  
    shadowOffset: {height: 2, width: -2},
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  image: {
    width: 311,
    height: 311,
    alignSelf: "center",    
  },
  text: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "ubuntu-700",
    marginTop: 16,
    alignSelf: "center"
  },
  text3: {
    color: "rgba(7,7,7,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 34,
    marginTop: 12,
  },
});

