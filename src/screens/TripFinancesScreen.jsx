import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {colors} from '../theme';
import styled from 'styled-components/native';

import {useNavigation} from '@react-navigation/native';
import {
  CardsContainer,
  LogoView,
  MainContainer,
  Recent,
  ScreenWrapper,
  TouchableFrame,
  TripsInfo,
} from './HomeScreen';
import {BackButton} from '../components/buttons/BackButton';
import {CostsCart} from '../components/CostsCart';

const TripPlaceTitle = styled.Text`
  color: ${colors.heading};
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  margin-right: 42%;
`;

const TripCountryTitle = styled.Text`
  color: ${colors.heading};
  font-size: 16px;
  line-height: 24px;
  margin-left: 13%;
`;

function TripFinancesScreen(props) {
  const navigation = useNavigation();
  console.log('props : ', props);

  return (
    <ScreenWrapper>
      <MainContainer>
        <BackButton />
        <View>
          <TripPlaceTitle>trip place</TripPlaceTitle>
          <TripCountryTitle>trip country</TripCountryTitle>
        </View>
      </MainContainer>
      <LogoView style={{backgroundColor: 'none'}}>
        <Image
          source={require('../assets/images/7.png')}
          style={{width: 320, height: 320}}
        />
      </LogoView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 16}}>
          <TripsInfo>
            <Recent>Finances</Recent>
            <TouchableFrame onPress={() => navigation.navigate('AddTrip')}>
              <Text style={{color: colors.heading}}>Add Costs</Text>
            </TouchableFrame>
          </TripsInfo>
          <CardsContainer>
            <CostsCart />
          </CardsContainer>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default TripFinancesScreen;
