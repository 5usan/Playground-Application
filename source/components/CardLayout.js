import React from 'react';
import {Animated, Image, Pressable, StyleSheet, Text, View} from 'react-native';

const CardLayout = ({title, backgroundColor, height, width, icon, onPress}) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.93];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
      style={[
        {
          backgroundColor: backgroundColor,
          height: height,
          width: width,
          marginBottom: 12,
          borderRadius: 10,
          padding: 10,
        },
        {transform: [{scale}]},
      ]}>
      <Pressable
        onPress={onPress}
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        <View style={styles.view}>
          <Image source={icon} style={styles.icon} />
        </View>
      </Pressable>
    </Animated.View>
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
