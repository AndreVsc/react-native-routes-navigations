import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LeftScreen from '../screens/tabs_navegation/LeftScreen';
import PrincipalScreen from '../screens/tabs_navegation/PrincipalScreen';
import RigthScreen from '../screens/tabs_navegation/RigthScreen';


const {Screen, Navigator} = createBottomTabNavigator();

export default function TabsRoutes() {

    return (
    <Navigator>
      <Screen name="Left" component={LeftScreen} />
      <Screen name="Principal" component={PrincipalScreen}/>
      <Screen name="Rigth" component={RigthScreen}/>
    </Navigator>
    )
}