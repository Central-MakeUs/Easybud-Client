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
} from 'constants/components/Button';

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
  const {logo, text} = SocialLoginButtonLabel[variant];

  const {color: textColor, ...buttonStyles} = SocialLoginButtonStyles[variant];
  const {width: iconSize, ...iconStyles} =
    SocialLoginButtonStyles[`${variant}Icon`];

  return (
    <TouchableOpacity
      {...props}
      style={[socialLoginButtonStyles.button, buttonStyles]}>
      <Icon
        name={logo}
        size={iconSize}
        style={[socialLoginButtonStyles.logo, iconStyles]}
      />
      <Typography style={[socialLoginButtonStyles.text, {color: textColor}]}>
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
