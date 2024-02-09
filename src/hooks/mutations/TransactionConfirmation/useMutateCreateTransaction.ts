import {useMutation, useQueryClient} from '@tanstack/react-query';
import {transactionApi} from 'apis/transactionApi';
import {ledgerQueryKeys} from 'constants/queryKeys/ledger';
import {NewTransaction} from 'types/transaction';

export default function useMutateCreateTransaction() {
  const queryClient = useQueryClient();
  const {
    mutate: createTransaction,
    isPending,
    isError,
  } = useMutation({
    mutationFn: (transaction: NewTransaction) => {
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
    isPending,
    isError,
  };
}
