import InputForm from 'components/@common/InputForm';
import CommonBottomSheet from 'components/@common/BottomSheet/GorhomBottomSheet';
import Typography from 'components/@common/Typography';
import {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme} from 'styles';
import useBottomSheet from 'hooks/useBottomSheet';
import {isEmpty} from 'lodash';
import Button from 'components/@common/Buttons/Button';
import {CategoryName} from 'constants/components/SelectForm';

/**
 * @param label label 텍스트
 * @param placeholder placeholder 텍스트
 */
export type SelectFormProps = {
  items: string[];
  value: string | null | undefined;
  label: string;
  placeholder?: string;
  addToList?: (value: string) => void;
  onSelect: (value: string) => void;
};

export default function SelectForm({
  label,
  value,
  items,
  placeholder = '선택해주세요',
  addToList,
  onSelect,
}: SelectFormProps) {
  const {ref, open, close} = useBottomSheet();
  const [text, setText] = useState<string>('');

  const onPressAddButton = () => {
    addToList && addToList(text);
    onSelect(text);
    setText('');
    close();
  };

  const onPressItem = (item: string) => {
    onSelect(item);
    close();
  };

  return (
    <>
      <InputForm
        onPress={open}
        label={label}
        value={value ?? ''}
        placeholder={placeholder}
      />
      <CommonBottomSheet
        ref={ref}
        snapPoints={items.length > 4 ? ['75%'] : ['50%']}>
        <View style={styles.labelContainer}>
          <Typography color={'gray6'} type={'Body1Semibold'}>
            {label}
          </Typography>
        </View>
        <ScrollView contentContainerStyle={{paddingBottom: 120}}>
          {items.map((item, index) => (
            <ListItem
              key={`${item}${index}`}
              value={item}
              onSelect={onPressItem}
            />
          ))}
          {label === CategoryName.tertiary && (
            <View style={styles.inputContainer}>
              <TextInput
                value={text}
                maxLength={6}
                onChangeText={setText}
                placeholder="추가할 항목을 작성하세요"
                style={[theme.typography.Body1Regular, styles.input]}
              />
              <Button
                onPress={onPressAddButton}
                disabled={isEmpty(text)}
                style={styles.button}>
                항목 추가하기
              </Button>
            </View>
          )}
        </ScrollView>
      </CommonBottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: theme.palette.gray4,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  input: {
    borderRadius: 12,
    padding: 10,
    flex: 1,
  },
  button: {height: 40, padding: 10, minWidth: 120, maxWidth: 120},
});

type ListItemProps = {
  value: string;
  onSelect: (value: string) => void;
};

const ListItem = ({value, onSelect}: ListItemProps) => {
  return (
    <TouchableOpacity
      style={categoryListItemStyles.container}
      onPress={() => onSelect(value)}>
      <Typography type={'Body1Semibold'} color={'black'}>
        {value}
      </Typography>
    </TouchableOpacity>
  );
};

const categoryListItemStyles = StyleSheet.create({
  container: {
    borderBottomColor: theme.palette.gray3,
    borderBottomWidth: 1,
    padding: 20,
  },
});
