import React, {useEffect, useState} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {colors} from '../theme';
import styled from 'styled-components/native';

import {useIsFocused, useNavigation} from '@react-navigation/native';
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
import {getDocs, query, where} from 'firebase/firestore';
import {financesRef} from '../config/firebase';

const TripPlaceTitle = styled.Text`
  color: ${colors.heading};
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  margin-right: 50%;
`;

const TripCountryTitle = styled.Text`
  color: ${colors.heading};
  font-size: 16px;
  line-height: 24px;
  margin-left: 18%;
`;

function TripFinancesScreen(props) {
  const navigation = useNavigation();

  const [finances, setFinances] = useState([]);

  const {id, place, country} = props.route.params;

  const isFocused = useIsFocused();

  const fetchFinances = async () => {
    const q = query(financesRef, where('tripId', '==', id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data(), id: doc.id});
    });
    setFinances(data);
  };

  // useEffect(() => {
  //   if (isFocused) {
  //     fetchFinances();
  //   }
  // }, [isFocused]);

  return (
    <ScreenWrapper>
      <MainContainer>
        <BackButton />
        <View>
          <TripPlaceTitle>{place}</TripPlaceTitle>
          <TripCountryTitle>{country}</TripCountryTitle>
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
            <TouchableFrame
              onPress={() =>
                navigation.navigate('AddFinance', {id, place, country})
              }>
              <Text style={{color: colors.heading}}>Add Costs</Text>
            </TouchableFrame>
          </TripsInfo>

          <CardsContainer>
            <CostsCart finances={finances} />
          </CardsContainer>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default TripFinancesScreen;
