import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


export default class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>

       
<View style={styles.buttonRow}>
  <TouchableOpacity style={styles.button}
  onPress={() => navigate('HalamanAwal')}>
    <MaterialCommunityIconsIcon name="menu-open" style={styles.icon} />
  </TouchableOpacity>
 
</View>
<View style={styles.buttonRowFiller} />
<View style={styles.rect2}>
  
  <TouchableOpacity style={styles.button3}>
    <MaterialCommunityIconsIcon name="refresh" style={styles.icon3} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.button4}>
    <MaterialCommunityIconsIcon
      name="dots-vertical"
      style={styles.icon4}
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
        <View style={styles.SuratPersonal}>
          <View style={[styles.MaterialCard, this.props.style]}>
              <TouchableOpacity>
                <Text style={styles.textMaterial}>Surat Personal</Text>
              </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.SuratKeluar}>Surat Keluar</Text>
        
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
    width: 111,
    height: 111,
    marginTop: 32,
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
    marginTop: 5  4,
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

