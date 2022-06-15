import React from 'react';
import {Alert, Button, Text} from 'react-native';
import Layout from './Layout';

const AlertComponent = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <Button
        title="Press to show alert"
        color="#f7994d"
        onPress={() => {
          Alert.alert('Botton Pressed', 'Alert gives us modal', [
            {
              text: 'Cancel',
            },
            {text: 'OK'},
          ]);
        }}
      />
    </Layout>
  );
};

export default AlertComponent;
