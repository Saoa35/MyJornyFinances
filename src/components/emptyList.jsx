import React from 'react';
import {Text, Image, View} from 'react-native';
import styled from 'styled-components/native';

const ListContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ListImage = styled.Image`
  width: 144px;
  height: 144px;
`;

const ListText = styled.Text`
  font-weight: bold;
  color: rgb(156 163 175);
`;

export const EmptyList = () => {
  return (
    <ListContainer>
      <ListImage source={require('../assets/images/empty.png')} />
      <ListText>No added trips yet</ListText>
    </ListContainer>
  );
};
