import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VictoryPie} from 'victory-native';
import {colorScale} from 'constants/screens/LedgerScreen';
import {GraphDataType, LabelTextColor} from 'types/screens/LedgerScreen';
import Typography from 'components/@common/Typography';

const dummyGraphData: GraphDataType[] = [
  {y: 40, label: '수익\n111,111,112원\n목표 대비 88%'},
  {y: 60, label: '비용\n111,111,112원\n예산 대비 88%'},
];

type LabelProps = {
  x: number;
  y: number;
  datum: GraphDataType;
};

const calculateGraphPosition = (
  datum: GraphDataType,
  label1: string,
  x: number,
  y: number,
) => {
  let top, left;
  const incomeCondition = label1 === '수익';

  if (!datum.y) {
    top = incomeCondition ? y + 40 : y + 38;
    left = incomeCondition ? x + 70 : x - 155;
  } else if (datum.y === 100) {
    top = incomeCondition ? y - 113 : y - 100;
    left = incomeCondition ? x + 67 : x - 155;
  } else if (datum.y > 50) {
    top = incomeCondition ? y - 18 : y - 26;
    left = incomeCondition ? x - 10 : x - 79;
  } else {
    top = incomeCondition ? y - 50 : y - 48;
    left = incomeCondition ? x - 6 : x - 83;
  }

  return {top, left};
};

const Label = ({x, y, datum}: LabelProps) => {
  const [label1, label2, label3] = datum.label.split('\n');

  console.log(datum);

  const {label1TextColor, label2TextColor, label3TextColor}: LabelTextColor = {
    label1TextColor: !datum.y ? 'gray1' : 'gray6',
    label2TextColor: !datum.y ? 'gray1' : label1 === '수익' ? 'pink' : 'green',
    label3TextColor: !datum.y ? 'gray1' : 'gray6',
  };

  const {top, left} = calculateGraphPosition(datum, label1, x, y);

  return (
    <View
      style={[incomeStatementBottomElementStyles.labelContainer, {top, left}]}>
      <Typography type={'Body1Semibold'} color={label1TextColor}>
        {label1}
      </Typography>
      <Typography type={'Body1Semibold'} color={label2TextColor}>
        {label2}
      </Typography>
      <Typography type={'Body2Semibold'} color={label3TextColor}>
        {label3}
      </Typography>
    </View>
  );
};

export default function IncomeStatementBottomElement() {
  const height = !dummyGraphData[0].y || !dummyGraphData[1].y ? 150 : 230;

  return (
    <View style={[{height}]}>
      <View
        style={[incomeStatementBottomElementStyles.graphContainer, {height}]}>
        <VictoryPie
          data={dummyGraphData}
          width={210}
          height={210}
          colorScale={colorScale}
          innerRadius={15}
          labelComponent={<Label />}
        />
      </View>
    </View>
  );
}

const incomeStatementBottomElementStyles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    marginBottom: 18,
  },
});
