import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../screens/stacks_navegation/GalleryScreen';
import HomeScreen from '../screens/stacks_navegation/HomeScreen';
import DevScreen from '../screens/stacks_navegation/DevScreen';
import SettingsScreen from '../screens/stacks_navegation/SettingsScreen';
import ProfileScreen from '../screens/stacks_navegation/ProfileScreen';

const {Screen, Navigator} = createStackNavigator();

export default function StackRoutes() {

    return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} options={{ title:''}}/>
      <Screen name="Gallery" component={GalleryScreen} options={{title:''}} />
      <Screen name="Profile" component={ProfileScreen} options={{title:''}} />
      <Screen name="Settings" component={SettingsScreen} options={{title:''}} />
      <Screen name="Dev" component={DevScreen} options={{title:''}} />
    </Navigator>
    )
}