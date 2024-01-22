import {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {AddCategoryText, CategoryName} from 'constants/SelectForm';
import {categoryState} from 'libs/recoil/states/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import {addItemToCategoryList} from 'utils/addItemToCategoryList';
import SelectFormBottomSheet from 'components/@common/SelectForm/SelectFormBottomSheet';
import InputForm from 'components/@common/InputForm';
import {TouchableOpacity} from 'react-native';

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
 */
type SelectFormProps = {
  label: string;
  placeholder?: string;
};

export default function SelectForm({label, placeholder}: SelectFormProps) {
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
    <>
      <TouchableOpacity onPress={handlePressCategoryItem}>
        <InputForm
          label={label}
          value={selectedCategory}
          placeholder={placeholder}
        />
      </TouchableOpacity>
      <SelectFormBottomSheet
        label={label}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      />
    </>
  );
}
