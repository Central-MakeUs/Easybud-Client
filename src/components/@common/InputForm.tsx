import React, {useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import {theme} from 'styles';
import Typography from 'components/@common/Typography';

type InputFormProps = TextInputProps & {
  label: string;
  onPress?: () => void;
};

export default function InputForm({
  label,
  value,
  onPress,
  ...props
}: InputFormProps) {
  const inputRef = useRef<TextInput>(null);

  const focusOnInput = () => inputRef.current?.focus();

  return (
    <TouchableOpacity
      style={selectFormStyles.container}
      onPress={onPress ? onPress : focusOnInput}>
      <Typography type={'Body1Semibold'} color={'gray6'}>
        {label}
      </Typography>
      {onPress ? (
        <Typography type="Body1Semibold" color="gray6">
          {value}
        </Typography>
      ) : (
        <TextInput
          value={value}
          ref={inputRef}
          style={[theme.typography.Body1Semibold, {color: theme.palette.gray6}]}
          {...props}
        />
      )}
    </TouchableOpacity>
  );
}

const selectFormStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.gray2,
    width: '100%',
    height: 49,
    borderRadius: 18,
    paddingHorizontal: 21,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
