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

const CategoriesWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const CategoryType = styled.TouchableOpacity`
  border-radius: 9999px;
  padding: 12px 16px;
  margin: 0 8px 8px 0;
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
            <AddTripImage
              source={require('../assets/images/expenseBanner.png')}
            />
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
            <CategoriesWrapper>
              {categories.map(categ => {
                let bgColor = 'white';
                if (categ.value === category) {
                  bgColor = 'rgb(187, 247, 208)';
                }
                return (
                  <CategoryType
                    key={categ.value}
                    onPress={() => setCategory(categ.value)}
                    style={{backgroundColor: bgColor}}>
                    <Text>{categ.title}</Text>
                  </CategoryType>
                );
              })}
            </CategoriesWrapper>
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
