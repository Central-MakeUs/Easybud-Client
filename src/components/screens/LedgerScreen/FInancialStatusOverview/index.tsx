import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useGetFinancialStatusDataQuery} from 'hooks/queries/LedgerScreen/useGetFinancialStatusDataQuery';
import {FinancialDataCardBase} from 'components/screens/LedgerScreen/FinancialDataCard';
import FinancialStatusBottomElement from 'components/screens/LedgerScreen/FinancialStatusOverview/FinancialStatusBottomElement';
import Tooltip from 'components/@common/Tooltip';

export default function FinancialStatusOverview() {
  const [showTooltipText, setShowTooltipText] = useState(false);

  const {totalAssets, totalLiabilities, netAssets, initialNetAssetDefined} =
    useGetFinancialStatusDataQuery();

  const handlePressTooltipIcon = () =>
    setShowTooltipText(prevState => !prevState);

  return (
    <View>
      <FinancialDataCardBase.Container>
        <FinancialDataCardBase.TopElementContainer>
          <View
            style={financialStatusOverviewStyles.topElementFirstColContainer}>
            <FinancialDataCardBase.Label label={'재무상태'} />
            <FinancialDataCardBase.TooltipIcon
              isVisible={!initialNetAssetDefined}
              onPress={handlePressTooltipIcon}
            />
          </View>
          <FinancialDataCardBase.DetailButton />
        </FinancialDataCardBase.TopElementContainer>
        <FinancialDataCardBase.BottomElement
          children={
            <FinancialStatusBottomElement
              networthAmount={netAssets}
              assetAmount={totalAssets}
              debtAmount={totalLiabilities}
            />
          }
        />
      </FinancialDataCardBase.Container>
      <Tooltip
        isVisible={showTooltipText}
        text={'기초 순자산을 설정하세요!'}
        position={{
          top: 29,
          left: 23,
        }}
      />
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
