import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {theme} from 'styles';
import {AddCategoryText} from 'constants/components/SelectForm';
import {categoryState} from 'libs/recoil/states/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import Typography from 'components/@common/Typography';
import {CategoryListProps} from 'components/@common/SelectForm/CategoryList';

/**
 * @param categoryName 카테고리명
 * @param setInputState input 상태를 변경하는 함수
 */
type CategoryListItemProps = {
  categoryName: string;
  setInputState: CategoryListProps['setInputState'];
};

export default function CategoryListItem({
  categoryName,
  setInputState,
}: CategoryListItemProps) {
  const setIsBottomSheetOpen = useSetRecoilState(selectFormBottomSheetState);
  const setSelectedCategory = useSetRecoilState(categoryState);

  const handlePressCategoryItem = () => {
    if (categoryName === AddCategoryText) {
      setInputState(true);
    } else {
      setInputState(false);
      setIsBottomSheetOpen(false);
      setSelectedCategory(categoryName);
    }
  };

  return (
    <TouchableOpacity
      style={categoryListItemStyles.container}
      onPress={handlePressCategoryItem}>
      <Typography type={'Body1Semibold'} color={'black'}>
        {categoryName}
      </Typography>
    </TouchableOpacity>
  );
}

const categoryListItemStyles = StyleSheet.create({
  container: {
    borderBottomColor: theme.palette.gray3,
    borderBottomWidth: 1,
    padding: 20,
  },
});
