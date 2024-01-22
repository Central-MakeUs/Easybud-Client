import React, {ReactNode} from 'react';
import {StyleSheet, TextInputProps, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import Typography from 'components/@common/Typography';

/**
 * @param label label 텍스트
 * @param variant SelectItem의 종류를 나타냄 'primary' | 'gray'
 * @param handlePressSelectItem SelectItem을 눌렀을 때 동작하는 함수
 * @param value SelectItem value
 * @param placeholder SelectItem placeholder 텍스트
 * @param bottomSheet SelectItem을 눌렀을 때 나타나는 bottomSheet
 */
type InputFormProps = TextInputProps & {
  label: string;
  onPress?: () => void;
  value: string;
  bottomSheet?: ReactNode;
};

export default function InputForm({
  label,
  onPress,
  value,
  bottomSheet,
  ...props
}: InputFormProps) {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={selectFormStyles.container}>
        <Typography type={'Body1Semibold'} color={'gray6'}>
          {label}
        </Typography>
        <Typography {...props} type={'Body1Semibold'} color={'gray6'}>
          {value}
        </Typography>
      </TouchableOpacity>
      {bottomSheet}
    </>
  );
}

const selectFormStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.gray2,
    width: '100%',
    height: 49,
    borderRadius: 18,
    paddingHorizontal: 21,
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
