import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import DrawerRoutes from './src/routes/drawer.routes';

export default function App() {
  return  (
    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  );
}
