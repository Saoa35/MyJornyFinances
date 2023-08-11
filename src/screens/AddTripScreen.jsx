import React from 'react';
import {Text, Image, View} from 'react-native';
import styled from 'styled-components/native';
import {ScreenWrapper} from './HomeScreen';
import {colors} from '../theme';
import {BackButton} from '../components/buttons/BackButton';

const AddContainer = styled.View`
  justify-content: space-between;
  height: 100%;
  margin-top: 8px;
`;

const AddTripTitle = styled.Text`
  color: ${colors.heading};
  font-size: 22px;
  line-height: 28px;
  font-weight: bold;
  text-align: center;
`;

export const AddTripScreen = () => {
  return (
    <ScreenWrapper>
      <AddContainer>
        <View>
          <BackButton />
          <AddTripTitle>Add Trip</AddTripTitle>
        </View>
        <View></View>
      </AddContainer>
    </ScreenWrapper>
  );
};
