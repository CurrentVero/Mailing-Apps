import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainScreen from './App';
import BuatSuratPersonal from './src/screens/BuatSuratPersonal';


const router = createSwitchNavigator({
    MainScreen: { screen: MainScreen },
    BuatSuratPersonal: { screen: BuatSuratPersonal },
});



export default createAppContainer(router)