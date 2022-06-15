import React, {useState} from 'react';
import Layout from './Layout';
import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';

const CheckboxContainer = ({route}) => {
  const {backgroundColor, icon} = route.params;
  const [clicked, setClicked] = useState(false);
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <View style={styles.check}>
        <CheckBox
          value={clicked}
          onValueChange={setClicked}
          style={{borderColor: 'white'}}
        />
        <Text style={styles.text}>Do you like React Native?</Text>
      </View>
      <Text style={styles.text}>
        Is CheckBox selected: {clicked ? 'YES' : 'NO'}
      </Text>
    </Layout>
  );
};

export default CheckboxContainer;

const styles = StyleSheet.create({
  check: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});
