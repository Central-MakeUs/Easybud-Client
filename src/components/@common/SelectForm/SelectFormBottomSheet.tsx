import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SetterOrUpdater, useRecoilState, useSetRecoilState} from 'recoil';
import {theme} from 'styles';
import {categoryState} from 'libs/recoil/states/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import {AddCategoryText} from 'constants/SelectForm';
import BottomSheet from 'components/@common/BottomSheet';
import Typography from 'components/@common/Typography';
import CategoryList from 'components/@common/SelectForm/CategoryList';
import TextArea from 'components/@common/TextArea';
import Button from 'components/@common/buttons/Button';

/**
 * @param label label 텍스트
 * @param categoryList 카테고리
 * @param setCategoryList SelectForm 종류를 나타냄 'primary' | 'gray'
 */
type SelectFormBottomSheetProps = {
  label: string;
  categoryList: string[];
  setCategoryList: Dispatch<SetStateAction<string[]>>;
};

export default function SelectFormBottomSheet({
  label,
  categoryList,
  setCategoryList,
}: SelectFormBottomSheetProps) {
  const [inputState, setInputState] = useState(false);
  const [inputText, setInputText] = useState('');

  const setSelectedCategory = useSetRecoilState(categoryState);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useRecoilState(
    selectFormBottomSheetState,
  );

  useEffect(() => {
    setInputText('');
  }, [isBottomSheetOpen]);

  const calculateBottomSheetHeight = () =>
    categoryList.length >= 4 ? 270 : 200;

  return (
    <BottomSheet
      isBottomSheetOpen={isBottomSheetOpen}
      setIsBottomSheetOpen={setIsBottomSheetOpen}
      height={calculateBottomSheetHeight()}
      setInputState={setInputState}
      children={renderBottomSheetChildren({
        label,
        categoryList,
        inputState,
        inputText,
        setSelectedCategory,
        setInputState,
        setInputText,
        setCategoryList,
        setIsBottomSheetOpen,
      })}
    />
  );
}

function renderBottomSheetChildren({
  label,
  categoryList,
  inputState,
  inputText,
  setSelectedCategory,
  setInputState,
  setInputText,
  setCategoryList,
  setIsBottomSheetOpen,
}: {
  label: string;
  categoryList: string[];
  inputState: boolean;
  inputText: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  setInputState: Dispatch<SetStateAction<boolean>>;
  setInputText: Dispatch<SetStateAction<string>>;
  setCategoryList: Dispatch<SetStateAction<string[]>>;
  setIsBottomSheetOpen: SetterOrUpdater<boolean>;
}) {
  const handlePressAddCategoryButton = () => {
    if (inputText.length) {
      setCategoryList(prevCategoryList => [
        ...prevCategoryList.slice(0, -1),
        inputText,
        AddCategoryText,
      ]);
      setSelectedCategory(inputText);
      setIsBottomSheetOpen(false);
      setInputState(false);
    }
  };

  const height = categoryList.length >= 4 ? '50%' : '70%';

  return inputState ? (
    <View style={[selectFormStyles.addCategoryBottomSheetContainer, {height}]}>
      <TextArea setText={setInputText} placeholder="추가할 항목을 작성하세요" />
      <Button
        onPress={handlePressAddCategoryButton}
        disabled={!inputText.length}>
        항목 추가하기
      </Button>
    </View>
  ) : (
    <View style={selectFormStyles.bottomSheetContainer}>
      <View style={selectFormStyles.bottomSheetLabelContainer}>
        <Typography color={'gray6'} type={'Body1Semibold'}>
          {label}
        </Typography>
      </View>
      <CategoryList categoryList={categoryList} setInputState={setInputState} />
    </View>
  );
}

const selectFormStyles = StyleSheet.create({
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  addCategoryBottomSheetContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bottomSheetDataListContainer: {
    width: '100%',
    height: '100%',
  },
  bottomSheetLabelContainer: {
    width: '100%',
    height: 55,
    paddingTop: 15,
    borderBottomColor: theme.palette.gray3,
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
