import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer';
import router from "./src/components/router";


const MyDrawerNavigator = createDrawerNavigator({
    Home: {screen: router},
},
{
    initialRouteName: 'Home',
    drawerWidth: 300,
    drawerPosition:'left',
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends Component{
    render(){
        return <AppContainer />;
    }
}