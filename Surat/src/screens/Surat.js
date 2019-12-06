import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from 'react-navigation-drawer';

export default class SuratMasuk extends Component {
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.header}>
  
         
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}
                onPress={() => navigate('SuratMasuk')}>
                <MaterialCommunityIconsIcon name="chevron-double-left" style={styles.icon} />
              </TouchableOpacity>
             
   
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
                    <Text style={styles.titleStyle}>Kode Penayangan Iklan</Text>

                    <View style={styles.from}>

                      <Text style={styles.dariStyle}>Dari :</Text>
                      <Text style={styles.subjectStyle}>Google Admob</Text>
                      <Text style={styles.dateStyle}>3 Oktober</Text>
                      
                    </View>
                    <View style={styles.subtitleStyle}>
                      <Text>   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin 
                        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>
                    </View>
                   
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
    flexDirection: "row",
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
    alignItems: "center",
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
    paddingTop: 15,
    paddingBottom: 30,
    fontSize: 22,
    fontFamily: "roboto-regular",
    alignSelf: 'center',
  },
  from: {
    flexDirection: "row",
    marginRight: 9,
    marginLeft: 9,
    paddingBottom: 10, 
    justifyContent: "space-between", 
},
  dariStyle: {
    color: "#c9d1d3",
    fontSize: 16,
    fontFamily: "roboto-regular",
    paddingVertical: 10,
    
  },
  subjectStyle: {
    color: "#000",
    fontSize: 16,
    fontFamily: "roboto-regular",
    paddingVertical: 10,
    marginLeft: -70,
  },
  dateStyle: {
    color: "#000",
    marginLeft: 40,
    fontSize: 12,
    fontFamily: "roboto-regular",
    paddingVertical: 12,
  },
  subtitleStyle: {
    fontSize: 16,
    marginRight: 9,
    fontFamily: "roboto-regular",
    lineHeight: 18,
    paddingVertical: 10,
  },
  
});
