import {Dispatch, SetStateAction, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {theme} from 'styles';
import Typography from 'components/@common/Typography';
import CategoryList from 'components/@common/SelectForm/CategoryList';
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
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
  setValue: Dispatch<SetStateAction<string>>;
};

export default function SelectFormBottomSheet({
  label,
  categoryList,
  isBottomSheetOpen,
  setIsBottomSheetOpen,
  setValue,
}: SelectFormBottomSheetProps) {
  useFocusEffect(
    useCallback(() => {
      setValue('');
    }, [setValue]),
  );

  const calculateBottomSheetHeight = () =>
    categoryList.length >= 4 ? 270 : 200;

  return (
    <BottomSheet
      isBottomSheetOpen={isBottomSheetOpen}
      setIsBottomSheetOpen={setIsBottomSheetOpen}
      height={calculateBottomSheetHeight()}
      children={renderBottomSheetChildren({
        label,
        categoryList,
        setValue,
        setIsBottomSheetOpen,
      })}
    />
  );
}

export type RenderBottomSheetChildrenParamsType = {
  label: string;
  categoryList: SelectFormBottomSheetProps['categoryList'];
  setValue: SelectFormBottomSheetProps['setValue'];
  setIsBottomSheetOpen: SelectFormBottomSheetProps['setIsBottomSheetOpen'];
};

function renderBottomSheetChildren({
  label,
  categoryList,
  setValue,
  setIsBottomSheetOpen,
}: RenderBottomSheetChildrenParamsType) {
  return (
    <View style={selectFormStyles.bottomSheetContainer}>
      <View style={selectFormStyles.bottomSheetLabelContainer}>
        <Typography color={'gray6'} type={'Body1Semibold'}>
          {label}
        </Typography>
      </View>
      <CategoryList
        categoryList={categoryList}
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
