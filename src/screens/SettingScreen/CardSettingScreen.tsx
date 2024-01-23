import {useState} from 'react';
import ScreenContainer from 'components/@common/ScreenContainer';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import InputBottomSheet from 'components/@common/InputBottomSheet';

export default function CardSettingScreen() {
  const [cardName, setCardName] = useState('');
  const [cardInputText, setCardInputText] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <ScreenContainer contentContainerStyle={{gap: 10}}>
      <CommonSelectItem
        label={'카드명'}
        variant={'gray'}
        handlePressSelectItem={() => setIsBottomSheetOpen(true)}
        value={cardName}
        placeholder="카드명을 입력해주세요"
        bottomSheet={
          <InputBottomSheet
            isBottomSheetOpen={isBottomSheetOpen}
            setIsBottomSheetOpen={setIsBottomSheetOpen}
            placeholder="카드명을 입력해주세요"
            inputText={cardInputText}
            setText={setCardName}
            setInputText={setCardInputText}
          />
        }
      />
      <CommonSelectItem
        label={'기간'}
        variant={'gray'}
        handlePressSelectItem={() => {}}
        value={''}
        placeholder="기간을 선택해주세요"
        bottomSheet={undefined}
      />
      <CommonSelectItem
        label={'적요'}
        variant={'gray'}
        handlePressSelectItem={() => {}}
        value=""
        placeholder={'적요를 입력해주세요'}
        bottomSheet={undefined}
      />
    </ScreenContainer>
  );
}
