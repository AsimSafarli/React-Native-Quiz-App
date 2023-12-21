import { View, Text, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import question from '../../Data/question.json';
import { useNavigation } from "@react-navigation/native";

const QuestionScreen = () => {
  const navigation = useNavigation();

  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
      if(counter === 0){
        navigation.navigate("Home")
      }
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const handleAnswerPress = (answerId) => {
    if (question.answers.find(answer => answer.id === answerId)?.answer) {
      setSelectedAnswerId(answerId);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/frame.png")}
      resizeMode="cover"
    >
      <View style={tw`w-full h-full flex flex-col justify-between px-10`}>
        <View style={tw`mt-10 flex flex-row justify-between w-full`}>
          <Text style={tw`text-[20px] font-bold text-white`}>1/10</Text>
          <Text style={tw`text-[20px] font-bold text-white`}>00:{counter}</Text>
        </View>
        <View>
          <Text style={tw`text-white text-base`}>{question.question}</Text>
        </View>
        <View style={tw`mb-10 flex flex-col gap-[10px]`}>
          <FlatList
            data={question.answers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleAnswerPress(item.id)}
                style={tw`px-[100px] py-[18px] ${
                  selectedAnswerId === item.id && item.answer ? 'bg-[#31B057]' : 'bg-[#C4D0FB]'
                } rounded-[10px] w-[100%] mt-[10px] flex items-center`}
              >
                <View>
                  <Text style={tw`text-white text-base font-bold`}>{item.answertext}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default QuestionScreen;
