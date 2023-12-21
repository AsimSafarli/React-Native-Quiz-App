import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import tw from 'twrnc'

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/frame.png')} resizeMode="cover" >
    <View style={tw` w-full h-full items-center justify-center  `}>
      <Text style={tw` text-black font-bold text-white`}  onPress={() => navigation.navigate('Question')}>Questions</Text>
      <Text style={tw` text-black font-bold text-white`}  onPress={() => navigation.navigate('Ranking')}>Rankings</Text>

      <StatusBar backgroundColor='transparent' style="light" />
      </View>
      </ImageBackground>
  )
}

export default HomeScreen