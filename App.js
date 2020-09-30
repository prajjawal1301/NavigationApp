/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Drawer1 from './Drawer/Drawer1';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Home Screen
      </Text>
      <Button
        onPress={() => navigation.navigate('Second Screen',
          {
            item: 'MRF Bat',
            id: 1,
          })}
        title="Go to the Details screen" />
      <Button
        onPress={() => navigation.navigate('Third Screen', {
          id: 1,
          item: "content for third screen from first screen"
        })}
        title="Go to the Third screen" />

    </View>
  );
};
const Second = ({ route, navigation }) => {
  const { item } = route.params;
  const { id } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Details Screen
      </Text>
      <Text>
        id: {JSON.stringify(id)}
      </Text>
      <Text>
        item: {JSON.stringify(item)}
      </Text>
      <Button
        onPress={() => navigation.navigate('Home Screen')}
        title="Go Back" />
      <Button
        title="Go to Details Again using push"
        onPress={() => navigation.push('Second Screen', {
          id: Math.floor(id * 100),
          item: "content for second screen when using push"
        })} />
      <Button
        title="Go to Details Again using navigation.navigate"
        onPress={() => navigation.navigate('Second Screen')} />
      <Button
        title="Go to third screen"
        onPress={() => navigation.navigate('Third Screen', {
          id: Math.floor(id * 100),
          item: "content for third screen from second screen",
        })} />
    </View>
  );
};

const Third = ({ route, navigation }) => {
  const { item } = route.params;
  const { id } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        id:{JSON.stringify(id)}
      </Text>
      <Text>
        item:{JSON.stringify(item)}
      </Text>
      <Text>
        Welcome to the third Screen.
      </Text>
      <Button
        title="Go Back to the first screen using navigate"
        onPress={() => navigation.navigate('Home Screen')} />
      <Button
        title='Go back to the first screen using pop to Top'
        onPress={() => navigation.popToTop()} />
      <Button
        title='Go back to the third screen using push'
        onPress={() => navigation.push('Third Screen', {
          id: Math.floor(id * 100),
          item: "content for third screen fromt he third screen",
        })} />
    </View>
  )
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <Drawer1 />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home Screen'>
    //     <Stack.Screen name='Home Screen' component={HomeScreen} />
    //     <Stack.Screen name='Second Screen' component={Second} />
    //     <Stack.Screen name="Third Screen" component={Third} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}




