import {useMemo, useState} from 'react';
import {find} from 'lodash';
import {CreateTransactionStackRouteProp} from 'navigators/types';
import {NewAccount} from 'types/account';
import {CategoryName} from 'constants/components/SelectForm';
import Container from 'components/screens/CreateTransactionStack/Container';
import useAccount from 'hooks/useAccount';
import LeftButton from 'components/screens/CreateTransactionStack/LeftButton';
import RightButton from 'components/screens/CreateTransactionStack/RightButton';
import CommonSelectItem from 'components/@common/CommonSelectItem';
import SelectFormBottomSheet from 'components/@common/SelectForm/SelectFormBottomSheet';
import useGetCategoryList from 'hooks/queries/AccountCategoryScreen/useGetCategoryList';
import Typography from 'components/@common/Typography';
import {
  PrimaryCategory,
  SecondaryCategory,
  TertiaryCategory,
} from 'types/components/Transaction';

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
  const {data: categoryList, isLoading} = useGetCategoryList();

  const [updatedAccount, setUpdatedAccount] = useState<NewAccount>(account);

  const [bottomSheet, setBottomSheet] = useState<BottomSheetType | null>(null);
  const close = () => setBottomSheet(null);

  const disabled = useMemo(() => {
    return !updatedAccount.category.tertiaryId;
  }, [updatedAccount.category.tertiaryId]);

  const {
    primaryCategory,
    secondaryCategory,
    tertiaryCategory,
  }: {
    primaryCategory: PrimaryCategory | undefined;
    secondaryCategory: SecondaryCategory | undefined;
    tertiaryCategory: TertiaryCategory | undefined;
  } = useMemo(() => {
    let primary: PrimaryCategory | undefined;
    let secondary: SecondaryCategory | undefined;
    let tertiary: TertiaryCategory | undefined;

    if (!categoryList) {
      return {
        primaryCategory: primary,
        secondaryCategory: secondary,
        tertiaryCategory: tertiary,
      };
    }

    primary = updatedAccount.category.primaryId
      ? find(categoryList, {
          id: updatedAccount.category.primaryId,
        })
      : undefined;

    if (primary) {
      secondary = updatedAccount.category.secondaryId
        ? find(primary.subList, {
            id: updatedAccount.category.secondaryId,
          })
        : undefined;

      if (secondary) {
        tertiary = updatedAccount.category.tertiaryId
          ? find(secondary.subList, {
              id: updatedAccount.category.tertiaryId,
            })
          : undefined;
      }
    }

    return {
      primaryCategory: primary,
      secondaryCategory: secondary,
      tertiaryCategory: tertiary,
    };
  }, [
    categoryList,
    updatedAccount.category.primaryId,
    updatedAccount.category.secondaryId,
    updatedAccount.category.tertiaryId,
  ]);

  return (
    <Container
      screen="AccountCategory"
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
      {(() => {
        if (isLoading || !categoryList) {
          // Todo: suspense
          return <Typography>불러오는 중</Typography>;
        }

        return (
          <>
            <CommonSelectItem
              label={CategoryName.primary}
              disabled={isLoading}
              onPress={() => setBottomSheet(BottomSheetType.Primary)}
              value={primaryCategory?.name}
              placeholder={
                isLoading ? '불러오는 중...' : '대분류를 선택해주세요'
              }
              bottomSheet={
                <SelectFormBottomSheet
                  label={CategoryName.primary}
                  categoryList={categoryList.map(primary => primary.name)}
                  setCategoryList={console.log}
                  isBottomSheetOpen={bottomSheet === BottomSheetType.Primary}
                  setIsBottomSheetOpen={close}
                  onOpen={() => setBottomSheet(BottomSheetType.Primary)}
                  onClose={close}
                  setValue={primaryName => {
                    const primary = find(categoryList, {
                      name: primaryName,
                    }) as PrimaryCategory;

                    setUpdatedAccount(prev => ({
                      ...prev,
                      category: {
                        primaryId: primary?.id ?? null,
                        secondaryId: null,
                        tertiaryId: null,
                      },
                    }));
                  }}
                />
              }
            />
            <CommonSelectItem
              label={CategoryName.secondary}
              disabled={!primaryCategory}
              onPress={() => setBottomSheet(BottomSheetType.Secondary)}
              value={secondaryCategory?.name}
              placeholder={
                !primaryCategory
                  ? '대분류를 먼저 선택해주세요'
                  : '중분류를 선택해주세요'
              }
              bottomSheet={
                <SelectFormBottomSheet
                  label={CategoryName.secondary}
                  categoryList={
                    primaryCategory
                      ? primaryCategory.subList.map(secondary => secondary.name)
                      : []
                  }
                  setCategoryList={console.log}
                  isBottomSheetOpen={bottomSheet === BottomSheetType.Secondary}
                  setIsBottomSheetOpen={close}
                  onOpen={() => setBottomSheet(BottomSheetType.Secondary)}
                  onClose={close}
                  setValue={secondaryName => {
                    const secondary = find(
                      (primaryCategory as PrimaryCategory).subList,
                      {name: secondaryName},
                    ) as SecondaryCategory;

                    setUpdatedAccount(prev => ({
                      ...prev,
                      category: {
                        ...prev.category,
                        secondaryId: secondary.id,
                        tertiaryId: null,
                      },
                    }));
                  }}
                />
              }
            />
            <CommonSelectItem
              label={CategoryName.tertiary}
              disabled={!secondaryCategory}
              onPress={() => setBottomSheet(BottomSheetType.Tertiary)}
              value={tertiaryCategory?.name}
              placeholder={
                !secondaryCategory
                  ? '중분류를 먼저 선택해주세요'
                  : '소분류를 선택해주세요'
              }
              bottomSheet={
                <SelectFormBottomSheet
                  label={CategoryName.tertiary}
                  categoryList={
                    secondaryCategory
                      ? secondaryCategory.subList.map(
                          secondary => secondary.name,
                        )
                      : []
                  }
                  setCategoryList={console.log}
                  isBottomSheetOpen={bottomSheet === BottomSheetType.Tertiary}
                  setIsBottomSheetOpen={close}
                  onOpen={() => setBottomSheet(BottomSheetType.Tertiary)}
                  onClose={close}
                  setValue={tertiaryName => {
                    const tertiary = find(
                      (secondaryCategory as SecondaryCategory).subList,
                      {name: tertiaryName},
                    ) as TertiaryCategory;

                    setUpdatedAccount(prev => ({
                      ...prev,
                      category: {...prev.category, tertiaryId: tertiary.id},
                    }));
                  }}
                />
              }
            />
          </>
        );
      })()}
    </Container>
  );
}
