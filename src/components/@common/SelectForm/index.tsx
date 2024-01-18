import {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {theme} from 'styles';
import BottomSheet from 'components/@common/BottomSheet';
import CategoryListItem from 'components/@common/SelectForm/CategoryListItem';
import Typography from 'components/@common/Typography';

const dummyCategories = [
  {name: '현금', value: 'cash'},
  {name: '보통예금', value: 'ordinaryDeposit'},
  {name: '정기예금', value: 'fixedDeposit'},
  {name: '유가증권', value: 'securities'},
  {name: '기타유동자산', value: 'otherLiquidAssets'},
];

type SelectFormProps = {
  label: string;
  value: string;
  placeholder?: string;
  variant?: 'primary' | 'gray';
};

export default function SelectForm({
  label,
  value,
  placeholder,
  variant = 'gray',
}: SelectFormProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsBottomSheetOpen(true)}
        style={[
          selectFormStyles.container,
          {
            backgroundColor:
              variant === 'primary'
                ? theme.palette.primary
                : theme.palette.gray2,
          },
        ]}>
        <Typography
          type={'Body1Semibold'}
          color={variant === 'primary' ? 'white' : 'gray6'}>
          {label}
        </Typography>
        <Typography
          type={'Body1Semibold'}
          color={!value ? 'gray4' : variant === 'primary' ? 'white' : 'gray6'}>
          {value ?? placeholder}
        </Typography>
      </TouchableOpacity>
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
            <FlatList
              data={dummyCategories}
              renderItem={({item}) => <CategoryListItem data={item} />}
              style={selectFormStyles.bottomSheetDataListContainer}
            />
          </View>
        }
      />
    </>
  );
}

const selectFormStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 49,
    borderRadius: 18,
    backgroundColor: theme.palette.gray2,
    paddingLeft: 21,
    paddingRight: 11,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
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
