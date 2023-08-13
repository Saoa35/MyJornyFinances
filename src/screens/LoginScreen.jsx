import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScreenWrapper} from './HomeScreen';
import styled from 'styled-components/native';
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
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../components/Loading';
import {setUserLoading} from '../redux/slices/userSlice';

const ForgetPassContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  flex-direction: row;
`;

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, sePassword] = useState('');

  const {userLoading} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));

        await signInWithEmailAndPassword(auth, email, password);

        dispatch(setUserLoading(false));
      } catch (error) {
        dispatch(setUserLoading(false));

        Snackbar.show({
          text: error.message,
          backgroundColor: 'red',
        });
      }

      // navigation.navigate('Home');
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
          {userLoading ? (
            <Loading />
          ) : (
            <AddTripOpacity onPress={handleSubmit}>
              <AddTripText>Log In</AddTripText>
            </AddTripOpacity>
          )}
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
}

export default LoginScreen;
