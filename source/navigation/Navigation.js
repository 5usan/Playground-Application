import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Initial from '../components/Initial';
import TextComponent from '../components/TextComponent';
import ButtonComponent from '../components/ButtonComponent';
import Flatlist from '../components/Flatlist';
import AvatarComponent from '../components/AvatarComponent';
import AlertComponent from '../components/AlertComponent';
import Modal from '../components/Modal';
import Icon from '../components/Icon';
import ImageComponent from '../components/ImageComponent';
import CheckboxContainer from '../components/CheckboxContainer';
import Input from '../components/Input';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Text" component={TextComponent} />
        <Stack.Screen name="Button" component={ButtonComponent} />
        <Stack.Screen name="FLatlist" component={Flatlist} />
        <Stack.Screen name="Avatar" component={AvatarComponent} />
        <Stack.Screen name="Alert" component={AlertComponent} />
        <Stack.Screen name="Modal" component={Modal} />
        <Stack.Screen name="Icon" component={Icon} />
        <Stack.Screen name="Image" component={ImageComponent} />
        <Stack.Screen name="Checkbox" component={CheckboxContainer} />
        <Stack.Screen name="Input" component={Input} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
