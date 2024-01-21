import {Dispatch, SetStateAction} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CategoryListItem from 'components/@common/SelectForm/CategoryListItem';

/**
 * @param categoryList 카테고리 목록 배열
 * @param setInputState input 상태를 변경하는 함수
 */
export type CategoryListProps = {
  categoryList: string[];
  setInputState: Dispatch<SetStateAction<boolean>>;
};

export default function CategoryList({
  categoryList,
  setInputState,
}: CategoryListProps) {
  return (
    <FlatList
      data={categoryList}
      renderItem={({item}) => (
        <CategoryListItem categoryName={item} setInputState={setInputState} />
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
