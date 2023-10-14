import {Button, View, Alert} from 'react-native';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

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
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
    </View>
  );
};

export default LoginScreen;
