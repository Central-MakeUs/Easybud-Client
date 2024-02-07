import React from 'react';
import {StyleSheet} from 'react-native';
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
        <Button variant="secondary" onPress={onNext}>
          다음
        </Button>
      }
      contentContainerStyle={ledgerDescriptionScreenStyles.container}>
      <Typography type={'Title3SemiBold'} color={'white'}>
        나만의 장부를 만들어보세요
      </Typography>
      <Typography
        type={'Title3SemiBold'}
        color={'white'}
        style={ledgerDescriptionScreenStyles.text}>
        거래 내역과 재무 데이터를 확인할 수 있어요
      </Typography>
    </ScreenContainer>
  );
}

const ledgerDescriptionScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary,
    paddingTop: 30,
  },
  text: {
    lineHeight: 39,
  },
});
