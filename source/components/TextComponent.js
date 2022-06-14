import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Layout from './Layout';

const TextComponent = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <Text style={styles.bold}>BOLD</Text>
      <Text style={styles.normal}>NORMAL</Text>
      <Text style={styles.color}>PURPLE</Text>
    </Layout>
  );
};

export default TextComponent;

const styles = StyleSheet.create({
  normal: {
    fontWeight: 'normal',
    fontSize: 100,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 100,
  },
  color: {
    color: '#6C0CAD',
    fontSize: 100,
  },
});
