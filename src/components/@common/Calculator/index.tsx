import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {theme} from 'styles';
import Typography from 'components/@common/Typography';

export default function Calculator() {
  return (
    <View style={calculatorStyles.container}>
      <View style={calculatorStyles.buttonRowContainer}>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            1
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            2
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            3
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculatorStyles.button, calculatorStyles.calculationButton]}>
          <Typography
            type={'Title1Bold'}
            style={[calculatorStyles.text, calculatorStyles.calculationText]}>
            +
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.buttonRowContainer}>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            4
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            5
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            6
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculatorStyles.button, calculatorStyles.calculationButton]}>
          <Typography
            type={'Title1Bold'}
            style={[calculatorStyles.text, calculatorStyles.calculationText]}>
            –
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.buttonRowContainer}>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            7
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            8
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            9
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculatorStyles.button, calculatorStyles.calculationButton]}>
          <Typography
            type={'Title1Bold'}
            style={[calculatorStyles.text, calculatorStyles.calculationText]}>
            ×
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.buttonRowContainer}>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            0
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            000
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Typography type={'Title1Bold'} style={calculatorStyles.text}>
            ?
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={[calculatorStyles.button, calculatorStyles.calculationButton]}>
          <Typography
            type={'Title1Bold'}
            style={[calculatorStyles.text, calculatorStyles.calculationText]}>
            ÷
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const calculatorStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 372,
    padding: 18,
    gap: 16,
  },
  buttonRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
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
