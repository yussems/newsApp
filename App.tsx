import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerToggleButton,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import LoginScreen from './screen/LoginScreen';
import {Image, View, Text} from 'react-native';
import AuthContext, {useAuthContext} from './context/authContext';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <AuthContext>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
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
            headerRight: () => (
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
    </AuthContext>
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
function CustomDrawerContent(props) {
  const {logOut, user} = useAuthContext();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {user && <DrawerItem label="Logout" onPress={() => logOut()} />}
    </DrawerContentScrollView>
  );
}
