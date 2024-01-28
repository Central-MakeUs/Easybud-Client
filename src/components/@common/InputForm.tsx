import React, {useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from 'styles';
import Typography from 'components/@common/Typography';
import {isEmpty} from 'lodash';
import Icon from 'components/@common/Icon';

type InputFormProps = TextInputProps & {
  label: string;
  onPress?: () => void;
  size?: 'md' | 'sm';
  editIcon?: boolean;
};

export default function InputForm({
  label,
  value,
  placeholder,
  onPress,
  editIcon,
  size = 'md',
  ...props
}: InputFormProps) {
  const inputRef = useRef<TextInput>(null);

  const focusOnInput = () => inputRef.current?.focus();

  return (
    <TouchableOpacity
      style={[selectFormStyles.container, selectFormStyles[size]]}
      onPress={onPress ? onPress : focusOnInput}>
      <Typography
        type={size === 'md' ? 'Body1Semibold' : 'Body2Semibold'}
        color={'gray6'}>
        {label}
      </Typography>
      {onPress ? (
        <View style={{gap: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Typography
            type={size === 'md' ? 'Body1Semibold' : 'Body2Regular'}
            color={isEmpty(value) ? 'gray3' : 'gray5'}>
            {isEmpty(value) ? placeholder : value}
          </Typography>
          {editIcon && <Icon color="gray5" name="Pencil" size={12} />}
        </View>
      ) : (
        <TextInput
          value={value}
          placeholder={placeholder}
          ref={inputRef}
          style={[
            theme.typography[size === 'md' ? 'Body1Semibold' : 'Body2Regular'],
            {
              paddingHorizontal: 10,
              color: theme.palette.gray5,
              width: '80%',
              textAlign: 'right',
            },
          ]}
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
    borderRadius: 12,
    zIndex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  md: {
    padding: 20,
  },
  sm: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
