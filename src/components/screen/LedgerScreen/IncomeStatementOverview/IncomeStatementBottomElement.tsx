import {StyleSheet, View} from 'react-native';

export default function IncomeStatementBottomElement() {
  return (
    <View>
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
    height: 180,
  },
});
