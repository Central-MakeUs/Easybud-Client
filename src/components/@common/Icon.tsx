import {SvgProps} from 'react-native-svg';
import {theme} from 'styles';
import {KeyOfPalette} from 'styles/types';
import * as Icons from 'assets/icons';
import {KeyOfIcons} from 'types/components/Icon';

/**
 * @param name 아이콘명
 * @param size 아이콘 크기
 * @param fill 아이콘 색
 * @param style 추가적인 style 속성
 */
type IconProps = Omit<SvgProps, 'onPress'> & {
  name: KeyOfIcons;
  size?: number | undefined;
  fill?: KeyOfPalette;
  style?: React.CSSProperties | Array<React.CSSProperties>;
  onPress?: (...args: any[]) => void;
};

export default function Icon({
  name,
  fill = 'gray4',
  size = 24,
  ...props
}: IconProps) {
  const SvgIcon = Icons[name];

  return (
    <SvgIcon
      width={size}
      height={size}
      style={{color: theme.palette[fill]}}
      {...props}
    />
  );
}
