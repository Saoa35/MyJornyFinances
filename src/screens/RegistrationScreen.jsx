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
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {setUserLoading} from '../redux/slices/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../components/Loading';

function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {userLoading} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (email && password) {
      try {
        dispatch(setUserLoading(true));

        await createUserWithEmailAndPassword(auth, email, password);

        dispatch(setUserLoading(false));
      } catch (error) {
        dispatch(setUserLoading(false));

        Snackbar.show({
          text: error.message,
          backgroundColor: 'red',
        });
      }
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
          {userLoading ? (
            <Loading />
          ) : (
            <AddTripOpacity onPress={handleSubmit}>
              <AddTripText>Sign Up</AddTripText>
            </AddTripOpacity>
          )}
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
}

export default RegistrationScreen;
