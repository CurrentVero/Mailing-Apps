import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import MainScreen from '../screens/MainScreen';
import TulisSurat from '../screens/TulisSurat';
import Login from '../components/Login';
import SuratMasuk from '../screens/SuratMasuk';
import SuratKeluar from '../screens/SuratKeluar';


const router = createSwitchNavigator({
    Login : {screen: Login},
   
    HalamanAwal: {screen: MainScreen },

    TulisSurat: {screen: TulisSurat },

    SuratMasuk: {screen: SuratMasuk},

    SuratKeluar: {screen: SuratKeluar},

        
});





export default createAppContainer(router)
