import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import Typography from 'components/@common/Typography';
import {ThemeVariants} from 'constants/components/CommonSelectItem';
import {TouchableOpacityProps} from 'react-native';

/**
 * @param label label 텍스트
 * @param variant SelectItem의 종류를 나타냄 'primary' | 'gray'
 * @param handlePressSelectItem SelectItem을 눌렀을 때 동작하는 함수
 * @param value SelectItem value
 * @param placeholder SelectItem placeholder 텍스트
 * @param bottomSheet SelectItem을 눌렀을 때 나타나는 bottomSheet
 */
type CommonSelectButtonProps = {
  label: string;
  variant?: 'primary' | 'gray';
  value: string;
  placeholder?: string;
  bottomSheet: ReactNode;
} & TouchableOpacityProps;

export default function CommonSelectItem({
  label,
  variant = 'gray',
  value,
  placeholder,
  bottomSheet,
  ...props
}: CommonSelectButtonProps) {
  const {
    backgroundColor,
    labelTextColor,
    valueTextColor,
    placeholderTextColor,
  } = ThemeVariants[variant];

  return (
    <>
      <TouchableOpacity
        {...props}
        style={[selectFormStyles.container, {backgroundColor}]}>
        <Typography
          type={'Body1Semibold'}
          color={props.disabled ? 'gray4' : labelTextColor}>
          {label}
        </Typography>
        <Typography
          type={'Body1Semibold'}
          color={
            value
              ? valueTextColor
              : props.disabled
                ? 'gray3'
                : placeholderTextColor
          }>
          {value || placeholder}
        </Typography>
      </TouchableOpacity>
      {bottomSheet}
    </>
  );
}

const selectFormStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 62,
    borderRadius: 12,
    backgroundColor: theme.palette.gray2,
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
