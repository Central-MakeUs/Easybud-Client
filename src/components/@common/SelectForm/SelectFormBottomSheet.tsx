import {View, StyleSheet} from 'react-native';
import {useRecoilState} from 'recoil';
import {theme} from 'styles';
import {CategoryType} from 'libs/recoil/types/category';
import {selectFormBottomSheetState} from 'libs/recoil/states/selectForm';
import BottomSheet from 'components/@common/BottomSheet';
import Typography from 'components/@common/Typography';
import CategoryList from 'components/@common/SelectForm/CategoryList';

type SelectFormBottomSheetProps = {
  label: string;
  categoryList: CategoryType[];
};

export default function SelectFormBottomSheet({
  label,
  categoryList,
}: SelectFormBottomSheetProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useRecoilState(
    selectFormBottomSheetState,
  );

  return (
    <BottomSheet
      isBottomSheetOpen={isBottomSheetOpen}
      setIsBottomSheetOpen={setIsBottomSheetOpen}
      height={270}
      children={renderBottomSheetChildren({label, categoryList})}
    />
  );
}

function renderBottomSheetChildren({
  label,
  categoryList,
}: {
  label: string;
  categoryList: CategoryType[];
}) {
  return (
    <View style={selectFormStyles.bottomSheetContainer}>
      <View style={selectFormStyles.bottomSheetLabelContainer}>
        <Typography color={'gray6'} type={'Body1Semibold'}>
          {label}
        </Typography>
      </View>
      <CategoryList categoryList={categoryList} />
    </View>
  );
}

const selectFormStyles = StyleSheet.create({
  bottomSheetContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  bottomSheetDataListContainer: {
    width: '100%',
    height: '100%',
  },
  bottomSheetLabelContainer: {
    width: '100%',
    height: 55,
    paddingTop: 15,
    borderBottomColor: theme.palette.gray3,
    borderBottomWidth: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
