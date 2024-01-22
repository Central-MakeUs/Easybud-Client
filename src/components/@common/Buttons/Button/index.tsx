import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {ButtonBackgroundColor, ButtonTextColor} from 'constants/Button';
import Typography from 'components/@common/Typography';

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
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  const activeVariant = disabled ? 'disabled' : 'normal';

  const {backgroundColor, textColor} = {
    backgroundColor: ButtonBackgroundColor[activeVariant][variant],
    textColor: ButtonTextColor[activeVariant][variant],
  };

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[buttonStyles.button, props.style, {backgroundColor}]}>
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
