import {SvgProps} from 'react-native-svg';
import {theme} from 'styles';
import {KeyOfPalette} from 'styles/types';
import * as Icons from 'assets/icons';
import {KeyOfIcons} from 'types/icon';

type IconProps = SvgProps & {
  name: KeyOfIcons;
  size?: number | undefined;
  fill?: KeyOfPalette;
  style?: React.CSSProperties | Array<React.CSSProperties>;
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
