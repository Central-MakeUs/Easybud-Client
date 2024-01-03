import {SvgProps} from 'react-native-svg';
import * as Icons from 'assets/icons';
import {KeyOfPalette} from 'styles/types';
import {theme} from 'styles';

type IconProps = SvgProps & {
  name: keyof typeof Icons;
  size?: number;
  fill: KeyOfPalette;
};

export default function Icon({
  name,
  fill = 'primary',
  width,
  height,
  size,
  ...props
}: IconProps) {
  const SvgIcon = Icons[name];
  const iconSize = size ?? (width && height ? undefined : '24');

  return (
    <SvgIcon
      fill={theme.palette[fill]}
      width={width ?? iconSize}
      height={height ?? iconSize}
      {...props}
    />
  );
}
