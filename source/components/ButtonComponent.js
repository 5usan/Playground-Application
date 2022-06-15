import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import Layout from './Layout';

const ButtonComponent = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <View style={styles.btn}>
        <Button
          title="Simple Button"
          onPress={() => Alert.alert('SIMPLE BUTTON pressed')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Color Button"
          color="green"
          onPress={() => {
            Alert.alert('COLOR BUTTON Clicked');
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Disabled Button"
          disabled
          onPress={() => Alert.alert('Cannot press this one')}
        />
      </View>
    </Layout>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btn: {
    margin: 20,
  },
});
