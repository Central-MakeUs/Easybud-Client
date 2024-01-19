import {Dispatch, SetStateAction} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CategoryType} from 'libs/recoil/types/category';
import CategoryListItem from 'components/@common/SelectForm/CategoryListItem';

/**
 * @param categoryList 카테고리 목록 배열
 * @param setInputState input 상태를 변경하는 함수
 */
export default function CategoryList({
  categoryList,
  setInputState,
}: {
  categoryList: CategoryType[];
  setInputState: Dispatch<SetStateAction<boolean>>;
}) {
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
