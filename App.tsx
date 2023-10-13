import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import LoginScreen from './screen/LoginScreen';
import {Image} from 'react-native';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#005D99',
          },
          drawerStyle: {
            backgroundColor: '#005D99',
          },
          drawerPosition: 'right',
          drawerActiveTintColor: '#33D8FF',
          drawerInactiveTintColor: '#404040',
          headerLeft: false,
          headerRight: ({tintColor,pressOpacity}) => (
            <DrawerToggleButton tintColor="white" pressOpacity={0.4} />
          ),
          headerTitle: props => <LogoTitle {...props} />,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          // options={{headerTitle: props => <LogoTitle {...props} />}}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

function LogoTitle() {
  return (
    <Image
      style={{width: 132, height: 50, objectFit: 'contain'}}
      source={require('./public/assets/TRT_logo.png')}
    />
  );
}
