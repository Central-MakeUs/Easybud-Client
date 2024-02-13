import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  cardUsagePeriodOptions,
  paymentDateOptions,
} from 'constants/screens/SettingScreen';
import ScreenContainer from 'components/@common/ScreenContainer';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import InputBottomSheet from 'components/@common/InputBottomSheet';
import CardSettingFixedButton from 'components/screens/SettingScreen/CardSettingFixedButton';
import SelectFormBottomSheet from 'components/@common/SelectForm/SelectFormBottomSheet';

const enum BottomSheetType {
  CardName,
  CardUsagePeriod,
  Payment,
  KeyNote,
}

type UpdatedCardType = {
  cardName: string;
  cardUsagePeriod: string;
  cardUsagePeriodList: string[];
  paymentDateList: string[];
  paymentDate: string;
  keyNoteText: string;
};

export default function AddCardScreen() {
  const [bottomSheet, setBottomSheet] = useState<BottomSheetType | null>(null);
  const closeBottomSheet = () => setBottomSheet(null);

  const [card, setCard] = useState<UpdatedCardType>({
    cardName: '',
    cardUsagePeriod: '',
    cardUsagePeriodList: cardUsagePeriodOptions ?? [],
    paymentDate: '',
    paymentDateList: paymentDateOptions ?? [],
    keyNoteText: '',
  });

  return (
    <ScreenContainer
      contentContainerStyle={cardSettingScreenStyles.contentContainer}
      fixedBottomComponent={
        <CardSettingFixedButton
          cardName={card.cardName}
          keyNoteText={card.keyNoteText}
          cardUsagePeriod={card.cardUsagePeriod}
          paymentDate={card.paymentDate}
        />
      }>
      <CommonSelectItem
        label={'카드명'}
        onPress={() => setBottomSheet(BottomSheetType.CardName)}
        value={card.cardName}
        placeholder="카드명을 입력해주세요"
        bottomSheet={
          <InputBottomSheet
            text={card.cardName}
            setText={cardName => setCard(prev => ({...prev, cardName}))}
            isOpen={bottomSheet === BottomSheetType.CardName}
            onOpen={() => setBottomSheet(BottomSheetType.CardName)}
            onClose={closeBottomSheet}
            placeholder="카드명을 입력해주세요"
          />
        }
      />
      <CommonSelectItem
        label={'사용 기간'}
        onPress={() => setBottomSheet(BottomSheetType.CardUsagePeriod)}
        value={card.cardUsagePeriod}
        placeholder={'사용 기간을 선택해주세요'}
        bottomSheet={
          <SelectFormBottomSheet
            label={'사용 기간'}
            categoryList={card.cardUsagePeriodList}
            addCategory={console.log}
            isBottomSheetOpen={bottomSheet === BottomSheetType.CardUsagePeriod}
            setIsBottomSheetOpen={closeBottomSheet}
            onOpen={() => setBottomSheet(BottomSheetType.CardUsagePeriod)}
            onClose={closeBottomSheet}
            setValue={cardUsagePeriod =>
              setCard(prev => ({...prev, cardUsagePeriod}))
            }
          />
        }
      />
      <CommonSelectItem
        label={'결제일'}
        onPress={() => setBottomSheet(BottomSheetType.Payment)}
        value={card.paymentDate}
        placeholder={'결제일을 선택해주세요'}
        bottomSheet={
          <SelectFormBottomSheet
            label={'결제일'}
            categoryList={card.paymentDateList}
            addCategory={console.log}
            isBottomSheetOpen={bottomSheet === BottomSheetType.Payment}
            setIsBottomSheetOpen={closeBottomSheet}
            onOpen={() => setBottomSheet(BottomSheetType.Payment)}
            onClose={closeBottomSheet}
            setValue={paymentDate => setCard(prev => ({...prev, paymentDate}))}
          />
        }
      />
      <CommonSelectItem
        label={'적요'}
        onPress={() => setBottomSheet(BottomSheetType.KeyNote)}
        value={card.keyNoteText}
        placeholder={'적요를 입력해주세요'}
        bottomSheet={
          <InputBottomSheet
            text={card.keyNoteText}
            setText={keyNoteText => setCard(prev => ({...prev, keyNoteText}))}
            isOpen={bottomSheet === BottomSheetType.KeyNote}
            onOpen={() => setBottomSheet(BottomSheetType.KeyNote)}
            onClose={closeBottomSheet}
            placeholder="적요를 입력해주세요"
          />
        }
      />
    </ScreenContainer>
  );
}

const cardSettingScreenStyles = StyleSheet.create({
  contentContainer: {
    paddingTop: 10,
    gap: 10,
  },
});
