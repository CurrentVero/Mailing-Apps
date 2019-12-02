import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, ImageBackground, } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from 'react-navigation-drawer';




export default class MainScreen extends Component {
  
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
 
          </View>
          <View style={styles.buttonRowFiller} />
          <View style={styles.rect2}>
  
            <TouchableOpacity style={styles.button3}>
            <ImageBackground
              source={require("../assets/images/iqbal.png")}
              resizeMode="contain"
              style={styles.image}>
            </ImageBackground>
            </TouchableOpacity>
            <View style={styles.button4}>
            <Text style={styles.Name}>Hi,</Text>
            <Text style={styles.Name}>Current Vero</Text>
            </View>
          </View>
        </View>

        <Text style={styles.lineWord}>Silahkan Pilih Menu yang Tersedia</Text>


        <View style={styles.maincontent}>
        
        <View style={styles.buatsurat}>
        <TouchableOpacity style={styles.card}
        onPress={() => navigate('TulisSurat')}>
            <View style={styles.cardBody}>
                <View style={styles.bodyContent}>
                  <Image
                    source={require("../assets/images/tulisicon.png")}
                    resizeMode="contain"
                    style={styles.imageZ}
                    />
                </View>
            </View>
        </TouchableOpacity>
        <Text style={styles.Username}>Buat Surat</Text>
        </View>

        <View style={styles.suratmasuk}>
        <TouchableOpacity style={styles.card}
        onPress={() => navigate('SuratMasuk')}>
            <View style={styles.cardBody}>
                <View style={styles.bodyContent}>
                  <Image
                    source={require("../assets/images/masukicon.png")}
                    resizeMode="contain"
                    style={styles.imageZ}
                    />
                </View>
            </View>
        </TouchableOpacity>
        <Text style={styles.Username}>Surat Masuk</Text>
        </View>

        <View style={styles.suratkeluar}>
        <TouchableOpacity style={styles.card}
        onPress={() => navigate('SuratKeluar')}>
            <View style={styles.cardBody}>
                <View style={styles.bodyContent}>
                  <Image
                    source={require("../assets/images/keluaricon.png")}
                    resizeMode="contain"
                    style={styles.imageZ}
                    />
                </View>
            </View>
        </TouchableOpacity>
        <Text style={styles.Username}>Surat Keluar</Text>
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
    width: 40,
    height: 40,
    alignSelf: "center"
  },
  imageZ: {
    width: 50,
    height: 50,
    alignSelf: "center"
  },
  Username: {
    color: "#FFBA7A",
    fontSize: 12,
    fontFamily: "ubuntu-700",
    marginTop: 16,
    alignSelf: "center"
  },
  Name: {
    color: "#121212",
    fontSize: 11,
    fontFamily: "ubuntu-700",
    opacity: 0.6
  },
  lineWord: {
    color: "#121212",
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 25,
    fontFamily: "ubuntu-700",
    opacity: 0.6
  },

  maincontent: {
      flexDirection: 'row',
      alignSelf: "center",
      
  },

  buatsurat:{
    margin: 20,
  },
  suratmasuk:{
      margin: 20,
  },
  suratkeluar:{
      margin: 20,
  },


  card: {
    backgroundColor: "#FFF",
    marginTop: 16,
    width: 90,
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 10,
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

  selectInput: {
    width: 130,
    marginTop: -13,
    justifyContent: 'center',
},

});

