import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import {CategoryData} from 'components/@common/SelectForm/SelectFormBottomSheet';
import Typography from 'components/@common/Typography';

export default function CategoryListItem({data}: {data: CategoryData}) {
  return (
    <TouchableOpacity style={categoryListItemStyles.container}>
      <Typography type={'Body1Semibold'} color={'black'}>
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
