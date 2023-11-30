/* eslint-disable no-nested-ternary */
import { v4 as uuid } from 'uuid';
import { capitalize, formatAmount } from '@/lib/utils';
import dayjs from 'dayjs';
import ChevronDown from '../SVGs/ChevronDown';
import DownloadIcon from '../SVGs/DownloadIcon';
import { Button } from '../ui/button';
import ArrowIcon from '../SVGs/ArrowIcon';

const transactions = [
  {
    amount: 500,
    metadata: {
      name: 'John Doe',
      type: 'digital_product',
      email: 'johndoe@example.com',
      quantity: 1,
      country: 'Nigeria',
      product_name: 'Rich Dad Poor Dad',
    },
    payment_reference: 'c3f7123f-186f-4a45-b911-76736e9c5937',
    status: 'successful',
    type: 'deposit',
    date: '2022-03-03',
  },
  {
    amount: 400,
    metadata: {
      name: 'Fibi Brown',
      type: 'coffee',
      email: 'fibibrown@example.com',
      quantity: 8,
      country: 'Ireland',
    },
    payment_reference: 'd28db158-0fc0-40cd-826a-4243923444f7',
    status: 'successful',
    type: 'deposit',
    date: '2022-03-02',
  },
  {
    amount: 350.56,
    metadata: {
      name: 'Delvan Ludacris',
      type: 'webinar',
      email: 'johndoe@example.com',
      quantity: 1,
      country: 'Kenya',
      product_name: 'How to build an online brand',
    },
    payment_reference: '73f45bc0-8f41-4dfb-9cae-377a32b71d1e',
    status: 'successful',
    type: 'deposit',
    date: '2022-03-01',
  },
  {
    amount: 300,
    status: 'successful',
    type: 'withdrawal',
    date: '2022-03-01',
  },
  {
    amount: 300,
    metadata: {
      name: 'Shawn kane',
      type: 'webinar',
      email: 'shawnkane@example.com',
      quantity: 1,
      country: 'United Kingdom',
      product_name: 'Support my outreach',
    },
    payment_reference: 'c22055e5-8f47-4059-a1e9-51124d325992',
    status: 'successful',
    type: 'deposit',
    date: '2022-02-28',
  },
  {
    amount: 200,
    status: 'successful',
    type: 'withdrawal',
    date: '2022-03-01',
  },
  {
    amount: 200,
    metadata: {
      name: 'Ada Eze',
      type: 'webinar',
      email: 'adaeze1@example.com',
      quantity: 1,
      country: 'Nigeria',
      product_name: 'Learn how to pitch your idea',
    },
    payment_reference: '5b2988d9-395e-4a91-984b-8b02f0d12df9',
    status: 'successful',
    type: 'deposit',
    date: '2022-02-20',
  },
];

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
  return transaction?.metadata?.name ? transaction?.metadata?.name : transaction?.status ? renderStatus(transaction?.status) : '--';
};

const TransactionsTable = () => {
  return (
    <div className="mb-40 mt-16">
      <div className="mb-8 border-b border-[#EFF1F6] py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-[#131316]">24 Transactions</p>
            <p className="text-sm font-medium text-[#56616B]">Your transactions for the last 7 days</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="h-auto gap-1 rounded-full py-3 pl-[30px] pr-5 text-base font-semibold">
              <span>Filter</span>
              <ChevronDown />
            </Button>
            <Button variant="secondary" className="h-auto gap-1 rounded-full py-3 pl-[30px] pr-5 pr-5 text-base font-semibold">
              <span>Export list</span>
              <DownloadIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {transactions.map((transaction) => {
          return (
            <div key={uuid()} className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full ${transaction.type === 'withdrawal' ? 'bg-[#F9E3E0]' : 'bg-[#E3FCF2]'}`}>
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
                <p className="flex justify-end text-sm font-medium text-[#56616B]">{dayjs(transaction?.date || new Date().toLocaleString()).format('MMM DD, YYYY')}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionsTable;
