import {Dispatch, SetStateAction} from 'react';
import {View, StyleSheet} from 'react-native';
import {theme} from 'styles';
import BottomSheet from 'components/@common/BottomSheet';
import Typography from 'components/@common/Typography';
import CategoryList from 'components/@common/SelectForm/CategoryList';

export type CategoryData = {name: string; value: string};

type SelectFormBottomSheetProps = {
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
  label: string;
  categoryList: CategoryData[];
};

export default function SelectFormBottomSheet({
  isBottomSheetOpen,
  setIsBottomSheetOpen,
  label,
  categoryList,
}: SelectFormBottomSheetProps) {
  return (
    <BottomSheet
      isBottomSheetOpen={isBottomSheetOpen}
      setIsBottomSheetOpen={setIsBottomSheetOpen}
      height={270}
      children={
        <View style={selectFormStyles.bottomSheetContainer}>
          <View style={selectFormStyles.bottomSheetLabelContainer}>
            <Typography color={'gray6'} type={'Body1Semibold'}>
              {label}
            </Typography>
          </View>
          <CategoryList categoryList={categoryList} />
        </View>
      }
    />
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
