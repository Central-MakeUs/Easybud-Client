import {useMutation, useQueryClient} from '@tanstack/react-query';
import {transactionApi} from 'apis/transactionApi';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';
import {AccountTypeUnion} from 'types/account';
import {TransactionDTO, AccountTypeDTO} from 'types/dtos/transaction';
import {NewTransaction} from 'types/transaction';

export default function useMutateCreateTransaction() {
  const queryClient = useQueryClient();

  const {mutate: createTransaction, ...props} = useMutation({
    mutationFn: ({date, summary, accounts}: NewTransaction) => {
      const transaction: TransactionDTO = {
        date: date,
        summary: summary ?? '',
        accounts: accounts.map(({amount, category, type}) => ({
          accountType: getAccountType(type),
          amount,
          tertiaryCategoryId: category.tertiaryId as number,
        })),
      };

      return transactionApi.postTransaction(transaction);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          [ledgerQueryKeys.recentTransactionList],
          [ledgerQueryKeys.availableFundsData],
        ],
      });
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
