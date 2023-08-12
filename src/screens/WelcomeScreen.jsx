import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from './HomeScreen';
import styled from 'styled-components/native';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreenContainer = styled.View`
  height: 100%;
  justify-content: space-around;
`;

const ImageContainer = styled.View`
  justify-content: center;
  margin: 60px 0;
`;

const WelcomeImage = styled.Image`
  width: 100%;
  height: 170px;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.06);
`;

const ContentContainer = styled.View`
  margin: 0 20px 80px 20px;
`;

const MainText = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: ${colors.heading};
  margin-bottom: 40px;
`;

const SignTextWrapper = styled.TouchableOpacity`
  background-color: ${colors.button};
  box-shadow: 1px 2px rgba(0, 0, 0, 0.06);
  padding: 12px;
  margin-bottom: 30px;
  border-radius: 9999px;
`;

const SignText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
`;

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <WelcomeScreenContainer>
        <ImageContainer>
          <WelcomeImage source={require('../assets/images/welcome.png')} />
        </ImageContainer>

        <ContentContainer>
          <MainText>My Journey Finances</MainText>

          <SignTextWrapper onPress={() => navigation.navigate('Login')}>
            <SignText>Sign In</SignText>
          </SignTextWrapper>

          <SignTextWrapper onPress={() => navigation.navigate('Register')}>
            <SignText>Sign Up</SignText>
          </SignTextWrapper>
        </ContentContainer>
      </WelcomeScreenContainer>
    </ScreenWrapper>
  );
}

export default WelcomeScreen;
