import {StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import Typography from 'components/@common/Typography';

/**
 * @param value 항목 명
 * @param onSelect 항목 선택
 */
type ListItemProps = {
  value: string;
  onSelect: (value: string) => void;
};

export default function ListItem({value, onSelect}: ListItemProps) {
  return (
    <TouchableOpacity
      style={categoryListItemStyles.container}
      onPress={() => onSelect(value)}>
      <Typography type={'Body1Semibold'} color={'black'}>
        {value}
      </Typography>
    </TouchableOpacity>
  );
}

const categoryListItemStyles = StyleSheet.create({
  container: {
    borderBottomColor: theme.palette.gray3,
    borderBottomWidth: 1,
    padding: 20,
  },
});
