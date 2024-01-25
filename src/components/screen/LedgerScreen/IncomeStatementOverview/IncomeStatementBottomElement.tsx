import Typography from 'components/@common/Typography';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';

export default function IncomeStatementBottomElement() {
  const [currentDate, _] = useState(new Date());

  return (
    <View>
      <Typography
        type={'Title1Semibold1'}
        color={'gray6'}
        style={incomeStatementBottomElementStyles.text}>
        {currentDate.getMonth() + 1}월
      </Typography>
      <View style={incomeStatementBottomElementStyles.graphContainer} />
    </View>
  );
}

const incomeStatementBottomElementStyles = StyleSheet.create({
  text: {
    marginBottom: 18,
  },
  graphContainer: {
    borderWidth: 1,
    height: 200,
  },
});
