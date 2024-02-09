import React from 'react';
import {StyleSheet, View} from 'react-native';
import {theme} from 'styles';
import {SetStepActionType} from 'types/screens/FunnelScreen';
import ScreenContainer from 'components/@common/ScreenContainer';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

type LedgerDescriptionScreenProps = SetStepActionType;

export default function LedgerDescriptionScreen({
  onNext,
}: LedgerDescriptionScreenProps) {
  return (
    <ScreenContainer
      fixedBottomComponent={
        <Button variant="primary" onPress={onNext}>
          다음
        </Button>
      }
      contentContainerStyle={ledgerDescriptionScreenStyles.container}>
      <View style={ledgerDescriptionScreenStyles.textContainer}>
        <Typography
          type={'Title3SemiBold'}
          color={'black'}
          style={ledgerDescriptionScreenStyles.text}>
          나만의 장부를 만들어보세요
        </Typography>
        <Typography
          type={'Title3SemiBold'}
          color={'black'}
          style={ledgerDescriptionScreenStyles.text}>
          거래 내역과 재무 데이터를 확인할 수 있어요
        </Typography>
      </View>
      <View style={ledgerDescriptionScreenStyles.imageContainer} />
    </ScreenContainer>
  );
}

const ledgerDescriptionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.gray2,
    paddingTop: 30,
    paddingHorizontal: 0,
    gap: 10,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  text: {
    lineHeight: 35,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 80,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
