import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';
import {
  SocialLoginButtonLabel,
  SocialLoginButtonStyles,
} from 'constants/Button';

/**
 * @param variant 버튼 종류: 'kakao' | 'apple'
 */
type SocialLoginButtonProps = {
  variant: 'kakao' | 'apple';
} & TouchableOpacityProps;

export default function SocialLoginButton({
  variant,
  ...props
}: SocialLoginButtonProps) {
  const {logo, text, size} = SocialLoginButtonLabel[variant];
  const {color, ...styles} = SocialLoginButtonStyles[variant];

  return (
    <TouchableOpacity
      {...props}
      style={[socialLoginButtonStyles.button, styles]}>
      <Icon name={logo} size={size} style={[socialLoginButtonStyles.logo]} />
      <Typography style={[socialLoginButtonStyles.text, {color}]}>
        {text}
      </Typography>
      <View style={{width: 56}} />
    </TouchableOpacity>
  );
}

const socialLoginButtonStyles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    height: 56,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {},
  text: {textAlign: 'center'},
});
