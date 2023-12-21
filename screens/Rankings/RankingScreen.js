import { View, Text, ImageBackground, SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import users from '../../Data/users.json'
const RankingScreen = () => {
    const sortedUsers = users.sort((a, b) => b.point - a.point);

  return (
    
    <ImageBackground source={require('../../assets/frame.png')} resizeMode="cover" >

<View style={tw` w-full h-full items-center justify-center  px-10`}>
      
      <View style={tw`flex flex-row w-full justify-center items-end mt-[24px] h-[315px]`}>
        <View style={tw`flex flex-col justify-center items-center`} >
        <View style={tw`bg-[#C4D0FB] w-[64px] h-[64px] rounded-full `}>
            
        </View>
        <View style={styles.ranking1}>
 <Text style={tw`text-white text-[64px] font-bold `}>
            2
         </Text>
        </View>
        
        </View>
        <View style={tw`flex flex-col justify-center items-center`} >
        <View style={tw`bg-[#C4D0FB] w-[64px] h-[64px] rounded-full`}>
            
        </View>
        <View style={styles.ranking2}>
 <Text style={tw`text-white text-[64px] font-bold `}>
            1
         </Text>
        </View>
        </View>
        <View style={tw`flex flex-col justify-center items-center`}>
        <View style={tw`bg-[#C4D0FB] w-[64px] h-[64px] rounded-full`}>
            
        </View>
        <View style={styles.ranking3}>
 <Text style={tw`text-white text-[64px] font-bold `}>
            3
         </Text>
        </View>
        </View>
      </View>
      <FlatList
          style={tw`w-full mt-[24px]`}
          data={sortedUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={tw`px-[10px] py-[18px] bg-[#C4D0FB] rounded-[10px] w-[100%] mt-[10px] flex flex-row justify-between w-full items-center`}>
              <View style={tw`flex flex-row `}>
                <Text style={tw`text-white font-bold text-base`}>{index + 1}.</Text>
                <Text style={tw`text-white font-bold text-base`}> {item.name}</Text>
              </View>
              <Text style={tw`text-white font-bold text-base`}>{item.point}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    ranking1: {
      width: 105,
      height: 150,
      backgroundColor: "#88E2CE",
      fontSize: 64,
      color: 'white',
      justifyContent: 'center', 
    alignItems: 'center',   
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10

    },
    ranking2: {
        width: 105,
        height: 200,
        backgroundColor: "#FF8FA2",
        fontSize: 64,
        color: 'white',
        justifyContent: 'center', 
      alignItems: 'center',   
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
  
      },
      ranking3: {
        width: 105,
        height: 100,
        backgroundColor: "#FFE511",
        fontSize: 64,
        color: 'white',
        justifyContent: 'center', 
      alignItems: 'center',   
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10
  
      }
      
  });
  

export default RankingScreen