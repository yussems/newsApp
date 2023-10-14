import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useApi} from '../utils/useApi';
import Loading from './Loading';
import MyError from './MyError';
import CustomText from './CustomText';
import Line from './Line';

const Business = () => {
  const {data, loading, error} = useApi('business');

  return (
    <View>
      {loading && <Loading />}
      {error && <MyError />}
      <View>
        <View>
          <CustomText
            h2
            bold
            title={'BUSINESS'}
            color={'#005D99'}
            style={{marginVertical: 16}}
          />
        </View>
        <View>
          <Image
            source={require('../public/assets/business.jpg')}
            style={{width: '100%', height: 240, objectFit: 'cover'}}
          />
        </View>
        {data?.articles?.map((item, i) => {
          const {title, url, published_date, publisher} = item;
          return (
            <View key={i} >
              <View style={{gap: 8, marginVertical: 16}}>
                <View>
                  <CustomText h2 bold title={title} color={'black'} />
                </View>
                <View>
                  <CustomText h5 title={url} color={'black'}  />
                </View>
                <View
                  style={{
                    height: 32,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16,
                  }}>
                  <View>
                    <Image
                      source={require('../public/assets/dummy.png')}
                      style={{
                        objectFit: 'contain',
                        width: 32,
                        height: 32,
                        borderRadius: 32,
                      }}
                    />
                  </View>
                  <CustomText p title={publisher?.name} bold color={'black'}  />
                </View>
              </View>
              <Line />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({
  c: {
    color: '#005D99',
  },
});
