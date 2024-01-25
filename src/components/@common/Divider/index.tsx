import {View, ViewStyle} from 'react-native';
import {theme} from 'styles';

type DividerProps = {
  style?: ViewStyle | ViewStyle[];
};

export default function Divider({style}: DividerProps) {
  return <View style={[style, dividerStyles.divider]} />;
}

const dividerStyles = {
  divider: {
    width: '100%',
    height: 7,
    backgroundColor: theme.palette.gray3,
  },
};
