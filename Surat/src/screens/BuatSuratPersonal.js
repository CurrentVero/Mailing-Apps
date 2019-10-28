import React, { Component } from "react";
import {StyleSheet, View, TouchableOpacity, Text, TextInput} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


export default class BuatSuratPersonal extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.buttonRowRowColumn}>
          <View style={styles.buttonRowRow}>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}
              onPress={() => navigate('BuatSuratPersonal')}>
                <MaterialCommunityIconsIcon name="menu-open" style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.text3}>Buat Surat Personal</Text>
            </View>
            <View style={styles.buttonRowFiller} />
            <View style={styles.rect2}>
              <TouchableOpacity style={styles.button2}>
                <MaterialCommunityIconsIcon
                  name="attachment"
                  style={styles.icon2}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button3}>
                <MaterialCommunityIconsIcon name="send" style={styles.icon3} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button4}>
                <MaterialCommunityIconsIcon
                  name="dots-vertical"
                  style={styles.icon4}
                />
              </TouchableOpacity>
            </View>
          </View>



          <View style={[styles.material, this.props.style]}>
              <View style={styles.textRow} >
                <Text style={styles.text}>Dari</Text>
            <TextInput
             placeholder="youremail@gmail.com"
              maxLength={40}
              selectTextOnFocus={false}
              style={styles.textInput}
              />
            </View>
          </View>



          <View style={[styles.material, this.props.style]}>
              <View style={styles.textRow}>
                <Text style={styles.text}>Kepada</Text>
            <TextInput
             placeholder="senderemail@gmail.com"
              maxLength={40}
              selectTextOnFocus={false}
              style={styles.textInput}
              />
            </View>
          </View>



          <View style={[styles.material, this.props.style]}>
              <View style={styles.textRow}>
                <TextInput
                  placeholder="Subjeck"
                  maxLength={90}
                  selectTextOnFocus={false}
                  style={styles.textInputAA}
              />
            </View>
          </View>


          <TextInput
            placeholder="Tulis Surat"
            placeholderTextColor="rgba(155,155,155,1)"
            maxLength={200}
            numberOfLines={60}
            clearTextOnFocus={true}
            dataDetector="all"
            style={styles.textInput2}
          />
        </View>
        <View style={styles.buttonRowRowColumnFiller} />
        <View style={styles.rect3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    padding: 11
  },
  icon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  text3: {
    color: "rgba(7,7,7,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    marginLeft: 14,
    marginTop: 12
  },
  buttonRow: {
    height: 46,
    flexDirection: "row"
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rect2: {
    flexDirection: "row",
    alignItems: "center"
  },
  button2: {
    padding: 11
  },
  icon2: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  button3: {
    padding: 9
  },
  icon3: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  button4: {
    padding: 9
  },
  icon4: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontFamily: "Roboto",
    fontSize: 24
  },
  buttonRowRow: {
    height: 46,
    flexDirection: "row",
    marginLeft: 26,
    marginRight: 5,
    backgroundColor: "#d62196"
  },
  textInput2: {
    width: 66,
    height: 14,
    color: "#121212",
    fontFamily: "roboto-regular",
    marginTop: 22,
    marginLeft: 16
  },
  buttonRowRowColumn: {
    marginTop: 18
  },
  buttonRowRowColumnFiller: {
    flex: 1
  },
  rect3: {
    marginBottom: 19,
    marginLeft: 74
  },
  material: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    marginLeft: 15,
    width: 395,
    height: 43,
    marginTop: 12
  },
  text: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  textInput: {
    width: 139,
    height: 14,
    color: "#121212",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 26,
    marginTop: 1
  },
  textInputAA: {
    width: 139,
    height: 14,
    color: "#121212",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 1
  },
  textRow: {
    height: 16,
    flexDirection: "row",
    flex: 1,
    marginRight: 163,
    marginLeft: 18,
    marginTop: 13
  }
});
