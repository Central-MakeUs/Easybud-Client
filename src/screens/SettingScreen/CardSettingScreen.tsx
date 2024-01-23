import {useState} from 'react';
import {StyleSheet} from 'react-native';
import ScreenContainer from 'components/@common/ScreenContainer';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import InputBottomSheet from 'components/@common/InputBottomSheet';
import BottomSheet from 'components/@common/BottomSheet';
import Typography from 'components/@common/Typography';
import CardSettingFixedButton from 'components/screens/SettingScreen/CardSettingFixedButton';

export default function CardSettingScreen() {
  const [cardName, setCardName] = useState('');
  const [cardInputText, setCardInputText] = useState('');
  const [isCardNameBottomSheetOpen, setIsCardNameBottomSheetOpen] =
    useState(false);
  const [startDate, _] = useState('1일~말일');
  const [isPeriodBottomSheetOpen, setIsPeriodBottomSheetOpen] = useState(false);
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isKeyNoteBottomSheetOpen, setIsKeyNoteBottomSheetOpen] =
    useState(false);

  const handlePressCardNameSelectItem = () =>
    setIsCardNameBottomSheetOpen(true);

  const handlePressPeriodSelectItem = () => {
    setIsPeriodBottomSheetOpen(true);
  };

  const handlePressKeyNoteSelectItem = () => {
    setIsKeyNoteBottomSheetOpen(true);
  };

  return (
    <ScreenContainer
      contentContainerStyle={cardSettingScreenStyles.contentContainer}
      fixedBottomComponent={
        <CardSettingFixedButton
          cardName={cardName}
          keyNoteText={keyNoteText}
          startDate={startDate}
        />
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
        handlePressSelectItem={handlePressPeriodSelectItem}
        value={startDate}
        placeholder="기간을 선택해주세요"
        bottomSheet={
          <BottomSheet
            isBottomSheetOpen={isPeriodBottomSheetOpen}
            setIsBottomSheetOpen={setIsPeriodBottomSheetOpen}
            children={
              <>
                <Typography>기간</Typography>
              </>
            }
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
