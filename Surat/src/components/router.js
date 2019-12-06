import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import MainScreen from '../screens/MainScreen';
import Login from '../components/Login';
import TulisSurat from '../screens/TulisSurat';
import SuratMasuk from '../screens/SuratMasuk';
import SuratKeluar from '../screens/SuratKeluar';
import Surat from '../screens/Surat';


const router = createSwitchNavigator({
    Login : {screen: Login},
   
    HalamanAwal: {screen: MainScreen },

    TulisSurat: {screen: TulisSurat },

    SuratMasuk: {screen: SuratMasuk},

    SuratKeluar: {screen: SuratKeluar},

    Surat: {screen: Surat},

        
});

export default createAppContainer(router)
