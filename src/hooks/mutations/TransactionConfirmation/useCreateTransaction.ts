import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {transactionApi} from 'apis/transactionApi';
import useTransaction from 'hooks/useTransaction';
import {AccountTypeUnion} from 'types/account';
import {TransactionDTO, AccountTypeDTO} from 'types/dtos/transaction';

export default function useCreateTransaction() {
  const queryClient = useQueryClient();

  const navigation = useNavigation();
  const {transaction} = useTransaction();

  const {mutate: createTransaction, ...props} = useMutation({
    mutationFn: () => {
      const transactionDTO: TransactionDTO = {
        date: transaction.date,
        summary: transaction.summary ?? '',
        accounts: transaction.accounts
          .filter(
            ({amount, category}) =>
              amount !== 0 && category.tertiaryId !== null,
          )
          .map(({amount, category, type}) => ({
            accountType: getAccountType(type),
            amount,
            tertiaryCategoryId: category.tertiaryId as number,
          })),
      };

      return transactionApi.postTransaction(transactionDTO);
    },
    onSuccess: () => {
      queryClient.removeQueries();

      navigation.navigate('Tab', {screen: 'Ledger'});
    },
  });

  return {
    createTransaction,
    ...props,
  };
}

function getAccountType(type: AccountTypeUnion): AccountTypeDTO {
  const typeName = (() => {
    switch (type.name) {
      case '자산':
        return 'ASSET';
      case '부채':
        return 'LIABILITY';
      case '자본':
        return 'EQUITY';
      case '수익':
        return 'REVENUE';
      case '비용':
        return 'EXPENSE';
    }
  })();

  const typeState = (() => {
    switch (type.change) {
      case '증가':
        return 'INCREASE';
      case '감소':
        return 'DECREASE';
      case '발생':
        return 'OCCURRENCE';
    }
  })();

  return {typeName, typeState};
}
