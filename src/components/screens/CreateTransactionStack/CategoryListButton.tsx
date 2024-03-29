import InputForm from 'components/@common/InputForm';
import useGetCategoryList from 'hooks/queries/AccountCategoryScreen/useGetCategoryList';
import {find} from 'lodash';
import React, {useMemo} from 'react';
import {AccountCategory} from 'types/account';
import {
  PrimaryCategory,
  SecondaryCategory,
  TertiaryCategory,
} from 'types/components/Transaction';

type CategoryListButtonProps = {category: AccountCategory; onPress: () => void};

export default function CategoryListButton({
  category,
  onPress,
}: CategoryListButtonProps) {
  const {data: categoryList} = useGetCategoryList();

  const label = useMemo(() => {
    if (!categoryList) {
      return '';
    }

    const primary = find(categoryList, {
      id: category.primaryId,
    }) as PrimaryCategory;

    if (primary) {
      const secondary = find(primary.subList, {
        id: category.secondaryId,
      }) as SecondaryCategory;

      const tertiary = find(secondary.subList, {
        id: category.tertiaryId,
      }) as TertiaryCategory;

      return `${primary.name} > ${secondary.name} > ${tertiary.name}`;
    }

    return '카테고리 설정에 문제가 있습니다.';
  }, [
    categoryList,
    category.primaryId,
    category.secondaryId,
    category.tertiaryId,
  ]);

  return (
    <InputForm
      size="sm"
      label="분류"
      editIcon
      value={label}
      onPress={onPress}
    />
  );
}
