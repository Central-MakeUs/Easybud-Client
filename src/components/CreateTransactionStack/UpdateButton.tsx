import Typography from 'components/@common/Typography';
import React, {ReactNode} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {theme} from 'styles';

type UpdateButtonProps = {endIcon?: ReactNode} & TouchableOpacityProps;

export default function UpdateButton({endIcon, ...props}: UpdateButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.button, props.disabled ? styles.disabled : {}]}>
      <Typography type={'Body2Semibold'} color="gray5">
        {props.children}
      </Typography>
      {endIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.palette.gray2,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 12,
    gap: 5,
  },
  disabled: {
    opacity: 0.5,
  },
});
