import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import CardLayout from './CardLayout';
import {conponentOne, conponentTwo} from '../assets/constants';

const Initial = ({navigation}) => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.wrapper}>
        <View style={styles.column}>
          {conponentOne.map((one, index) => {
            return (
              <CardLayout
                key={index}
                backgroundColor={one.backgroundColor}
                height={one.height}
                width={one.width}
                title={one.title}
                icon={one.icon}
                onPress={() => {
                  navigation.navigate(one.title, {
                    backgroundColor: one.backgroundColor,
                    icon: one.icon,
                  });
                }}
              />
            );
          })}
        </View>
        <View style={styles.column}>
          {conponentTwo.map((one, index) => {
            return (
              <CardLayout
                key={index}
                backgroundColor={one.backgroundColor}
                height={one.height}
                width={one.width}
                title={one.title}
                icon={one.icon}
                onPress={() => {
                  navigation.navigate(one.title, {
                    backgroundColor: one.backgroundColor,
                    icon: one.icon,
                  });
                }}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Initial;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#0F172A',
    padding: 10,
  },
  wrapper: {
    flexDirection: 'row',
    width: '50%',
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    padding: 8,
  },
});
