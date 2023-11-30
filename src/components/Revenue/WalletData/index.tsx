/* eslint-disable arrow-body-style */

import InfoIcon from '@/components/SVGs/InfoIcon';
import { formatAmount } from '@/lib/utils';
import { v4 as uuid } from 'uuid';

const walletData = [
  {
    title: 'Ledger Balance',
    amount: 0,
  },
  {
    title: 'Total Payout',
    amount: 55080,
  },
  {
    title: 'Total Revenue',
    amount: 175580,
  },
  {
    title: 'Pending Payout',
    amount: 0,
  },
];

// {
//   "balance": 750.56,
//   "total_payout": 500,
//   "total_revenue": 1250.56,
//   "pending_payout": 0,
//   "ledger_balance": 500
// }

const WalletData = () => {
  return (
    <div className="flex flex-col gap-8">
      {walletData.map((wallet) => {
        return (
          <div key={uuid()} className="flex items-start justify-between">
            <div className="flex flex-col gap-[10px]">
              <p className="text-sm font-medium text-[#56616B]">{wallet.title}</p>
              <p className="text-[28px] font-bold leading-[38px]">
                <span>USD&nbsp;</span>
                <span>{formatAmount(wallet.amount || 0)}</span>
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
