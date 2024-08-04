import { createDrawerNavigator } from '@react-navigation/drawer';
import GalleryScreen from '../screens/drawer_navegation/GalleryScreen';
import HomeScreen from '../screens/drawer_navegation/HomeScreen';
import DevScreen from '../screens/drawer_navegation/DevScreen';
import SettingsScreen from '../screens/drawer_navegation/SettingsScreen';
import ProfileScreen from '../screens/drawer_navegation/ProfileScreen';

const {Screen, Navigator} = createDrawerNavigator();

export default function DrawerRoutes() {

    return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen}/>
      <Screen name="Gallery" component={GalleryScreen}/>
      <Screen name="Profile" component={ProfileScreen}/>
      <Screen name="Settings" component={SettingsScreen}/>
      <Screen name="Dev" component={DevScreen}/>
    </Navigator>
    )
} 