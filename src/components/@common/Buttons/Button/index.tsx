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
  children,
  ...props
}: ButtonProps) {
  const activeVariant = props.disabled ? 'disabled' : 'normal';

  const {backgroundColor, textColor, width} = {
    backgroundColor: theme.palette[BACKGROUND_COLOR[activeVariant][variant]],
    textColor: TEXT_COLOR[activeVariant][variant],
    width: fullWidth ? '100%' : '50%',
  };

  return (
    <TouchableOpacity
      {...props}
      style={{
        ...buttonStyles.button,
        backgroundColor,
        width,
      }}>
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
