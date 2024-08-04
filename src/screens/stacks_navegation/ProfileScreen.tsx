import React from 'react';
import { View , Text, Button} from 'react-native';

export default function ProfileScreen({navigation}:any) {
  return (
    <View>
        <Text>Profile Page</Text>
        <Button title="Go to Galler y" onPress={() => navigation.navigate('Gallery')} />
    </View>
  );
}