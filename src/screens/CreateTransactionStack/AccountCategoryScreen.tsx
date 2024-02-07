import {useMemo, useState} from 'react';
import {isEmpty} from 'lodash';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {NewAccount} from 'types/account';
import {CategoryName} from 'constants/components/SelectForm';
import Container from 'components/screens/CreateTransactionStack/Container';
import useAccount from 'hooks/useAccount';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import SelectFormBottomSheet from 'components/@common/SelectForm/SelectFormBottomSheet';

type AccountCategoryScreenProps = {
  route: CreateTransactionStackRouteProp<'AccountCategory'>;
};

const enum BottomSheetType {
  Primary,
  Secondary,
  Tertiary,
}

/** 거래 추가 Step 3 */
export default function AccountCategoryScreen({
  route: {params},
}: AccountCategoryScreenProps) {
  const {isUpdateStep, accountIndex} = params;

  const {account} = useAccount({accountIndex});

  const [updatedAccount, setUpdatedAccount] = useState<NewAccount>(account);

  const [bottomSheet, setBottomSheet] = useState<BottomSheetType | null>(null);
  const close = () => setBottomSheet(null);

  const disabled = useMemo(() => {
    return (
      isEmpty(updatedAccount.category.primary) ||
      isEmpty(updatedAccount.category.secondary) ||
      isEmpty(updatedAccount.category.tertiary)
    );
  }, [
    updatedAccount.category.primary,
    updatedAccount.category.secondary,
    updatedAccount.category.tertiary,
  ]);

  return (
    <Container
      screen="AccountCategory"
      accountIndex={accountIndex}
      header={{title: '자산 항목을 선택해 주세요'}}
      fixedBottomComponent={
        <>
          <LeftButton isUpdateStep={isUpdateStep} />
          <RightButton
            account={updatedAccount}
            disabled={disabled}
            nextScreen="AccountAmount"
            isUpdateStep={isUpdateStep}
            accountIndex={accountIndex}
          />
        </>
      }>
      <CommonSelectItem
        label={CategoryName.primary}
        onPress={() => setBottomSheet(BottomSheetType.Primary)}
        value={updatedAccount.category.primary}
        placeholder={'대분류를 선택해주세요'}
        bottomSheet={
          <SelectFormBottomSheet
            label={CategoryName.primary}
            categoryList={dummyCategories}
            setCategoryList={console.log}
            isBottomSheetOpen={bottomSheet === BottomSheetType.Primary}
            setIsBottomSheetOpen={close}
            onOpen={() => setBottomSheet(BottomSheetType.Primary)}
            onClose={close}
            setValue={primary =>
              setUpdatedAccount(prev => ({
                ...prev,
                category: {primary: primary, secondary: '', tertiary: ''},
              }))
            }
          />
        }
      />
      <CommonSelectItem
        label={CategoryName.secondary}
        disabled={isEmpty(updatedAccount.category.primary)}
        onPress={() => setBottomSheet(BottomSheetType.Secondary)}
        value={updatedAccount.category.secondary}
        placeholder={
          isEmpty(updatedAccount.category.primary)
            ? '대분류를 먼저 선택해주세요'
            : '중분류를 선택해주세요'
        }
        bottomSheet={
          <SelectFormBottomSheet
            label={CategoryName.secondary}
            categoryList={dummyCategories}
            setCategoryList={console.log}
            isBottomSheetOpen={bottomSheet === BottomSheetType.Secondary}
            setIsBottomSheetOpen={close}
            onOpen={() => setBottomSheet(BottomSheetType.Secondary)}
            onClose={close}
            setValue={secondary =>
              setUpdatedAccount(prev => ({
                ...prev,
                category: {...prev.category, secondary, tertiary: ''},
              }))
            }
          />
        }
      />
      <CommonSelectItem
        label={CategoryName.tertiary}
        disabled={isEmpty(updatedAccount.category.secondary)}
        onPress={() => setBottomSheet(BottomSheetType.Tertiary)}
        value={updatedAccount.category.tertiary}
        placeholder={
          isEmpty(updatedAccount.category.secondary)
            ? '중분류를 먼저 선택해주세요'
            : '소분류를 선택해주세요'
        }
        bottomSheet={
          <SelectFormBottomSheet
            label={CategoryName.tertiary}
            categoryList={dummyCategories}
            setCategoryList={console.log}
            isBottomSheetOpen={bottomSheet === BottomSheetType.Tertiary}
            setIsBottomSheetOpen={close}
            onOpen={() => setBottomSheet(BottomSheetType.Tertiary)}
            onClose={close}
            setValue={tertiary =>
              setUpdatedAccount(prev => ({
                ...prev,
                category: {...prev.category, tertiary},
              }))
            }
          />
        }
      />
    </Container>
  );
}

const dummyCategories = [
  '현금',
  '보통예금',
  '정기예금',
  '유가증권',
  '기타유동자산',
];
