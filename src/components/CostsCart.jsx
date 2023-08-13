import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {EmptyList} from './EmptyList';
import styled from 'styled-components/native';
import {categoryBG, colors} from '../theme';

const CostsCartWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  aling-items: center;
  padding: 12px 20px;
  margin-bottom: 12px;
  border-radius: 16px;
`;

const TitleText = styled.Text`
  color: ${colors.heading};
  font-weight: bold;
`;

const CategoryText = styled.Text`
  color: ${colors.heading};
  font-size: 12px;
  line-height: 16px;
`;

export const CostsCart = ({finances}) => {
  return (
    <FlatList
      data={finances}
      ListEmptyComponent={<EmptyList />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <CostsCartWrapper
            style={{backgroundColor: categoryBG[item.category]}}>
            <View>
              <TitleText>{item.title}</TitleText>
              <CategoryText>{item.category}</CategoryText>
            </View>
            <View>
              <Text>$ {item.amount}</Text>
            </View>
          </CostsCartWrapper>
        );
      }}
    />
  );
};
