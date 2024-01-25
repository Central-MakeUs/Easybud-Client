import {ReactElement} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Typography from 'components/@common/Typography';

type FinancialDataCardPropsType = {
  label: string;
  bottomElement: ReactElement;
};

export default function FinancialDataCard({
  label,
  bottomElement,
}: FinancialDataCardPropsType) {
  return (
    <View style={financialDataCardStyles.container}>
      <View style={financialDataCardStyles.topLabelContainer}>
        <Typography type={'Title1Semibold1'}>{label}</Typography>
        <TouchableOpacity>
          <Typography
            type={'Body2Regular'}
            color={'gray4'}
            style={financialDataCardStyles.button}>
            상세보기
          </Typography>
        </TouchableOpacity>
      </View>
      <View style={financialDataCardStyles.bottomElementContainer}>
        {bottomElement}
      </View>
    </View>
  );
}

const financialDataCardStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    gap: 20,
  },
  topLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    textDecorationLine: 'underline',
  },
  bottomElementContainer: {
    borderWidth: 1,
  },
});
