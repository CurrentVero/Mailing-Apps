import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import BuatSuratPersonal from './src/screens/BuatSuratPersonal';


const router = createSwitchNavigator({
    HalamanAwal: { screen: MainScreen },
    BuatSuratPersonal: { screen: BuatSuratPersonal },
});



export default createAppContainer(router)