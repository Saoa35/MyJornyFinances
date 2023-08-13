import React, {useState} from 'react';
import {View} from 'react-native';
import {ScreenWrapper} from './HomeScreen';
import Snackbar from 'react-native-snackbar';
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
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';

function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (email && password && name) {
      // navigation.navigate('Home');

      await createUserWithEmailAndPassword(auth, name, email, password);
    } else {
      Snackbar.show({
        text: 'All text fields must be filled',
        backgroundColor: 'red',
      });
    }
  };

  return (
    <ScreenWrapper>
      <AddTripWrapper>
        <AddTripContainer>
          <BackButton />
          <AddTripTitle>Sign Up</AddTripTitle>
          <ImageWrapper>
            <AddTripImage
              style={{height: 320, width: 320}}
              source={require('../assets/images/signup.png')}
            />
          </ImageWrapper>

          <TextInputWrapper>
            <DirectionText>Name</DirectionText>
            <InputText value={name} onChangeText={value => setName(value)} />
            <DirectionText>Email</DirectionText>
            <InputText value={email} onChangeText={value => setEmail(value)} />
            <DirectionText>Password</DirectionText>
            <InputText
              value={password}
              secureTextEntry
              onChangeText={value => setPassword(value)}
            />
          </TextInputWrapper>
        </AddTripContainer>

        <View>
          <AddTripOpacity onPress={handleSubmit}>
            <AddTripText>Sign Up</AddTripText>
          </AddTripOpacity>
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
}

export default RegistrationScreen;
