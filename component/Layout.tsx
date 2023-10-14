import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import myDimensions from '../utils/myDimensions';

const Layout = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content: {
    width: myDimensions.deviceWidth * 0.96,
  },
});
