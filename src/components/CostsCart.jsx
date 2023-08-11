import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {EmptyList} from './EmptyList';
import {costs} from '../data/costs';

export const CostsCart = () => {
  return (
    <FlatList
      data={costs}
      ListEmptyComponent={<EmptyList />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.category}</Text>
            </View>
            <View>
              <Text>$ {item.amount}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};
