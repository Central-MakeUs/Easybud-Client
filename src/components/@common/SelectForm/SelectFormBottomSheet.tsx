import {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from 'styles';
import {AddCategoryText} from 'constants/components/SelectForm';
import Typography from 'components/@common/Typography';
import CategoryList from 'components/@common/SelectForm/CategoryList';
import TextArea from 'components/@common/TextArea';
import Button from 'components/@common/Buttons/Button';
import {SelectFormProps} from 'components/@common/SelectForm';
import BottomSheet from 'components/@common/BottomSheet/BottomSheet';

/**
 * @param label label 텍스트
 * @param categoryList 카테고리
 * @param setCategoryList SelectForm 종류 'primary' | 'gray'
 * @param isBottomSheetOpen bottomSheet open여부
 * @param setIsBottomSheetOpen bottomSheet open여부를 변경하는 함수
 * @param setValue selectedCategory를 변경하는 함수
 */
export type SelectFormBottomSheetProps = {
  label: SelectFormProps['label'];
  categoryList: string[];
  setCategoryList: (list: string[]) => void;
  onOpen: () => void;
  onClose: () => void;
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
  setValue: (text: string) => void;
};

export default function SelectFormBottomSheet({
  label,
  categoryList,
  setCategoryList,
  isBottomSheetOpen,
  onOpen,
  onClose,
  setIsBottomSheetOpen,
  setValue,
}: SelectFormBottomSheetProps) {
  const [inputState, setInputState] = useState(false);
  const [inputText, setInputText] = useState('');

  const calculateBottomSheetHeight = () =>
    categoryList.length >= 4 ? 270 : 200;

  return (
    <BottomSheet
      isBottomSheetOpen={isBottomSheetOpen}
      onClose={onClose}
      onOpen={onOpen}
      height={calculateBottomSheetHeight()}
      setInputState={setInputState}>
      {renderBottomSheetChildren({
        label,
        categoryList,
        inputState,
        inputText,
        setValue,
        setInputState,
        setInputText,
        setCategoryList,
        setIsBottomSheetOpen,
      })}
    </BottomSheet>
  );
}

export type RenderBottomSheetChildrenParamsType = {
  inputState: boolean;
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  setInputState: Dispatch<SetStateAction<boolean>>;
} & Pick<
  SelectFormBottomSheetProps,
  | 'label'
  | 'setValue'
  | 'categoryList'
  | 'setCategoryList'
  | 'setIsBottomSheetOpen'
>;

function renderBottomSheetChildren({
  label,
  categoryList,
  inputState,
  inputText,
  setValue,
  setInputState,
  setInputText,
  setCategoryList,
  setIsBottomSheetOpen,
}: RenderBottomSheetChildrenParamsType) {
  const handlePressAddCategoryButton = () => {
    if (inputText.length) {
      setCategoryList([
        ...categoryList.slice(0, -1),
        inputText,
        AddCategoryText,
      ]);
      setValue(inputText);
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
        항목 추가
      </Button>
    </View>
  ) : (
    <View style={selectFormStyles.bottomSheetContainer}>
      <View style={selectFormStyles.bottomSheetLabelContainer}>
        <Typography color={'gray6'} type={'Body1Semibold'}>
          {label}
        </Typography>
      </View>
      <CategoryList
        categoryList={categoryList}
        setInputState={setInputState}
        setValue={setValue}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
      />
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
