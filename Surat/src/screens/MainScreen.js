import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";






export default class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.button3Row}>
          
          <TouchableOpacity style={styles.button3}>
            <MaterialCommunityIconsIcon name="menu-open" style={styles.MenuIcon} />
          </TouchableOpacity>
          <View style={styles.button3Filler} />
          
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
        <Image
          source={require("../assets/images/iqbal.png")}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.Username}>Current Vero</Text>
        <Text style={styles.NIM}>17106050048</Text>
        <Text style={styles.SuratMasuk}>Surat Masuk</Text>
        <View style={styles.SuratPersonal}>
          <View style={[styles.MaterialCard, this.props.style]}>
              <TouchableOpacity>
                <Text style={styles.textMaterial}>Surat Personal</Text>
              </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.SuratKeluar}>Surat Keluar</Text>
        <View style={styles.SuratPersonal2}>
          <View style={[styles.MaterialCard, this.props.style]}>
              <TouchableOpacity>
                <Text style={styles.textMaterial}>Surat Personal</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.BuatSuratPersonal} >
          <View style={[styles.MaterialCard, this.props.style]}>
              <TouchableOpacity> 
                <Text style={styles.textMaterial}
                 onPress={() => navigate('BuatSuratPersonal')}>Buat Surat Personal</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ArsipSuratPersonal}>
          <View style={[styles.MaterialCard, this.props.style]}>
              <TouchableOpacity>
                <Text style={styles.textMaterial}>Arsip Surat Personal</Text>
              </TouchableOpacity>
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
  button3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  rect: {
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
    fontSize: 24
  },
  button2: {
    padding: 11
  },
  TitiktigaIcon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 26,
    marginRight: 6,
    backgroundColor: "#d62196"
  },
  image: {
    width: 111,
    height: 111,
    marginTop: 12,
    alignSelf: "center"
  },
  Username: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "ubuntu-700",
    marginTop: 16,
    alignSelf: "center"
  },
  NIM: {
    width: 169,
    height: 14,
    color: "#121212",
    fontSize: 14,
    fontFamily: "ubuntu-regular",
    textAlign: "center",
    marginTop: 2,
    alignSelf: "center"
  },
  SuratMasuk: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "ubuntu-700",
    marginTop: 34,
    alignSelf: "center"
  },
  SuratPersonal: {
    width: 359,
    height: 46,
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
    height: 46,
    marginTop: 23,
    alignSelf: "center"
  },
  BuatSuratPersonal: {
    width: 359,
    height: 46,
    marginTop: 18,
    alignSelf: "center"
  },
  ArsipSuratPersonal: {
    width: 359,
    height: 46,
    marginTop: 18,
    alignSelf: "center"
  },
  MaterialCard: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 8,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  textMaterial: {
    height: 32,
    color: "#121212",
    fontSize: 14,
    fontFamily: "ubuntu-700",
    marginTop: 14,
    marginLeft: 19
  }
});

