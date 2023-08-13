import React, {useState} from 'react';
import {Text, Image, View, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ScreenWrapper} from './HomeScreen';
import {colors} from '../theme';
import {BackButton} from '../components/buttons/BackButton';
import {useNavigation} from '@react-navigation/native';
import {Loading} from '../components/Loading';
import Snackbar from 'react-native-snackbar';
import {addDoc} from 'firebase/firestore';
import {tripsRef} from '../config/firebase';
import {useSelector} from 'react-redux';

export const AddTripWrapper = styled.View`
  justify-content: space-between;
  height: 100%;
  margin: 0 20px;
`;

export const AddTripContainer = styled.View`
  position: relative;
  margin-top: 20px;
`;

export const AddTripTitle = styled.Text`
  color: ${colors.heading};
  font-size: 22px;
  line-height: 28px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 0;
  left: 38%;
`;

export const AddTripImage = styled.Image`
  height: 288px;
  width: 288px;
`;

export const ImageWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const DirectionText = styled.Text`
  color: ${colors.heading};
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
  margin-left: 25px;
  margin-bottom: 10px;
`;

export const TextInputWrapper = styled.View`
  margin: 8px 8px 0 8px;
`;

export const InputText = styled.TextInput`
  padding: 10px 20px;
  background-color: white;
  border-radius: 9999px;
  margin-bottom: 12px;
`;

export const AddTripOpacity = styled.TouchableOpacity`
  background-color: ${colors.button};
  margin: 24px 8px;
  padding: 12px;
  border-radius: 9999px;
  box-shadow: 1px 2px rgb(0, 0, 0, 0.05);
`;

export const AddTripText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const AddTripScreen = () => {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const {user} = useSelector(state => state.user);

  const navigation = useNavigation();

  const handleAddTrip = async () => {
    if (place && country) {
      setLoading(true);

      let doc = await addDoc(tripsRef, {place, country, userId: user.uid});

      setLoading(false);

      if (doc && doc.id) {
        navigation.navigate('Home');
      }
    } else {
      setLoading(false);

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
          <AddTripTitle>Add Trip</AddTripTitle>
          <ImageWrapper>
            <AddTripImage source={require('../assets/images/4.png')} />
          </ImageWrapper>
          <TextInputWrapper>
            <DirectionText>Which Place ?</DirectionText>

            <InputText value={place} onChangeText={value => setPlace(value)} />
            <DirectionText>Which Country ?</DirectionText>
            <InputText
              value={country}
              onChangeText={value => setCountry(value)}
            />
          </TextInputWrapper>
        </AddTripContainer>

        <View>
          {loading ? (
            <Loading />
          ) : (
            <AddTripOpacity onPress={handleAddTrip}>
              <AddTripText>Add Trip</AddTripText>
            </AddTripOpacity>
          )}
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
};
