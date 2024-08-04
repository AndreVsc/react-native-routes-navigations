import React from 'react';
import { View , Text, Button} from 'react-native';

export default function SettingsScreen({navigation}:any) {
  return (
    <View>
        <Text>Settings Page</Text>
        <Button title="Go to Dev" onPress={() => navigation.navigate('Dev')} />
    </View>
  );
}