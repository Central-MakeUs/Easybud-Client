import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {calculatorOptions} from 'constants/calculatorOptions';
import DigitButton from 'components/@common/Calculator/DigitButton';

export default function Calculator() {
  const [result, setResult] = useState('0');

  return (
    <View style={calculatorStyles.container}>
      {calculatorOptions.map((calculatorOption, rowIndex) => (
        <View key={rowIndex} style={calculatorStyles.buttonRowContainer}>
          {calculatorOption.map(value => (
            <DigitButton
              key={value}
              value={value}
              result={result}
              setResult={setResult}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const calculatorStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 372,
    paddingVertical: 18,
    gap: 16,
  },
  buttonRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 375,
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    gap: 16,
  },
});
