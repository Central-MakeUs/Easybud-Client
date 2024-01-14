import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropdownSelect from 'react-native-input-select';
import {theme} from 'styles';
import TextField from 'components/@common/TextField';
import Typography from 'components/@common/Typography';
import Button from 'components/@common/Buttons/Button';

export default function SelectForm({
  label,
  placeholder,
  options,
}: {
  label: string;
  placeholder: string;
  options: Array<{name: string; id: string}>;
}) {
  const [optionList, setOptionList] = useState(options);
  const [isSelectForm, setIsSelectForm] = useState(true);
  const [selectedValue, setSelectedValue] = useState(options[0].id);
  const [newCategoryInputText, setNewCategoryInputText] = useState('');
  const [, setNewCategory] = useState('');

  const handleValueChange = (itemId: string) => {
    setSelectedValue(itemId);
  };

  const handlePressCheckButton = () => {
    if (newCategoryInputText.length) {
      setIsSelectForm(true);
      setOptionList(prevOptions => [
        ...prevOptions.slice(0, prevOptions.length - 1),
        {name: newCategoryInputText, id: String(prevOptions.length)},
      ]);
      setSelectedValue(String(optionList.length));
      setNewCategory(newCategoryInputText);
    }
  };

  useEffect(() => {
    if (Number(selectedValue) === options.length) {
      setIsSelectForm(false);
    }
  }, [options.length, selectedValue]);

  return isSelectForm ? (
    <DropdownSelect
      label={label}
      placeholder={placeholder}
      options={optionList}
      optionLabel={'name'}
      optionValue={'id'}
      selectedValue={selectedValue}
      onValueChange={handleValueChange}
      labelStyle={selectFormStyles.label}
      placeholderStyle={selectFormStyles.placeholder}
      dropdownStyle={selectFormStyles.dropdown}
      primaryColor={theme.palette.primary}
    />
  ) : (
    <>
      <View style={selectFormStyles.titleContainer}>
        <Typography type={'Title2Regular'} children={label} />
      </View>
      <View style={selectFormStyles.textFieldContainer}>
        <TextField
          value={newCategoryInputText}
          onChangeText={text => {
            setNewCategoryInputText(text);
          }}
        />
        <Button
          variant={'primary'}
          fixedWidth={100}
          children={'확인'}
          onPress={handlePressCheckButton}
        />
      </View>
    </>
  );
}

const selectFormStyles = StyleSheet.create({
  label: {
    color: theme.palette.black,
    fontWeight: theme.typography.Title2Regular.fontWeight,
    fontSize: theme.typography.Title2Regular.fontSize,
    marginBottom: 10,
  },
  placeholder: {
    color: theme.palette.gray5,
    fontWeight: theme.typography.Body2Regular.fontWeight,
    fontSize: theme.typography.Body2Regular.fontSize,
  },
  dropdown: {
    borderWidth: 0,
    minHeight: 56,
  },
  titleContainer: {
    marginBottom: 10,
  },
  textFieldContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
});
