import React from 'react';
import {StyleSheet, View} from 'react-native';
import {VictoryPie} from 'victory-native';
import {KeyOfPalette} from 'styles/types';
import {colorScale} from 'constants/screens/LedgerScreen';
import {
  FirstLabelType,
  GraphDataType,
  LabelTextColor,
} from 'types/screens/LedgerScreen';
import Typography from 'components/@common/Typography';

const dummyGraphData: GraphDataType[] = [
  {y: 40, label: '수익\n111,111,112원\n목표 대비 88%'},
  {y: 60, label: '비용\n111,111,112원\n예산 대비 88%'},
];

const calculateGraphPosition = (
  datum: GraphDataType,
  label1: FirstLabelType,
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

const getLabelTextColor = (
  datum: GraphDataType,
  label1: FirstLabelType,
): LabelTextColor => {
  const defaultColor: KeyOfPalette = 'gray1';

  return {
    label1TextColor: datum.y ? 'gray6' : defaultColor,
    label2TextColor: datum.y
      ? label1 === '수익'
        ? 'pink'
        : 'green'
      : defaultColor,
    label3TextColor: datum.y ? 'gray6' : defaultColor,
  };
};

/**
 * @param x x축 위치
 * @param y y축 위치
 * @param datum 그래프 데이터 객체
 */
type LabelProps = {
  x: number;
  y: number;
  datum: GraphDataType;
};

const Label = ({x, y, datum}: LabelProps) => {
  const [label1, label2, label3] = datum.label.split('\n');

  const {label1TextColor, label2TextColor, label3TextColor}: LabelTextColor =
    getLabelTextColor(datum, label1 as FirstLabelType);

  const {top, left} = calculateGraphPosition(
    datum,
    label1 as FirstLabelType,
    x,
    y,
  );

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
