import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Layout from './Layout';

const Input = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <TextInput
        placeholder="Normal Text"
        style={styles.textInput}
        placeholderTextColor="white"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="white"
        style={styles.textInput}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Text Area"
        placeholderTextColor="white"
        style={styles.textInput}
        secureTextEntry={true}
        multiline
        numberOfLines={4}
      />
      <TextInput
        placeholder="Number"
        placeholderTextColor="white"
        style={styles.textInput}
        keyboardType="numeric"
      />
    </Layout>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    width: Dimensions.get('window').width - 40,
    borderRadius: 4,
    margin: 20,
    fontSize: 18,
    color: 'white',
  },
});
