import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme';
import {CardItems} from '../components/CardItems';
import {useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {auth, tripsRef} from '../config/firebase';
import {useSelector} from 'react-redux';
import {getDocs, query, where} from 'firebase/firestore';

export const ScreenWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Title = styled.Text`
  color: ${colors.heading};
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
`;

export const TouchableFrame = styled.TouchableOpacity`
  padding: 8px 12px;
  border: 1px solid rgb(229 231 235);
  background-color: white;
  border-radius: 20px;
`;

export const LogoView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgb(191 219 254);
  border-radius: 20px;
  margin: 16px;
`;

export const TripsInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Recent = styled.Text`
  color: ${colors.heading};
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`;

export const CardsContainer = styled.View`
  margin: 16px 0;
  height: 430px;
`;

function HomeScreen() {
  const navigation = useNavigation();

  const {user} = useSelector(state => state.user);

  const fetchTrips = async () => {
    const q = query(tripsRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <ScreenWrapper>
      <MainContainer>
        <Title>My Jorney Finances</Title>
        <TouchableFrame onPress={handleLogout}>
          <Text style={{color: colors.heading}}>LogOut</Text>
        </TouchableFrame>
      </MainContainer>
      <LogoView>
        <Image
          source={require('../assets/images/banner.png')}
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

export default HomeScreen;
