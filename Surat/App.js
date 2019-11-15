import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import BuatSuratPersonal from './src/screens/BuatSuratPersonal';
import Header from './src/components/header';


const router = createSwitchNavigator({
   
    HalamanAwal: { 
        screen: MainScreen },

    BuatSuratPersonal: { 
        screen: BuatSuratPersonal },

    Header : { 
        screen: Header},
        
});



export default createAppContainer(router)