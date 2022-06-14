import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const CardLayout = ({title, backgroundColor, height, width, icon, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor,
        height: height,
        width: width,
        marginBottom: 12,
        borderRadius: 10,
        padding: 10,
      }}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <View style={styles.view}>
        <Image source={icon} style={styles.icon} />
      </View>
    </Pressable>
  );
};

export default CardLayout;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '83%',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    padding: 5,
    borderColor: 'white',
  },
  icon: {
    width: 60,
    height: 60,
  },
});
