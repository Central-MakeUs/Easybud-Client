import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {cardUsagePeriodOptions} from 'constants/screens/SettingScreen';
import ScreenContainer from 'components/@common/ScreenContainer';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import InputBottomSheet from 'components/@common/InputBottomSheet';
import CardSettingFixedButton from 'components/screens/SettingScreen/CardSettingFixedButton';
import SelectForm from 'components/@common/SelectForm';

export default function CardSettingScreen() {
  const [cardName, setCardName] = useState('');
  const [cardInputText, setCardInputText] = useState('');
  const [isCardNameBottomSheetOpen, setIsCardNameBottomSheetOpen] =
    useState(false);
  const [cardUsagePeriodList, setCardUsagePeriodList] = useState(
    cardUsagePeriodOptions ?? [],
  );
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isKeyNoteBottomSheetOpen, setIsKeyNoteBottomSheetOpen] =
    useState(false);

  const handlePressCardNameSelectItem = () =>
    setIsCardNameBottomSheetOpen(true);

  const handlePressKeyNoteSelectItem = () => {
    setIsKeyNoteBottomSheetOpen(true);
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
      <SelectForm
        label={'사용 기간'}
        placeholder="사용 기간을 선택해주세요"
        categoryList={cardUsagePeriodList}
        setCategoryList={setCardUsagePeriodList}
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
