import {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {AddCategoryText, CategoryName} from 'constants/components/SelectForm';
import {categoryState} from 'libs/recoil/states/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import {addItemToCategoryList} from 'utils/addItemToCategoryList';
import SelectFormBottomSheet from 'components/@common/SelectForm/SelectFormBottomSheet';
import CommonSelectItem from 'components/@common/CommonSelectItem';

const dummyCategories = [
  '현금',
  '보통예금',
  '정기예금',
  '유가증권',
  '기타유동자산',
];

/**
 * @param label label 텍스트
 * @param placeholder placeholder 텍스트
 * @param variant SelectForm 종류를 나타냄 'primary' | 'gray'
 */
export type SelectFormProps = {
  label: string;
  placeholder?: string;
  variant?: 'primary' | 'gray';
};

export default function SelectForm({
  label,
  placeholder,
  variant = 'gray',
}: SelectFormProps) {
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const selectedCategory = useRecoilValue(categoryState);
  const setIsBottomSheetOpen = useSetRecoilState(selectFormBottomSheetState);

  useEffect(() => {
    if (label !== CategoryName.primary && label !== CategoryName.secondary) {
      const newCategoryList = addItemToCategoryList(
        dummyCategories,
        AddCategoryText,
      );

      setCategoryList(newCategoryList);
    } else {
      setCategoryList(dummyCategories);
    }
  }, [label]);

  const handlePressCategoryItem = () => setIsBottomSheetOpen(true);

  return (
    <CommonSelectItem
      label={label}
      variant={variant}
      handlePressSelectItem={handlePressCategoryItem}
      value={selectedCategory}
      placeholder={placeholder}
      bottomSheet={
        <SelectFormBottomSheet
          label={label}
          categoryList={categoryList}
          setCategoryList={setCategoryList}
        />
      }
    />
  );
}
