import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import {calculatorOptions} from 'constants/calculatorOptions';
import Typography from 'components/@common/Typography';

export default function Calculator() {
  return (
    <View style={calculatorStyles.container}>
      {calculatorOptions.map((calculatorOption, rowIndex) => (
        <View key={rowIndex} style={calculatorStyles.buttonRowContainer}>
          {calculatorOption.map((calculation, columnIndex) => (
            <TouchableOpacity
              key={columnIndex}
              style={[
                calculatorStyles.button,
                columnIndex === 3 && calculatorStyles.calculationButton,
              ]}>
              <Typography
                type={'Title1Bold'}
                style={[
                  calculatorStyles.text,
                  columnIndex === 3 && calculatorStyles.calculationText,
                ]}>
                {calculation}
              </Typography>
            </TouchableOpacity>
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
  button: {
    width: 72,
    height: 72,
    borderRadius: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculationButton: {
    backgroundColor: theme.palette.secondary,
  },
  text: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculationText: {
    marginBottom: 5,
  },
});
