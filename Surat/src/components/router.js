import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import MainScreen from '../screens/MainScreen';
import TulisSurat from '../screens/TulisSurat';
import Header from '../components/header';
import SuratMasuk from '../screens/SuratMasuk';
import SuratKeluar from '../screens/SuratKeluar';


const router = createSwitchNavigator({
   
    HalamanAwal: {screen: MainScreen },

    TulisSurat: {screen: TulisSurat },

    SuratMasuk: {screen: SuratMasuk},

    SuratKeluar: {screen: SuratKeluar},

    Header : {screen: Header},
        
});





export default createAppContainer(router)
