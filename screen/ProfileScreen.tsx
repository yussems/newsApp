import {Image, Text, View} from 'react-native';
import React from 'react';
import CustomText from '../component/CustomText';
import {useAuthContext} from '../context/authContext';
import Layout from '../component/Layout';

const ProfileScreen = () => {
  const {user} = useAuthContext();
  return (
    <Layout>
      <View style={{marginVertical: 20, gap: 8}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 200}}
            source={{uri: user?.photoURL}}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText h4 title={'Name: '} />
          <CustomText h4 title={user?.displayName} color={'black'} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText h4 title={'Email: '} />
          <CustomText h4 title={user?.email} color={'black'} />
        </View>
      </View>
    </Layout>
  );
};

export default ProfileScreen;
