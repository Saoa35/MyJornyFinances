import React from 'react';

import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme';
import {items} from '../data/items';

const CardsContainer = styled.TouchableOpacity`
  background-color: white;
  padding: 12px;
  border-radius: 15px;
  margin-bottom: 12px;
  box-shadow: 1px 2px rgba(0 0 0 / 0.05);
`;

export const CardItems = () => {
  return (
    <FlatList
      data={items}
      numColumns={2}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{
        justifyContent: 'space-around',
      }}
      renderItem={({item}) => {
        return (
          <CardsContainer>
            <View>
              <Image
                source={require('../assets/images/1.png')}
                style={{width: 144, height: 144}}
              />
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
