import {FlatList, StyleSheet} from 'react-native';
import {
  RenderBottomSheetChildrenParamsType,
  SelectFormBottomSheetProps,
} from 'components/@common/SelectForm/SelectFormBottomSheet';
import CategoryListItem from 'components/@common/SelectForm/CategoryListItem';

/**
 * @param categoryList 카테고리 목록 배열
 * @param setInputState input 상태를 변경하는 함수
 * @param setValue selectedCategory 값을 변경하는 함수
 * @param setIsBottomSheetOpen bottomSheet open 여부를 변경하는 함수
 */
export type CategoryListProps = {
  categoryList: SelectFormBottomSheetProps['categoryList'];
  setInputState: RenderBottomSheetChildrenParamsType['setInputState'];
  setValue: SelectFormBottomSheetProps['setValue'];
  setIsBottomSheetOpen: SelectFormBottomSheetProps['setIsBottomSheetOpen'];
};

export default function CategoryList({
  categoryList,
  setInputState,
  setValue,
  setIsBottomSheetOpen,
}: CategoryListProps) {
  return (
    <FlatList
      data={categoryList}
      renderItem={({item}) => (
        <CategoryListItem
          categoryName={item}
          setInputState={setInputState}
          setValue={setValue}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
        />
      )}
      style={selectFormStyles.bottomSheetDataListContainer}
    />
  );
}

const selectFormStyles = StyleSheet.create({
  bottomSheetDataListContainer: {
    width: '100%',
    height: '100%',
  },
});
