import {Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../component/CustomText';
import {useAuthContext} from '../context/authContext';
import Layout from '../component/Layout';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const ProfileScreen = ({navigation }) => {
  const [imgData, setimgData] = useState('');
  const {user} = useAuthContext();

  const openCamera = async () => {
    const result = await launchCamera(
      {mediaType: 'mixed', saveToPhotos: true},
      () => {
        console.log('take a photo');
      },
    );
    setimgData(result?.assets[0].originalPath);
    console.log(result, '-----------------');
  };
  console.log(imgData);

  if (!user) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CustomText h2 color={'grey'} title={'Please Login'} />
        <TouchableOpacity
          style={{
            backgroundColor: '#005D99',
            width: '50%',
            alignItems: 'center',
            padding: 10,
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate('Login')}>
          <CustomText h4 title={'Login Screen'} color={'white'} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <Layout>
      <View style={{marginVertical: 20, gap: 8}}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 200}}
            source={{uri: imgData || user?.photoURL}}
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
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#005D99',
              width: '50%',
              alignItems: 'center',
              padding: 10,
              borderRadius: 20,
            }}
            onPress={() => openCamera()}>
            <CustomText h4 title={'Upload Photo'} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default ProfileScreen;
