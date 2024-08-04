import React from 'react';
import { View, Text, Button } from 'react-native';

export default function GalleryScreen({navigation}:any) {
  return (
    <View>
        <Text>
            Welcome Gallery Page !
        </Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}