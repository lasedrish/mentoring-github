import React from 'react';
import { Image, Text, View } from 'react-native';
import kitty from './assets/kitty.jpg'

const Cat = () => {
  return (
    <View>
      <Image source={kitty} style={{ width: 305, height: 159 }} />
      <Text>Hello, I am a cat</Text>

    </View>
  );
}

export default Cat;