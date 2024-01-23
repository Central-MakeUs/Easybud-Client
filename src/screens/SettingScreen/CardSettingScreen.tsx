import {useState} from 'react';
import ScreenContainer from 'components/@common/ScreenContainer';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import InputBottomSheet from 'components/@common/InputBottomSheet';
import BottomSheet from 'components/@common/BottomSheet';
import Typography from 'components/@common/Typography';

export default function CardSettingScreen() {
  const [cardName, setCardName] = useState('');
  const [cardInputText, setCardInputText] = useState('');
  const [isCardNameBottomSheetOpen, setIsCardNameBottomSheetOpen] =
    useState(false);
  const [startDate, setStartDate] = useState('1일~말일');
  const [isPeriodBottomSheetOpen, setIsPeriodBottomSheetOpen] = useState(false);
  const [keyNoteText, setKeyNoteText] = useState('');
  const [keyNoteInputText, setKeyNoteInputText] = useState('');
  const [isKeyNoteBottomSheetOpen, setIsKeyNoteBottomSheetOpen] =
    useState(false);

  return (
    <ScreenContainer contentContainerStyle={{gap: 10}}>
      <CommonSelectItem
        label={'카드명'}
        variant={'gray'}
        handlePressSelectItem={() => setIsCardNameBottomSheetOpen(true)}
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
        variant={'gray'}
        handlePressSelectItem={() => {
          setIsPeriodBottomSheetOpen(true);
        }}
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
        variant={'gray'}
        handlePressSelectItem={() => {
          setIsKeyNoteBottomSheetOpen(true);
        }}
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
