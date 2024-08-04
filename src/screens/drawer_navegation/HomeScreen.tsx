import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function HomeScreen({navigation}:any) {
  return (
    <View style={styles.container}>
        <Text>
            Welcome Home Page !
        </Text>
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });