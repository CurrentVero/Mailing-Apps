import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {View, Text, StyleSheet, Image} from 'react-native';
import router from "./src/components/router";
import learning from "./src/components/learning";
import header from "./src/components/header";
import presensi from "./src/components/presensi";
import chat from "./src/components/chat";

import {Container, Content, Header, Body, Icon} from 'native-base';


const CustomDrawerContentComponent = (props) =>(
    <Container>
        <Header style = {styles.header}>
            <Body>
                <Image
                style = {styles.drawerImage}
                source={require('./src/assets/images/images.jpg')}/>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)




const MyDrawerNavigator = createDrawerNavigator({
    
    Learning: {screen: learning},
    Presensi: {screen:presensi},
    Surat: {screen: router},
    Chat: {screen: chat},
    Logout: {screen: header},

},
{
    initialRouteName: 'Surat',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: 300,
    drawerPosition:'left',
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends Component{
    render(){
        return <AppContainer />;
    }
}
styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerImage:{
        height: 100,
        width: 100,
        borderRadius: 75,
        marginLeft: 80,
    },
    header:{
        height: 150,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#FFF',
        flexDirection: "row",        
        elevation: 4,  
        shadowOffset: {height: 2, width: -2},
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        overflow: "hidden"
    }
})