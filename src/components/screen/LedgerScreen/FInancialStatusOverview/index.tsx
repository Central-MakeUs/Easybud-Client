import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FinancialDataCardBase} from 'components/screen/LedgerScreen/FinancialDataCard';
import FinancialStatusBottomElement from 'components/screen/LedgerScreen/FinancialStatusOverview/FinancialStatusBottomElement';
import Tooltip from 'components/@common/Tooltip';

export default function FinancialStatusOverview() {
  const [hasInitialNetWorth, _] = useState(false);
  const [showTooltipText, setShowTooltipText] = useState(false);

  return (
    <View>
      <FinancialDataCardBase.Container>
        <FinancialDataCardBase.TopElementContainer>
          <View
            style={financialStatusOverviewStyles.topElementFirstColContainer}>
            <FinancialDataCardBase.Label label={'재무상태'} />
            {!hasInitialNetWorth && (
              <FinancialDataCardBase.TooltipIcon
                onPress={() => setShowTooltipText(prevState => !prevState)}
              />
            )}
          </View>
          <FinancialDataCardBase.DetailButton />
        </FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.BottomElement
          children={
            <FinancialStatusBottomElement
              networthAmount={170450000}
              assetAmount={20045000}
              debtAmount={3000000}
            />
          }
        />
      </FinancialDataCardBase.Container>
      {showTooltipText && (
        <Tooltip
          text={'기초 순자산을 설정하세요!'}
          position={{
            top: 29,
            left: 23,
          }}
        />
      )}
    </View>
  );
}

const financialStatusOverviewStyles = StyleSheet.create({
  topElementFirstColContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
