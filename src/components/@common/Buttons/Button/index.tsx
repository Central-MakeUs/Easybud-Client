import Typography from 'components/@common/Typography';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {theme} from 'styles';

const TextColor = {
  normal: {
    primary: 'white',
    secondary: 'gray5',
  },
  disabled: {
    primary: 'white',
    secondary: 'gray5',
  },
} as const;

const BackgroundColor = {
  normal: {
    primary: theme.palette.primary,
    secondary: theme.palette.gray2,
  },
  disabled: {
    primary: theme.palette.gray3,
    secondary: theme.palette.gray2,
  },
} as const;

/**
 * @param variant 버튼 종류: 'primary' | 'secondary'
 * @param fullWidth 버튼 크기: 고정된 크기 / 화면에 꽉 차게
 * @param children 버튼 텍스트
 */
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: string;
} & TouchableOpacityProps;

export default function Button({
  variant = 'primary',
  fullWidth = true,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const activeVariant = disabled ? 'disabled' : 'normal';

  const {backgroundColor, textColor, width} = {
    backgroundColor: BackgroundColor[activeVariant][variant],
    textColor: TextColor[activeVariant][variant],
    width: fullWidth ? '100%' : '50%',
  };

  return (
    <TouchableOpacity
      {...props}
      style={[buttonStyles.button, {backgroundColor, width}]}>
      <Typography type={'Body1Semibold'} color={textColor}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
  },
});
