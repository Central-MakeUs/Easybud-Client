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

export default function AddCardScreen() {
  const [cardName, setCardName] = useState('');
  const [cardInputText, setCardInputText] = useState('');
  const [isCardNameBottomSheetOpen, setIsCardNameBottomSheetOpen] =
    useState(false);
  const [cardUsagePeriod, setCardUsagePeriod] = useState('');
  const [cardUsagePeriodList, setCardUsagePeriodList] = useState(
    cardUsagePeriodOptions ?? [],
  );
  const [
    isCardUsagePeriodBottomSheetOpen,
    setIsCardUsagePeriodBottomSheetOpen,
  ] = useState(false);
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentDateList, setPaymentDateList] = useState(
    paymentDateOptions ?? [],
  );
  const [isPaymentDatedBottomSheetOpen, setIsPaymentDatedBottomSheetOpen] =
    useState(false);
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isKeyNoteBottomSheetOpen, setIsKeyNoteBottomSheetOpen] =
    useState(false);

  const handlePressCardNameSelectItem = () =>
    setIsCardNameBottomSheetOpen(true);

  const handlePressKeyNoteSelectItem = () => {
    setIsKeyNoteBottomSheetOpen(true);
  };

  const handlePressCardUsagePeriodSelectItem = () =>
    setIsCardUsagePeriodBottomSheetOpen(true);

  const handlePressPaymentDateSelectItem = () => {
    setIsPaymentDatedBottomSheetOpen(true);
  };

  return (
    <ScreenContainer
      contentContainerStyle={cardSettingScreenStyles.contentContainer}
      fixedBottomComponent={
        <CardSettingFixedButton cardName={cardName} keyNoteText={keyNoteText} />
      }>
      <CommonSelectItem
        label={'카드명'}
        handlePressSelectItem={handlePressCardNameSelectItem}
        value={cardName}
        placeholder="카드명을 입력해주세요"
        bottomSheet={
          <InputBottomSheet
            isBottomSheetOpen={isCardNameBottomSheetOpen}
            setIsBottomSheetOpen={setIsCardNameBottomSheetOpen}
            placeholder="카드명을 입력해주세요"
            inputText={cardInputText}
            setText={setCardName}
            setInputText={setCardInputText}
          />
        }
      />
      <CommonSelectItem
        label={'사용 기간'}
        handlePressSelectItem={handlePressCardUsagePeriodSelectItem}
        value={cardUsagePeriod}
        placeholder={'사용 기간을 선택해주세요'}
        bottomSheet={
          <SelectFormBottomSheet
            label={'사용 기간'}
            categoryList={cardUsagePeriodList}
            setCategoryList={setCardUsagePeriodList}
            isBottomSheetOpen={isCardUsagePeriodBottomSheetOpen}
            setIsBottomSheetOpen={setIsCardUsagePeriodBottomSheetOpen}
            setValue={setCardUsagePeriod}
          />
        }
      />
      <CommonSelectItem
        label={'결제일'}
        handlePressSelectItem={handlePressPaymentDateSelectItem}
        value={paymentDate}
        placeholder={'결제일을 선택해주세요'}
        bottomSheet={
          <SelectFormBottomSheet
            label={'결제일'}
            categoryList={paymentDateList}
            setCategoryList={setPaymentDateList}
            isBottomSheetOpen={isPaymentDatedBottomSheetOpen}
            setIsBottomSheetOpen={setIsPaymentDatedBottomSheetOpen}
            setValue={setPaymentDate}
          />
        }
      />
      <CommonSelectItem
        label={'적요'}
        handlePressSelectItem={handlePressKeyNoteSelectItem}
        value={keyNoteText}
        placeholder={'적요를 입력해주세요'}
        bottomSheet={
          <InputBottomSheet
            isBottomSheetOpen={isKeyNoteBottomSheetOpen}
            setIsBottomSheetOpen={setIsKeyNoteBottomSheetOpen}
            placeholder="적요를 입력해주세요"
            inputText={keyNoteInputText}
            setText={setKeyNoteText}
            setInputText={setKeyNoteInputText}
          />
        }
      />
    </ScreenContainer>
  );
}

const cardSettingScreenStyles = StyleSheet.create({
  contentContainer: {
    gap: 10,
  },
});
