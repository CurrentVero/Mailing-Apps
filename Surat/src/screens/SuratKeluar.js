import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from 'react-navigation-drawer';



export default class SuratKeluar extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>

       
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}
              onPress={() => navigate('HalamanAwal')}>
              <MaterialCommunityIconsIcon name="chevron-double-left" style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Surat Keluar</Text>
 
          </View>
          <View style={styles.buttonRowFiller} />
          <View style={styles.rect2}>
  
            <TouchableOpacity style={styles.button3}>
              <MaterialCommunityIconsIcon name="delete-empty" style={styles.icon3} />
            </TouchableOpacity>
            <View style={styles.button4}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.icon4}
              />
            </View>
          </View>
        </View>
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <View style={styles.bodyContent}>
                    <Text style={styles.titleStyle}>Google Admob</Text>
                    <Text style={styles.subjectStyle}>Kode Penayangan Iklan</Text>
                    <Text style={styles.subtitleStyle}>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer...</Text>
                    <Text style={styles.dateStyle}>21 Oktober</Text>
                </View>
            </View>
        </View>
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <View style={styles.bodyContent}>
                    <Text style={styles.titleStyle}>99 Designs</Text>
                    <Text style={styles.subjectStyle}>Request Payout</Text>
                    <Text style={styles.subtitleStyle}>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer...</Text>
                    <Text style={styles.dateStyle}>16 Oktober</Text>
                </View>
            </View>
        </View>
        <View style={styles.card}>
            <View style={styles.cardBody}>
                <View style={styles.bodyContent}>
                    <Text style={styles.titleStyle}>Teepublic</Text>
                    <Text style={styles.subjectStyle}>You made a sell</Text>
                    <Text style={styles.subtitleStyle}>Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer...</Text>
                    <Text style={styles.dateStyle}>3 Oktober</Text>
                </View>
            </View>
        </View>
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
  textHeader: {
    color: "rgba(7,7,7,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 34,
    marginTop: 12,
  },
  card: {
    backgroundColor: "#FFF",
    marginTop: 16,
    alignSelf: 'center',
    width: 390,
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 14,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bodyContent: {
    flex: 1,
    padding: 12,
    paddingLeft: 16,
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 3,
    fontSize: 22,
    fontFamily: "roboto-regular"
  },
  subjectStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    paddingBottom: 12,
  },
  dateStyle: {
    color: "#000",
    paddingBottom: 10,
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
});

