import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from './HomeScreen';
import styled from 'styled-components/native';
import {
  AddTripContainer,
  AddTripImage,
  AddTripOpacity,
  AddTripText,
  AddTripTitle,
  AddTripWrapper,
  DirectionText,
  ImageWrapper,
  InputText,
  TextInputWrapper,
} from './AddTripScreen';
import {BackButton} from '../components/buttons/BackButton';
import {useNavigation} from '@react-navigation/native';

const ForgetPassContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  flex-direction: row;
`;

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, sePassword] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (email && password) {
      navigation.navigate('Home');
    } else {
      console.log('All text fields must be filled');
    }
  };

  return (
    <ScreenWrapper>
      <AddTripWrapper>
        <AddTripContainer>
          <BackButton />
          <AddTripTitle>Sign In</AddTripTitle>
          <ImageWrapper>
            <AddTripImage
              style={{height: 320, width: 320}}
              source={require('../assets/images/login.png')}
            />
          </ImageWrapper>

          <TextInputWrapper>
            <DirectionText>Email</DirectionText>
            <InputText value={email} onChangeText={value => setEmail(value)} />
            <DirectionText>Password</DirectionText>
            <InputText
              value={password}
              secureTextEntry
              onChangeText={value => sePassword(value)}
            />
            <ForgetPassContainer>
              <Text>Forget Password?</Text>
            </ForgetPassContainer>
          </TextInputWrapper>
        </AddTripContainer>

        <View>
          <AddTripOpacity onPress={handleSubmit}>
            <AddTripText>Log In</AddTripText>
          </AddTripOpacity>
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
}

export default LoginScreen;
