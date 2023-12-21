import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/HomeScreen';
import RankingScreen from './screens/Rankings/RankingScreen';
import QuestionScreen from './screens/Questions/QuestionScreen';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store';
export default function App() {
   const  Stack = createNativeStackNavigator()
  return (
    <Provider store={Store}>

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  
      name='Home' 
      component={HomeScreen} 
      options={{
        headerShown:false
      }}
      />
         <Stack.Screen  
      name='Ranking' 
      component={RankingScreen} 
      options={{
        headerStyle: {
            backgroundColor: '#6A5AE0',
          },
          headerTintColor: '#fff',
      }}
      />
          <Stack.Screen  
      name='Question' 
      component={QuestionScreen} 
      options={{
        headerStyle: {
            backgroundColor: '#6A5AE0',
          },
          headerTintColor: '#fff',
      }}
      />
    </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

