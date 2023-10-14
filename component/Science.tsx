import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {useApi} from '../utils/useApi';
import Loading from './Loading';
import MyError from './MyError';
import Line from './Line';

const Science = () => {
  const {data, loading, error} = useApi('science');

  return (
    <View>
      {loading && <Loading />}
      {error && <MyError />}
      <CustomText h2 bold title={'SCIENCE'} color={'#005D99'} />
      <View>
        {data?.articles?.map((item, i) => {
          const {title, url, published_date, publisher} = item;

          return (
            <View key={i}>
              <View
                style={{
                  marginVertical: 24,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1}}>
                    <CustomText h1 title={i + 1} style={{fontWeight: 700}} />
                  </View>

                  <View style={{flex: 5}}>
                    <View>
                      <CustomText h5 title={title} color={'black'} />
                    </View>
                    <View>
                      <CustomText
                        h5
                        bold
                        title={publisher?.name}
                        color={'black'}
                      />
                    </View>
                  </View>
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

export default Science;

const styles = StyleSheet.create({});
