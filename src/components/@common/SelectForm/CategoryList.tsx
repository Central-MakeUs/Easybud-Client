import {FlatList, StyleSheet} from 'react-native';
import {CategoryType} from 'libs/recoil/types/category';
import CategoryListItem from 'components/@common/SelectForm/CategoryListItem';

export default function CategoryList({
  categoryList,
}: {
  categoryList: CategoryType[];
}) {
  return (
    <FlatList
      data={categoryList}
      renderItem={renderFlatListItem}
      style={selectFormStyles.bottomSheetDataListContainer}
    />
  );
}

function renderFlatListItem({item}: {item: CategoryType}) {
  return <CategoryListItem data={item} />;
}

const selectFormStyles = StyleSheet.create({
  bottomSheetDataListContainer: {
    width: '100%',
    height: '100%',
  },
});
