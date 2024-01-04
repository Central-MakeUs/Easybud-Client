import {SvgProps} from 'react-native-svg';
import {theme} from 'styles';
import {KeyOfPalette} from 'styles/types';
import * as Icons from 'assets/icons';

type IconProps = SvgProps & {
  name: keyof typeof Icons;
  size?: number;
  fill?: KeyOfPalette;
};

export default function Icon({
  name,
  fill = 'gray4',
  size = 24,
  ...props
}: IconProps) {
  const SvgIcon = Icons[name];

  return (
    <SvgIcon fill={theme.palette[fill]} width={size} height={size} {...props} />
  );
}
