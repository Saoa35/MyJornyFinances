import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme';

const LoadingContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 32px 0;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color={colors.button} />
    </LoadingContainer>
  );
};
