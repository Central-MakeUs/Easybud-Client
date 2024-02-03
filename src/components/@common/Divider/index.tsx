import {View, ViewStyle} from 'react-native';
import {theme} from 'styles';
import {KeyOfPalette} from 'styles/types';

/**
 * @param color divider 배경색
 * @param height divider 높이
 * @param style 추가적인 스타일 속성
 */
type DividerProps = {
  color?: KeyOfPalette;
  height?: number;
  style?: ViewStyle | ViewStyle[];
};

export default function Divider({
  color = 'gray3',
  height = 7,
  style,
}: DividerProps) {
  return (
    <View
      style={[
        style,
        dividerStyles.divider,
        {height, backgroundColor: theme.palette[color]},
      ]}
    />
  );
}

const dividerStyles = {
  divider: {
    width: '100%',
  },
};
