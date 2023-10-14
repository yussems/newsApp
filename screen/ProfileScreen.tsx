import {Text, View} from 'react-native';
import React from 'react';
import CustomText from '../component/CustomText';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CustomText h1>ProfileScreen</CustomText>
    </View>
  );
};

export default ProfileScreen;
