import {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {theme} from 'styles';
import {themeVariants} from 'constants/SelectForm';
import {categoryState} from 'libs/recoil/states/category';
import {CategoryType} from 'libs/recoil/types/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import {addItemToCategoryList} from 'utils/addItemToCategoryList';
import Typography from 'components/@common/Typography';
import SelectFormBottomSheet from 'components/@common/SelectForm/SelectFormBottomSheet';

const dummyCategories = [
  '현금',
  '보통예금',
  '정기예금',
  '유가증권',
  '기타유동자산',
];

type SelectFormProps = {
  label: string;
  placeholder?: string;
  variant?: 'primary' | 'gray';
};

export default function SelectForm({
  label,
  placeholder,
  variant = 'gray',
}: SelectFormProps) {
  const setIsBottomSheetOpen = useSetRecoilState(selectFormBottomSheetState);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const selectedCategory = useRecoilValue(categoryState);

  useEffect(() => {
    if (label !== '대분류' && label !== '중분류') {
      const newCategoryList = addItemToCategoryList(
        dummyCategories,
        '항목 추가',
      );

      setCategoryList(newCategoryList);
    } else {
      setCategoryList(dummyCategories);
    }
  }, [label]);

  const handlePressCategoryItem = () => setIsBottomSheetOpen(true);

  const {
    backgroundColor,
    labelTextColor,
    valueTextColor,
    placeholderTextColor,
  } = themeVariants[variant];

  return (
    <>
      <TouchableOpacity
        onPress={handlePressCategoryItem}
        style={[selectFormStyles.container, {backgroundColor}]}>
        <Typography type={'Body1Semibold'} color={labelTextColor}>
          {label}
        </Typography>
        <Typography
          type={'Body1Semibold'}
          color={selectedCategory ? valueTextColor : placeholderTextColor}>
          {selectedCategory || placeholder}
        </Typography>
      </TouchableOpacity>
      <SelectFormBottomSheet
        label={label}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      />
    </>
  );
}

const selectFormStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 49,
    borderRadius: 18,
    backgroundColor: theme.palette.gray2,
    paddingHorizontal: 21,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
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
