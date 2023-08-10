import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme';
import {CardItems} from '../components/CardItems';

const HomeScreenWrapper = styled.View`
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.View`
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

const TouchableFrame = styled.TouchableOpacity`
  padding: 8px 12px;
  border: 1px solid rgb(229 231 235);
  background-color: white;
  border-radius: 20px;
`;

const LogoView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgb(191 219 254);
  border-radius: 20px;
  margin: 16px;
`;

const TripsInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Recent = styled.Text`
  color: ${colors.heading};
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`;

function HomeScreen() {
  return (
    <HomeScreenWrapper>
      <MainContainer>
        <Title>My Jorney Finances</Title>
        <TouchableFrame>
          <Text style={{color: colors.heading}}>Logout</Text>
        </TouchableFrame>
      </MainContainer>
      <LogoView>
        <Image
          source={require('../assets/images/banner.png')}
          style={{width: 300, height: 300}}
        />
      </LogoView>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={{paddingHorizontal: 16, width: '100%', height: '100%'}}>
        <TripsInfo>
          <Recent>Recent Trips</Recent>
          <TouchableFrame>
            <Text style={{color: colors.heading}}>Add Trip</Text>
          </TouchableFrame>
        </TripsInfo>
        <View style={{marginVertical: 16, width: '100%', height: '100%'}}>
          <CardItems />
        </View>
      </View>
      {/* </ScrollView> */}
    </HomeScreenWrapper>
  );
}

export default HomeScreen;
