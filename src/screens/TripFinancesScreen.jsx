import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme';
import {CardItems} from '../components/CardItems';
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
import {AddTripTitle} from './AddTripScreen';

function TripFinancesScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <MainContainer>
        <BackButton />
        <AddTripTitle style={{marginTop: 15, marginLeft: '4%'}}>
          Add Trip
        </AddTripTitle>
      </MainContainer>
      <LogoView style={{backgroundColor: 'none'}}>
        <Image
          source={require('../assets/images/7.png')}
          style={{width: 300, height: 300}}
        />
      </LogoView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 16}}>
          <TripsInfo>
            <Recent>Recent Trips</Recent>
            <TouchableFrame onPress={() => navigation.navigate('AddTrip')}>
              <Text style={{color: colors.heading}}>Add Trip</Text>
            </TouchableFrame>
          </TripsInfo>
          <CardsContainer>
            <CardItems />
          </CardsContainer>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default TripFinancesScreen;
