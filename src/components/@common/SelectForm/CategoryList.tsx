import {Dispatch, SetStateAction} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CategoryType} from 'libs/recoil/types/category';
import CategoryListItem from 'components/@common/SelectForm/CategoryListItem';

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
        <CategoryListItem data={item} setInputState={setInputState} />
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
