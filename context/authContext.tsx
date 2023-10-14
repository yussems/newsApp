import {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
const AuthenticationContext = createContext(null);

const AuthContext = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  console.log(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <AuthenticationContext.Provider value={{user, logOut}}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthenticationContext);
export default AuthContext;
