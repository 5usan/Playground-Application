import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Layout from './Layout';

const AvatarComponent = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>SS</Text>
      </View>
      <View style={styles.avatarTwo}>
        <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://res.cloudinary.com/dhkkb9wrz/image/upload/v1655033260/njmdibsdjqfp4el7tly0.jpg',
          }}
        />
      </View>
    </Layout>
  );
};

export default AvatarComponent;

const styles = StyleSheet.create({
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3E83F8',
    margin: 10,
  },
  avatarText: {
    fontSize: 50,
    color: 'white',
  },

  avatarTwo: {
    height: 100,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maring: 10,
  },

  imageIcon: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
});
