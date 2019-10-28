import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HalamanAwal from './src/screens/HalamanAwal';
import BuatSuratPersonal from './src/screens/BuatSuratPersonal';


const router = createSwitchNavigator({
    HalamanAwal: { screen: HalamanAwal },
    BuatSuratPersonal: { screen: BuatSuratPersonal },
});



export default createAppContainer(router)