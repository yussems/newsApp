import * as React from 'react';
import {View, Text} from 'react-native';
import {useApi} from '../utils/useApi';

function HomeScreen() {
  const {loading, data, error} = useApi();
  console.log(JSON.stringify(data, null, 2));
  console.log(loading, error);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}
export default HomeScreen;
