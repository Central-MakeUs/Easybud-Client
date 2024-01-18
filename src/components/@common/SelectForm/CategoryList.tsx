import CategoryListItem from 'components/@common/SelectForm/CategoryListItem';
import {FlatList} from 'react-native';

export default function CategoryList({
  categoryList,
}: {
  categoryList: unknown[];
}) {
  return (
    <FlatList
      data={categoryList}
      renderItem={({item}) => <CategoryListItem data={item} />}
    />
  );
}
