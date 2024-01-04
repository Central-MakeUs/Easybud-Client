import Typography from 'components/Typography';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
 * @param isActive active 여부
 * @param onPress 버튼 클릭 시 발생할 함수
 * @param children 버튼 텍스트
 */
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  isActive?: boolean;
  onPress?: () => void;
  children: string;
};

export default function Button({
  variant = 'primary',
  fullWidth = true,
  isActive = true,
  onPress,
  children,
}: ButtonProps) {
  const getBackgroundColor = () => {
    return BACKGROUND_COLOR[isActive ? 'normal' : 'disabled'][variant];
  };

  const getTextColor = () => {
    return TEXT_COLOR[isActive ? 'normal' : 'disabled'][variant];
  };

  const getWidth = () => {
    return fullWidth ? 335 : 163.5;
  };

  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      style={{
        ...buttonStyles.button,
        backgroundColor: getBackgroundColor(),
        width: getWidth(),
      }}>
      <Typography type={'Body1Semibold'} color={getTextColor()}>
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
  },
});
