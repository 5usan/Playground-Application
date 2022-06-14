import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Layout from './Layout';

const ImageComponent = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://freerangestock.com/sample/120787/flat-lay-of-lemon-slices-on-white-plate-blueish-background.jpg',
          }}
        />
        <Image
          style={styles.image}
          source={require('../assets/icons/hacker.png')}
        />
      </View>
    </Layout>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  imageView: {
    padding: 40,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
});
