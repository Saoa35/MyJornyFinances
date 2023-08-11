import React from 'react';

import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme';
import {items} from '../data/items';
import randomImage from '../assets/images/randomImage';
import {EmptyList} from './EmptyList';
import {useNavigation} from '@react-navigation/native';

const CardsContainer = styled.TouchableOpacity`
  background-color: white;
  padding: 12px;
  border-radius: 15px;
  margin-bottom: 12px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.05);
`;

export const CardItems = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={items}
      numColumns={2}
      ListEmptyComponent={<EmptyList />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        justifyContent: 'space-around',
      }}
      renderItem={({item}) => {
        return (
          <CardsContainer onPress={() => navigation.navigate('TripFinances')}>
            <View>
              <Image source={randomImage()} style={{width: 144, height: 144}} />
              <Text style={{color: colors.heading, fontWeight: 'bold'}}>
                {item.place}
              </Text>
              <Text
                style={{
                  color: colors.heading,
                  fontSize: 12,
                  lineHeight: 16,
                }}>
                {item.country}
              </Text>
            </View>
          </CardsContainer>
        );
      }}
    />
  );
};
