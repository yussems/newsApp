import * as React from 'react';
import {ScrollView} from 'react-native';
import Layout from '../component/Layout';
import Business from '../component/Business';
import Science from '../component/Science';

function HomeScreen() {
  return (
    <ScrollView>
      <Layout>
        <Business />
        <Science />
      </Layout>
    </ScrollView>
  );
}
export default HomeScreen;
