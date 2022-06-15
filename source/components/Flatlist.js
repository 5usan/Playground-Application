import React from 'react';
import {Text} from 'react-native';
import Layout from './Layout';

const Flatlist = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <Text>FLatlist</Text>
    </Layout>
  );
};

export default Flatlist;
