import {Dispatch, SetStateAction} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {theme} from 'styles';
import {CategoryType} from 'libs/recoil/types/category';
import {categoryState} from 'libs/recoil/states/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import Typography from 'components/@common/Typography';

export default function CategoryListItem({
  data,
  setInputState,
}: {
  data: CategoryType;
  setInputState: Dispatch<SetStateAction<boolean>>;
}) {
  const setIsBottomSheetOpen = useSetRecoilState(selectFormBottomSheetState);
  const setSelectedCategory = useSetRecoilState(categoryState);

  const handlePressCategoryItem = () => {
    if (data === '항목 추가') {
      setInputState(true);
    } else {
      setInputState(false);
      setSelectedCategory(data);
      setIsBottomSheetOpen(false);
    }
  };

  return (
    <TouchableOpacity
      style={categoryListItemStyles.container}
      onPress={handlePressCategoryItem}>
      <Typography type={'Body1Semibold'} color={'black'}>
        {data}
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
