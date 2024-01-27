import {useState, useEffect} from 'react';
import {addItemToCategoryList} from 'utils/addItemToCategoryList';
import {CategoryName, AddCategoryText} from 'constants/components/SelectForm';

export const useCategoryList = (
  label: string,
  defaultCategoryList: string[],
) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    if (label !== CategoryName.primary && label !== CategoryName.secondary) {
      const newCategoryList = addItemToCategoryList(
        defaultCategoryList,
        AddCategoryText,
      );

      setCategoryList(newCategoryList);
    } else {
      setCategoryList(defaultCategoryList);
    }
  }, [defaultCategoryList, label]);

  return {categoryList, setCategoryList};
};
