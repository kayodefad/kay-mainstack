/* eslint-disable arrow-body-style */

'use client';

import InfoIcon from '@/components/SVGs/InfoIcon';
import useGetWallet from '@/hooks/queries/useGetWallet';
import { formatAmount } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const WalletData = () => {
  const [walletData, setWalletData] = useState([
    {
      title: 'Ledger Balance',
      amount: 0,
    },
    {
      title: 'Total Payout',
      amount: 0,
    },
    {
      title: 'Total Revenue',
      amount: 0,
    },
    {
      title: 'Pending Payout',
      amount: 0,
    },
  ]);
  const getWalletData = useGetWallet();

  useEffect(() => {
    if (!getWalletData.isLoading) {
      setWalletData([
        {
          title: 'Ledger Balance',
          amount: getWalletData?.data?.ledger_balance!,
        },
        {
          title: 'Total Payout',
          amount: getWalletData?.data?.total_payout!,
        },
        {
          title: 'Total Revenue',
          amount: getWalletData?.data?.total_revenue!,
        },
        {
          title: 'Pending Payout',
          amount: getWalletData?.data?.pending_payout!,
        },
      ]);
    }
  }, [getWalletData.isLoading]);

  return (
    <div className="flex flex-col gap-8">
      {walletData.map((wallet) => {
        return (
          <div key={uuid()} className="flex items-start justify-between">
            <div className="flex flex-col gap-[10px]">
              <p className="text-sm font-medium text-[#56616B]">{wallet.title}</p>
              <p className="text-[28px] font-bold leading-[38px]">
                {getWalletData.isLoading ? (
                  '--'
                ) : (
                  <>
                    <span>USD&nbsp;</span>
                    <span>{formatAmount(wallet.amount || 0)}</span>
                  </>
                )}
              </p>
            </div>
            <InfoIcon />
          </div>
        );
      })}
    </div>
  );
};

export default WalletData;
