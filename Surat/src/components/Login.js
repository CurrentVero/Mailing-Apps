import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';

export default class Login extends Component {

    state = { NIM: "", password: "" }

    checkLogin() {
        console.warn(NIM, password)
        const { NIM, password } = this.state
        if (NIM == 'admin' && password == 'admin') {
            this.props.navigation.navigate('HalamanAwal')
        } else {
            Alert.alert('Error', 'NIM/Password incorrect', [{
                text: 'Okay'
            }])
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logoText}>SukaApps</Text>
                <Image style={styles.image}
                    source={require('../assets/images/logo-uin.png')}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="NIM"
                    placeholderTextColor="#808080"
                    selectionColor="#1c313a"
                    keyboardType="email-address"
                    onChangeText={text => this.setState({ NIM: text })}
                    onSubmitEditing={() => this.password.focus()}
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#1c313a"
                    onChangeText={text => this.setState({ password: text })}
                    ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={_ => this.checkLogin()} >Login{this.props.type}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoText: {
        marginVertical: 15,
        marginBottom: 30,
        fontSize: 32,
        color: '#1c313a',
        fontWeight: 'bold'
    },
    inputBox: {
        width: 200,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 4,
        fontSize: 12,
        marginVertical: 10,
        borderWidth: 1
    },
    button: {
        width: 200,
        backgroundColor: '#444444',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 10,
        marginBottom: 40,
    },
    buttonText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    image: {
        width: 150, 
        height: 180, 
        marginBottom: 40
    }
});