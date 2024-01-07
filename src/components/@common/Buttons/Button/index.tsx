import Typography from 'components/@common/Typography';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {theme} from 'styles';

const TEXT_COLOR = {
  normal: {
    primary: 'white',
    secondary: 'gray5',
  },
  disabled: {
    primary: 'white',
    secondary: 'gray5',
  },
} as const;

const BACKGROUND_COLOR = {
  normal: {
    primary: 'primary',
    secondary: 'gray2',
  },
  disabled: {
    primary: 'gray3',
    secondary: 'gray2',
  },
} as const;

/**
 * @param variant 버튼 종류: 'primary' | 'secondary'
 * @param width 버튼 크기
 * @param children 버튼 텍스트
 */
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: string;
} & TouchableOpacityProps;

export default function Button({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  const activeVariant = props.disabled ? 'disabled' : 'normal';

  const {backgroundColor, textColor} = {
    backgroundColor: theme.palette[BACKGROUND_COLOR[activeVariant][variant]],
    textColor: TEXT_COLOR[activeVariant][variant],
  };

  return (
    <TouchableOpacity
      {...props}
      style={[props.style, buttonStyles.button, {backgroundColor}]}>
      <Typography type={'Body1Semibold'} color={textColor}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    height: 56,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
