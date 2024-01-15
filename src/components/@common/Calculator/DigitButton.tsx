import {TouchableOpacity, StyleSheet} from 'react-native';
import {theme} from 'styles';
import Icon from 'components/@common/Icon';
import Typography from 'components/@common/Typography';

type DigitButtonProps = {
  value: string;
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
};

export default function DigitButton({
  value,
  result,
  setResult,
}: DigitButtonProps) {
  const isDeleteButton = value === 'x';
  const handlePressButton = () => {
    if (value === 'x') {
      setResult(prevInput =>
        prevInput.length <= 1 ? '0' : prevInput.slice(0, -1),
      );
    } else {
      setResult(prevInput => (result === '0' ? value : prevInput + value));
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePressButton}
      style={[
        digitButtonStyles.button,
        isDeleteButton && digitButtonStyles.calculationButton,
      ]}>
      {isDeleteButton ? (
        <Icon
          name={'Delete'}
          width={32}
          height={32}
          style={digitButtonStyles.icon}
        />
      ) : (
        <Typography
          type={'Title1Bold'}
          style={[
            digitButtonStyles.text,
            isDeleteButton && digitButtonStyles.calculationText,
          ]}>
          {value}
        </Typography>
      )}
    </TouchableOpacity>
  );
}

const digitButtonStyles = StyleSheet.create({
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
  icon: {
    marginTop: 2,
  },
});
