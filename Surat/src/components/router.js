import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import MainScreen from '../screens/MainScreen';
import BuatSuratPersonal from '../screens/BuatSuratPersonal';
import Header from '../components/header';


const router = createSwitchNavigator({
   
    HalamanAwal: {screen: MainScreen },

    BuatSuratPersonal: {screen: BuatSuratPersonal },

    Header : {screen: Header},
        
});



export default createAppContainer(router)