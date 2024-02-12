import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import {AddCategoryText} from 'constants/components/SelectForm';
import Typography from 'components/@common/Typography';
import {
  RenderBottomSheetChildrenParamsType,
  SelectFormBottomSheetProps,
} from 'components/@common/SelectForm/SelectFormBottomSheet';

/**
 * @param categoryName 카테고리명
 * @param setInputState input 상태를 변경하는 함수
 * @param setValue selectedCategory를 변경하는 함수
 * @param setIsBottomSheetOpen bottomSheet open여부를 변경하는 함수
 */
type CategoryListItemProps = {
  categoryName: string;
  setInputState: RenderBottomSheetChildrenParamsType['setInputState'];
  setValue: SelectFormBottomSheetProps['setValue'];
  setIsBottomSheetOpen: SelectFormBottomSheetProps['setIsBottomSheetOpen'];
};

export default function CategoryListItem({
  categoryName,
  setInputState,
  setValue,
  setIsBottomSheetOpen,
}: CategoryListItemProps) {
  const handlePressCategoryItem = () => {
    if (categoryName === AddCategoryText) {
      setInputState(true);
    } else {
      setInputState(false);
      setIsBottomSheetOpen(false);
      setValue(categoryName);
    }
  };

  return (
    <TouchableOpacity
      style={categoryListItemStyles.container}
      onPress={handlePressCategoryItem}>
      <Typography
        type={categoryName === AddCategoryText ? 'Body1Bold' : 'Body1Semibold'}
        color={categoryName === AddCategoryText ? 'blue' : 'black'}>
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
