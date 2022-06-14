import {Text} from 'react-native';
import React from 'react';
import Layout from './Layout';

const Modal = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <Text>Modal</Text>
    </Layout>
  );
};

export default Modal;
