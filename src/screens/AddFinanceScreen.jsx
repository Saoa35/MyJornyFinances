import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {ScreenWrapper} from './HomeScreen';
import {colors} from '../theme';
import {BackButton} from '../components/buttons/BackButton';
import {useNavigation} from '@react-navigation/native';
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
import {categories} from '../data/categories';
import {addDoc} from 'firebase/firestore';
import {financesRef} from '../config/firebase';
import {Loading} from '../components/Loading';

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

export const AddFinanceScreen = props => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  let {id} = props.route.params;

  const navigation = useNavigation();

  const handleAddFinance = async () => {
    if (title && amount && category) {
      setLoading(true);

      let doc = await addDoc(financesRef, {
        title,
        amount,
        category,
        tripId: id,
      });

      setLoading(false);

      if (doc && doc.id) {
        navigation.navigate.goBack();
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
          {loading ? (
            <Loading />
          ) : (
            <AddTripOpacity onPress={handleAddFinance}>
              <AddTripText>Add Costs</AddTripText>
            </AddTripOpacity>
          )}
        </View>
      </AddTripWrapper>
    </ScreenWrapper>
  );
};
