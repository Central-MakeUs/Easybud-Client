import {useRecoilValue, useSetRecoilState} from 'recoil';
import {categoryState} from 'libs/recoil/states/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import SelectFormBottomSheet from 'components/@common/SelectForm/SelectFormBottomSheet';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import {Dispatch, SetStateAction} from 'react';
// import {useCategoryList} from 'hooks/useCategoryList';

// const dummyCategories = [
//   '현금',
//   '보통예금',
//   '정기예금',
//   '유가증권',
//   '기타유동자산',
// ];

// const {categoryList, setCategoryList} = useCategoryList(label, dummyCategories); 기본 셀렉트 폼 props로 내려줘야하는 부분

/**
 * @param label label 텍스트
 * @param placeholder placeholder 텍스트
 * @param variant SelectForm 종류를 나타냄 'primary' | 'gray'
 */
export type SelectFormProps = {
  label: string;
  placeholder?: string;
  variant?: 'primary' | 'gray';
  categoryList: string[];
  setCategoryList: Dispatch<SetStateAction<string[]>>;
};

export default function SelectForm({
  label,
  placeholder,
  variant = 'gray',
  categoryList,
  setCategoryList,
}: SelectFormProps) {
  const selectedCategory = useRecoilValue(categoryState);
  const setIsBottomSheetOpen = useSetRecoilState(selectFormBottomSheetState);

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
