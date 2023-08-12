import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ScreenWrapper} from './HomeScreen';
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

function LoginScreen() {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');

  const navigation = useNavigation();

  const handleAddTrip = () => {
    if (place && country) {
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
            <AddTripImage source={require('../assets/images/4.png')} />
          </ImageWrapper>
          <TextInputWrapper>
            <DirectionText>Email</DirectionText>

            <InputText value={place} onChangeText={value => setPlace(value)} />
            <DirectionText>Password</DirectionText>
            <InputText
              value={country}
              onChangeText={value => setCountry(value)}
            />
          </TextInputWrapper>
        </AddTripContainer>

        <View>
          <AddTripOpacity onPress={handleAddTrip}>
            <AddTripText>Add Trip</AddTripText>
          </AddTripOpacity>
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
}

export default LoginScreen;
