import React from 'react';
import {Text, Image, View, TextInput} from 'react-native';
import styled from 'styled-components/native';
import {ScreenWrapper} from './HomeScreen';
import {colors} from '../theme';
import {BackButton} from '../components/buttons/BackButton';

const AddTripWrapper = styled.View`
  justify-content: space-between;
  height: 100%;
  margin: 0 20px;
`;

const AddTripContainer = styled.View`
  position: relative;
  margin-top: 20px;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
`;

const AddTripTitle = styled.Text`
  color: ${colors.heading};
  font-size: 22px;
  line-height: 28px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 0;
  left: 38%;
`;

const AddTripImage = styled.Image`
  height: 288px;
  width: 288px;
`;

const ImageWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const DirectionText = styled.Text`
  color: ${colors.heading};
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
`;

export const AddTripScreen = () => {
  return (
    <ScreenWrapper>
      <AddTripWrapper>
        <AddTripContainer>
          {/* <ButtonWrapper> */}
          <BackButton />
          {/* </ButtonWrapper> */}
          <AddTripTitle>Add Trip</AddTripTitle>
          <ImageWrapper>
            <AddTripImage source={require('../assets/images/4.png')} />
          </ImageWrapper>
          <View>
            <DirectionText>Wich Continent ?</DirectionText>
            <TextInput />
            <DirectionText>Which Country ?</DirectionText>
            <TextInput />
          </View>
        </AddTripContainer>

        <View></View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
};
