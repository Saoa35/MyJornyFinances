import React from 'react';
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
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
  margin-left: 25px;
  margin-bottom: 10px;
`;

const TextInputWrapper = styled.View`
  margin: 8px 8px 0 8px;
`;

const ContinentTextInput = styled.TextInput`
  padding: 10px 20px;
  background-color: white;
  border-radius: 9999px;
  margin-bottom: 12px;
`;

const CountryTextInput = styled.TextInput`
  padding: 10px 20px;
  background-color: white;
  border-radius: 9999px;
  margin-bottom: 12px;
`;

const AddTripOpacity = styled.TouchableOpacity`
  background-color: ${colors.button};
  margin: 24px 8px;
  padding: 12px;
  border-radius: 9999px;
  box-shadow: 1px 2px rgb(0, 0, 0, 0.05);
`;

const AddTripText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
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
          <TextInputWrapper>
            <DirectionText>Wich Continent ?</DirectionText>
            <ContinentTextInput />
            <DirectionText>Which Country ?</DirectionText>
            <CountryTextInput />
          </TextInputWrapper>
        </AddTripContainer>

        <View>
          <AddTripOpacity>
            <AddTripText>Add Trip</AddTripText>
          </AddTripOpacity>
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
};
