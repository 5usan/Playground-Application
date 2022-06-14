import {Text} from 'react-native';
import React from 'react';
import Layout from './Layout';

const Icon = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <Text>Icon</Text>
    </Layout>
  );
};

export default Icon;
