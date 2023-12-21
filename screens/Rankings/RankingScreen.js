import { View, Text, ImageBackground, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const RankingScreen = () => {
  return (
    <ImageBackground source={require('../../assets/frame.png')} resizeMode="cover" >

<View style={tw` w-full h-full items-center justify-center  px-10`}>
      
      <View></View>
      <ScrollView style={tw`w-full`} >
       

      </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default RankingScreen