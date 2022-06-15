import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

const Layout = ({children, backgroundColor, icon}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        minHeight: Dimensions.get('window').height,
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <View style={styles.iconView}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  iconView: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '8%',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  children: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '92%',
  },
});
