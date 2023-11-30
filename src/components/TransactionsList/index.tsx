/* eslint-disable no-nested-ternary */
import useGetTransactions, { TransactionType } from '@/hooks/queries/useGetTransactions';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { capitalize, formatAmount } from '@/lib/utils';
import dayjs from 'dayjs';
import ArrowIcon from '../SVGs/ArrowIcon';

const renderStatus = (status: string) => {
  let result;
  switch (status) {
    case 'successful':
      result = <span className="text-[#0EA163]">{capitalize(status)}</span>;
      break;
    case 'pending':
      result = <span className="text-[#A77A07]">{capitalize(status)}</span>;
      break;
    case 'failed':
      result = <span className="text-[red]">{capitalize(status)}</span>;
      break;
    default:
      result = <span>{capitalize(status)}</span>;
  }
  return result;
};

const displaySubText = (transaction: any) => {
  return transaction?.metadata?.name
    ? transaction?.metadata?.name
    : transaction?.status
      ? renderStatus(transaction?.status)
      : '--';
};

const TransactionsList = () => {
  const [transactions, setTransactions] = React.useState<TransactionType[]>([]);

  const getTransactions = useGetTransactions();

  React.useEffect(() => {
    if (!getTransactions.isLoading) {
      setTransactions(getTransactions.data!);
    }
  }, [getTransactions.isLoading]);
  return (
    <div className="flex flex-col gap-6">
      {transactions.map((transaction) => {
        return (
          <div key={uuid()} className="flex items-center justify-between">
            <div className="flex gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  transaction.type === 'withdrawal' ? 'bg-[#F9E3E0]' : 'bg-[#E3FCF2]'
                }`}
              >
                {transaction.type === 'withdrawal' ? (
                  <span className="rotate-180">
                    <ArrowIcon fill="#961100" />
                  </span>
                ) : (
                  <span>
                    <ArrowIcon />
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-between font-medium">
                <p className="text-[#131316]">{transaction?.metadata?.product_name || '--'}</p>
                <p className="text-sm text-[#56616B]">{displaySubText(transaction)}</p>
              </div>
            </div>
            <div>
              <p className="flex justify-end font-bold text-[#131316]">
                <span>USD&nbsp;</span>
                <span>{formatAmount(transaction?.amount || 0)}</span>
              </p>
              <p className="flex justify-end text-sm font-medium text-[#56616B]">
                {dayjs(transaction?.date || new Date().toLocaleString()).format('MMM DD, YYYY')}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsList;
