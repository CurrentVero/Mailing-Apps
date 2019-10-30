import React, { Component } from "react";
import {StyleSheet, View, TouchableOpacity, Text, TextInput} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Header extends Component{
    render(){
        return (
        <View style={styles.container}>
            <View style={styles.Row}>
          
                <TouchableOpacity>
                    <MaterialCommunityIconsIcon 
                    name="menu-open" />
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <MaterialCommunityIconsIcon
                         name="refresh"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIconsIcon
                        name="dots-vertical" />
                </TouchableOpacity>
         
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    Row: {
        height: 30,
        width: 30,
        backgroundColor: "#121212",
        padding: 11
    }
  });
  