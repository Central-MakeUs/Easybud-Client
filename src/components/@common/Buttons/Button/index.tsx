import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {ButtonBackgroundColor, ButtonTextColor} from 'constants/Button';
import Typography from 'components/@common/Typography';

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
    backgroundColor: ButtonBackgroundColor[activeVariant][variant],
    textColor: ButtonTextColor[activeVariant][variant],
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
