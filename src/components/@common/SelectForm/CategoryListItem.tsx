import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import Typography from 'components/@common/Typography';
import {SelectFormBottomSheetProps} from 'components/@common/SelectForm/SelectFormBottomSheet';

/**
 * @param categoryName 카테고리명
 * @param setInputState input 상태를 변경하는 함수
 * @param setValue selectedCategory를 변경하는 함수
 * @param setIsBottomSheetOpen bottomSheet open여부를 변경하는 함수
 */
type CategoryListItemProps = {
  categoryName: string;
  setValue: SelectFormBottomSheetProps['setValue'];
  setIsBottomSheetOpen: SelectFormBottomSheetProps['setIsBottomSheetOpen'];
};

export default function CategoryListItem({
  categoryName,
  setValue,
  setIsBottomSheetOpen,
}: CategoryListItemProps) {
  const handlePressCategoryItem = () => {
    setIsBottomSheetOpen(false);
    setValue(categoryName);
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
