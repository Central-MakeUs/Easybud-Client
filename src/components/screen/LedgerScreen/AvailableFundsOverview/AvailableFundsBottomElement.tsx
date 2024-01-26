import AvailableFundsHeader from 'components/screen/LedgerScreen/AvailableFundsOverview/AvailableFundsHeader';
import AvailableFundsDetail from 'components/screen/LedgerScreen/AvailableFundsOverview/AvailableFundsDetail';

/**
 * @param availableFunds 가용 자금
 * @param cashAndLiquidAssets 현금 및 현금성 자산
 * @param savingsAccount 보통 예금
 * @param plannedExpenditure 지출 예정 자금
 */
export type AvailableFundsBottomElementProps = {
  availableFunds: number;
  cashAndLiquidAssets: number;
  savingsAccount: number;
  plannedExpenditure: number;
};

export default function AvailableFundsBottomElement({
  availableFunds,
  cashAndLiquidAssets,
  savingsAccount,
  plannedExpenditure,
}: AvailableFundsBottomElementProps) {
  return (
    <>
      <AvailableFundsHeader availableFunds={availableFunds} />
      <AvailableFundsDetail
        cashAndLiquidAssets={cashAndLiquidAssets}
        savingsAccount={savingsAccount}
        plannedExpenditure={plannedExpenditure}
      />
    </>
  );
}
