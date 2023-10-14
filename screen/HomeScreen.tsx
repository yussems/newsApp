import * as React from 'react';
import {ScrollView} from 'react-native';
import Layout from '../component/Layout';
import Business from '../component/Business';

function HomeScreen() {
  return (
    <ScrollView>
      <Layout>
        <Business />
      </Layout>
    </ScrollView>
  );
}
export default HomeScreen;
