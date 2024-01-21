import {useState} from 'react';
import 'dayjs/locale/ko';
import ScreenContainer from 'components/@common/ScreenContainer';
import MonthHeader from 'components/TransactionScreen/MonthHeader';
import FinancialOverview from 'components/TransactionScreen/FinancialOverview';
import FinancialCalendar from 'components/TransactionScreen/FinancialCalendar';

export default function TransactionScreen() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <ScreenContainer contentContainerStyle={{paddingVertical: 0}}>
      <MonthHeader currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <FinancialOverview />
      <FinancialCalendar currentDate={currentDate} />
    </ScreenContainer>
  );
}
