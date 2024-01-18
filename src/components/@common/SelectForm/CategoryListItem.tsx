import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {theme} from 'styles';
import {CategoryType} from 'libs/recoil/types/category';
import {categoryState} from 'libs/recoil/states/category';
import Typography from 'components/@common/Typography';

export default function CategoryListItem({data}: {data: CategoryType}) {
  const setSelectedCategory = useSetRecoilState(categoryState);

  return (
    <TouchableOpacity style={categoryListItemStyles.container}>
      <Typography
        type={'Body1Semibold'}
        color={'black'}
        onPress={() =>
          setSelectedCategory({name: data.name, value: data.value})
        }>
        {data.name}
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
