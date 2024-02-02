import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {VictoryPie} from 'victory-native';
import {KeyOfPalette} from 'styles/types';
import {colorScale} from 'constants/screens/LedgerScreen';
import {getDatePeriod} from 'utils/formatDate';
import {calculateGraphPosition, getGraphData} from 'utils/getGraphData';
import {useGetIncomeStatusDataQuery} from 'hooks/queries/LedgerScreen/useGetIncomeStatusDataQuery';
import {
  FirstLabelType,
  GraphDataType,
  LabelTextColor,
} from 'types/screens/LedgerScreen';
import Typography from 'components/@common/Typography';

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

export default function IncomeStatusBottomElement() {
  const [currentDate, _] = useState(new Date());

  const {startDate, endDate} = getDatePeriod(currentDate);

  const {revenue, expense, revenuePercentage, expensePercentage} =
    useGetIncomeStatusDataQuery(startDate, endDate);

  const graphData = getGraphData(
    revenue,
    expense,
    revenuePercentage,
    expensePercentage,
  );

  const height =
    !graphData[0].y && !graphData[1].y
      ? 70
      : !graphData[0].y || !graphData[1].y
        ? 150
        : 230;

  return (
    <View style={[{height}]}>
      <View
        style={[incomeStatementBottomElementStyles.graphContainer, {height}]}>
        {revenue || expense ? (
          <VictoryPie
            data={graphData}
            width={210}
            height={210}
            colorScale={colorScale}
            innerRadius={15}
            labelComponent={<Label />}
          />
        ) : (
          <View
            style={
              incomeStatementBottomElementStyles.noIncomeStatusTextContainer
            }>
            <Typography type={'Body1Semibold'} color={'gray6'}>
              손익 현황 데이터가 없습니다.
            </Typography>
            <Typography type={'Body1Semibold'} color={'gray6'}>
              거래 추가 후 다시 확인해주세요.
            </Typography>
          </View>
        )}
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
  noIncomeStatusTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
