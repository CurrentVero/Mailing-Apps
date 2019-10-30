import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './src/screens/MainScreen';
import BuatSuratPersonal from './src/screens/BuatSuratPersonal';
import Header from './src/components/header';


const router = createSwitchNavigator({
    Header : { screen: Header},
    HalamanAwal: { screen: MainScreen },
    BuatSuratPersonal: { screen: BuatSuratPersonal },
});



export default createAppContainer(router)