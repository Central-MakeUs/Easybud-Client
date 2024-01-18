import {Dispatch, SetStateAction, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SetterOrUpdater, useRecoilState, useSetRecoilState} from 'recoil';
import {theme} from 'styles';
import {categoryState} from 'libs/recoil/states/category';
import {CategoryType} from 'libs/recoil/types/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import BottomSheet from 'components/@common/BottomSheet';
import Typography from 'components/@common/Typography';
import CategoryList from 'components/@common/SelectForm/CategoryList';
import TextArea from 'components/@common/KeyNote/TextArea';
import Button from 'components/@common/Buttons/Button';

type SelectFormBottomSheetProps = {
  label: string;
  categoryList: CategoryType[];
  setCategoryList: Dispatch<SetStateAction<CategoryType[]>>;
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

  return (
    <BottomSheet
      isBottomSheetOpen={isBottomSheetOpen}
      setIsBottomSheetOpen={setIsBottomSheetOpen}
      height={270}
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
  categoryList: CategoryType[];
  inputState: boolean;
  inputText: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  setInputState: Dispatch<SetStateAction<boolean>>;
  setInputText: Dispatch<SetStateAction<string>>;
  setCategoryList: Dispatch<SetStateAction<CategoryType[]>>;
  setIsBottomSheetOpen: SetterOrUpdater<boolean>;
}) {
  return inputState ? (
    <View style={selectFormStyles.addCategoryBottomSheetContainer}>
      <TextArea setText={setInputText} />
      <Button
        onPress={() => {
          setCategoryList(prevCategoryList => [
            ...prevCategoryList.slice(0, -1),
            inputText,
            '항목 추가',
          ]);
          setSelectedCategory(inputText);
          setIsBottomSheetOpen(false);
          setInputState(false);
        }}>
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
    height: '100%',
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
