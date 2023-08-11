import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../theme';
import {useNavigation} from '@react-navigation/native';

const BackButtonContainer = styled.TouchableOpacity`
  background-color: white;
  border-radius: 32px;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
`;

export const BackButton = () => {
  const navigation = useNavigation();

  return (
    <BackButtonContainer onPress={() => navigation.goBack()}>
      <Entypo
        name="chevron-thin-left"
        style={{fontSize: 26, color: colors.button}}
      />
    </BackButtonContainer>
  );
};
