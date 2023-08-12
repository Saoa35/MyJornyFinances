import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {ScreenWrapper} from './HomeScreen';
import {colors} from '../theme';
import {BackButton} from '../components/buttons/BackButton';
import {useNavigation} from '@react-navigation/native';
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
import {categories} from '../data/categories';

const CategoryesContainer = styled.View`
  margin-left: 25px;
`;

const CategoryTitle = styled.Text`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  color: ${colors.heading};
`;

export const AddFinanceScreen = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const handleAddFinance = () => {
    if (title && amount && category) {
      console.log(title, amount, category);

      navigation.goBack();
    } else {
      console.log('All text fields must be filled');
    }
  };

  return (
    <ScreenWrapper>
      <AddTripWrapper>
        <AddTripContainer>
          <BackButton />

          <AddTripTitle>Add Finances</AddTripTitle>

          <ImageWrapper>
            <AddTripImage source={require('../assets/images/4.png')} />
          </ImageWrapper>

          <TextInputWrapper>
            <DirectionText>Purpose of Spending ?</DirectionText>
            <InputText value={title} onChangeText={value => setTitle(value)} />
            <DirectionText>How Much ?</DirectionText>
            <InputText
              value={amount}
              onChangeText={value => setAmount(value)}
            />
          </TextInputWrapper>

          <CategoryesContainer>
            <CategoryTitle>Categories</CategoryTitle>
            <View>
              {categories.map(category => {
                return (
                  <TouchableOpacity>
                    <Text>{category.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </CategoryesContainer>
        </AddTripContainer>

        <View>
          <AddTripOpacity onPress={handleAddFinance}>
            <AddTripText>Add Costs</AddTripText>
          </AddTripOpacity>
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
};
