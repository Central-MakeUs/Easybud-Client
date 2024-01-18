import {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useRecoilValue} from 'recoil';
import {theme} from 'styles';
import {categoryState} from 'libs/recoil/states/category';
import {CategoryType} from 'libs/recoil/types/category';
import {addItemToCategoryList} from 'utils/addItemToCategoryList';
import Typography from 'components/@common/Typography';
import SelectFormBottomSheet from 'components/@common/SelectForm/SelectFormBottomSheet';

const dummyCategories = [
  {name: '현금', value: 'cash'},
  {name: '보통예금', value: 'ordinaryDeposit'},
  {name: '정기예금', value: 'fixedDeposit'},
  {name: '유가증권', value: 'securities'},
  {name: '기타유동자산', value: 'otherLiquidAssets'},
];

type SelectFormProps = {
  label: string;
  value: string;
  placeholder?: string;
  variant?: 'primary' | 'gray';
};

export default function SelectForm({
  label,
  value,
  placeholder,
  variant = 'gray',
}: SelectFormProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [categoryList, setCategoryList] = useState<CategoryType[]>([]);
  const selectedCategory = useRecoilValue(categoryState);

  useEffect(() => {
    const newCategoryList = addItemToCategoryList(dummyCategories, {
      name: '항목 추가',
      value: 'addCategory',
    });
    setCategoryList(newCategoryList);
  }, []);

  useEffect(() => {
    console.log(selectedCategory.name, selectedCategory.value);
  }, [selectedCategory]);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsBottomSheetOpen(true)}
        style={[
          selectFormStyles.container,
          {
            backgroundColor:
              variant === 'primary'
                ? theme.palette.primary
                : theme.palette.gray2,
          },
        ]}>
        <Typography
          type={'Body1Semibold'}
          color={variant === 'primary' ? 'white' : 'gray6'}>
          {label}
        </Typography>
        <Typography
          type={'Body1Semibold'}
          color={!value ? 'gray4' : variant === 'primary' ? 'white' : 'gray6'}>
          {value ?? placeholder}
        </Typography>
      </TouchableOpacity>
      <SelectFormBottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        setIsBottomSheetOpen={setIsBottomSheetOpen}
        label={label}
        categoryList={categoryList}
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
    paddingLeft: 21,
    paddingRight: 11,
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
