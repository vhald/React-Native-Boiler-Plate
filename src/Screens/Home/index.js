import {View, Text, Button} from 'react-native';
import React from 'react';

const Home = ({navigation, routes}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="details page"></Button>
    </View>
  );
};

export default Home;
