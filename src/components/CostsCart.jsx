import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {EmptyList} from './EmptyList';
import {items} from '../data/items';

export const CostsCart = () => {
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
          <View item={item}>
            <Text>Costs Cart</Text>
          </View>
        );
      }}
    />
  );
};
