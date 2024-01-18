import {FlatList, StyleSheet} from 'react-native';
import CategoryListItem from 'components/@common/SelectForm/CategoryListItem';
import {CategoryData} from 'components/@common/SelectForm/SelectFormBottomSheet';

export default function CategoryList({
  categoryList,
}: {
  categoryList: CategoryData[];
}) {
  const renderFlatListItem = ({item}: {item: CategoryData}) => (
    <CategoryListItem data={item} />
  );

  return (
    <FlatList
      data={categoryList}
      renderItem={renderFlatListItem}
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
