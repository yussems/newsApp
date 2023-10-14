import {Button, View, Alert, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import CustomText from '../component/CustomText';
import Layout from '../component/Layout';
import {deviceWidth} from '../utils/myDimensions';
const LoginScreen = () => {
  GoogleSignin.configure({
    webClientId:
      '885893087442-gicqabgo80qnbq9rdvp1c8dqve7i8pe1.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const user_signIn = auth().signInWithCredential(googleCredential);

    user_signIn.then(() => {
      Alert.alert('Authentication Successful', 'Have Nice Reading', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    });
  }

  return (
    <Layout>
      <View style={{gap: 24, height: '100%'}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('../public/assets/login.png')}
            style={{width: 300, height: 300, objectFit: 'contain'}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <CustomText h2 title={'Welcome to TRTWorld'} bold color={'#005D99'} />
          <CustomText
            h4
            title={'Sign in your Account with Google'}
            color={'black'}
          />
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
            onPress={() =>
              onGoogleButtonPress().then(() =>
                console.log('Signed in with Google!'),
              )
            }>
            <CustomText h4 title={'Login'} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;
