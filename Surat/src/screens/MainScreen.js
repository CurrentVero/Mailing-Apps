import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialCard123 from "../components/MaterialCard123";

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button3Row}>
          <TouchableOpacity style={styles.button3}>
            <MaterialCommunityIconsIcon name="menu" style={styles.MenuIcon} />
          </TouchableOpacity>
          <View style={styles.button3Filler} />
          <View style={styles.rect}>
            <TouchableOpacity style={styles.button}>
              <MaterialCommunityIconsIcon
                name="refresh"
                style={styles.ReloadIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <MaterialCommunityIconsIcon
                name="dots-vertical"
                style={styles.TitiktigaIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require("../assets/images/iqbal.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.Username}>Current Vero</Text>
        <Text style={styles.NIM}>17106050048</Text>
        <Text style={styles.SuratMasuk}>Surat Masuk</Text>
        <MaterialCard123 style={styles.SuratPersonal} />
        <Text style={styles.SuratKeluar}>Surat Keluar</Text>
        <MaterialCard123 style={styles.SuratPersonal2} />
        <MaterialCard123 style={styles.BuatSuratPersonal} />
        <MaterialCard123 style={styles.ArsipSuratPersonal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button3: {
    backgroundColor: "rgba(251,251,251,1)",
    padding: 11
  },
  MenuIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontPostscriptName: "roboto-regular",
    fontSize: 24
  },
  button3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    padding: 11
  },
  ReloadIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontPostscriptName: "roboto-regular",
    fontSize: 24
  },
  button2: {
    backgroundColor: "rgba(255,255,255,1)",
    padding: 11
  },
  TitiktigaIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontPostscriptName: "roboto-regular",
    fontSize: 24
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 38,
    marginLeft: 26,
    marginRight: 6
  },
  image: {
    width: 131,
    height: 131,
    marginTop: 14,
    marginLeft: 125
  },
  Username: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "ubuntu-700",
    marginTop: 33,
    marginLeft: 131
  },
  NIM: {
    width: 169,
    height: 19,
    color: "#121212",
    fontSize: 14,
    fontFamily: "ubuntu-regular",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 103
  },
  SuratMasuk: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "ubuntu-700",
    marginTop: 44,
    marginLeft: 148
  },
  SuratPersonal: {
    width: 359,
    height: 36,
    marginTop: 19,
    alignSelf: "center"
  },
  SuratKeluar: {
    color: "rgba(0,0,0,0.87)",
    fontSize: 14,
    fontFamily: "ubuntu-700",
    marginTop: 26,
    alignSelf: "center"
  },
  SuratPersonal2: {
    width: 359,
    height: 36,
    marginTop: 23,
    alignSelf: "center"
  },
  BuatSuratPersonal: {
    width: 359,
    height: 36,
    marginTop: 18,
    alignSelf: "center"
  },
  ArsipSuratPersonal: {
    width: 359,
    height: 36,
    marginTop: 18,
    alignSelf: "center"
  }
});
