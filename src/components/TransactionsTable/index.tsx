/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */

'use client';

import { v4 as uuid } from 'uuid';
import { capitalize, cn, formatAmount } from '@/lib/utils';
import dayjs from 'dayjs';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';
import format from 'date-fns/format';
import { startOfMonth, subDays, subMonths } from 'date-fns';
import useGetTransactions, { TransactionType } from '@/hooks/queries/useGetTransactions';
import DownloadIcon from '../SVGs/DownloadIcon';
import { Button } from '../ui/button';
import ArrowIcon from '../SVGs/ArrowIcon';
import { Calendar } from '../ui/calendar';
import MultiSelect, { OptionType } from '../MultiSelect';

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

const TransactionsTable = () => {
  const [dateFrom, setDateFrom] = React.useState<Date>();
  const [dateTo, setDateTo] = React.useState<Date>();
  const [transactionTypes, setTransactionTypes] = React.useState<OptionType[]>([
    {
      text: 'Store Transactions',
      checked: false,
    },
    {
      text: 'Get Tipped',
      checked: false,
    },
    {
      text: 'Withdrawals',
      checked: false,
    },
    {
      text: 'Chargebacks',
      checked: false,
    },
    {
      text: 'Cashbacks',
      checked: false,
    },
    {
      text: 'Refer & Earn',
      checked: false,
    },
  ]);
  const [transactionStatus, setTransactionStatus] = React.useState<OptionType[]>([
    {
      text: 'Successful',
      checked: false,
    },
    {
      text: 'Pending',
      checked: false,
    },
    {
      text: 'Failed',
      checked: false,
    },
  ]);

  const [fixedDateFilters, setFixedDateFilters] = React.useState<
    { text: string; dateFrom: Date; dateTo: Date; selected: boolean }[]
  >([
    {
      text: 'Today',
      dateFrom: new Date(),
      dateTo: new Date(),
      selected: true,
    },
    {
      text: 'Last 7 days',
      dateFrom: subDays(new Date(), 7),
      dateTo: new Date(),
      selected: false,
    },
    {
      text: 'This month',
      dateFrom: startOfMonth(new Date()),
      dateTo: new Date(),
      selected: false,
    },
    {
      text: 'Last 3 months',
      dateFrom: subMonths(new Date(), 3),
      dateTo: new Date(),
      selected: false,
    },
  ]);

  React.useEffect(() => {
    setDateFrom(fixedDateFilters[0].dateFrom);
    setDateTo(fixedDateFilters[0].dateTo);
  }, []);

  const [transactions, setTransactions] = React.useState<TransactionType[]>([]);

  const getTransactions = useGetTransactions();

  React.useEffect(() => {
    if (!getTransactions.isLoading) {
      setTransactions(getTransactions.data!);
    }
  }, [getTransactions.isLoading]);

  return (
    <div className="mb-40 mt-16">
      <div className="mb-8 border-b border-[#EFF1F6] py-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-[#131316]">
              <span>{`${transactions.length}`}</span>
              &nbsp;
              <span>Transactions</span>
            </p>
            <p className="text-sm font-medium text-[#56616B]">Your transactions for the last 7 days</p>
          </div>
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  className="h-auto gap-1 rounded-full px-[22px] py-3 text-base font-semibold"
                >
                  <span>Filter</span>
                  <ChevronDown className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bottom-[1.5%] left-auto right-0 top-[1.5%] max-w-[456px] -translate-x-10 translate-y-0 overflow-hidden !rounded-[20px] !px-[22px] py-6 text-[#131316] !duration-700 data-[state=closed]:slide-out-to-right-[500px] data-[state=open]:slide-in-from-right-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Filter</DialogTitle>
                  <div className="!mt-6 flex w-full justify-between overflow-hidden">
                    {fixedDateFilters.map((filter) => {
                      return (
                        <button
                          type="button"
                          className={cn(
                            'cursor-pointer rounded-full border border-[#EFF1F6] px-[18px] py-[10px] text-[13px] font-semibold',
                            filter.selected && 'bg-[#EEF1F6]',
                          )}
                          key={uuid()}
                          onClick={() => {
                            setDateFrom(filter.dateFrom);
                            setDateTo(filter.dateTo);
                            setFixedDateFilters((prevFilters) => {
                              return prevFilters.map((prevFilter) => {
                                if (prevFilter.text === filter.text) {
                                  return { ...prevFilter, selected: true };
                                }
                                return { ...prevFilter, selected: false };
                              });
                            });
                          }}
                        >
                          {filter.text}
                        </button>
                      );
                    })}
                  </div>
                  <div className="!mt-6 flex flex-col gap-6">
                    <div>
                      <p className="mb-3 font-semibold">Date Range</p>
                      <div className="flex items-center gap-3">
                        <Popover>
                          <PopoverTrigger asChild className="group">
                            <Button
                              variant="outline"
                              className={cn(
                                'h-[44px] flex-1 justify-start rounded-xl text-left !text-sm font-normal',
                                !dateFrom && 'text-muted-foreground',
                              )}
                            >
                              {dateFrom ? format(dateFrom, 'dd MMM yyyy') : <span>Pick a date</span>}
                              <ChevronDown className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] ml-auto flex h-4 w-4 items-center justify-end transition-transform duration-300 group-data-[state=open]:rotate-180 " />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent align="start" className="w-auto rounded-2xl border-none p-0">
                            <Calendar
                              className="p-[33.7px]"
                              mode="single"
                              selected={dateFrom}
                              onSelect={(date) => {
                                setFixedDateFilters(fixedDateFilters.map((filter) => ({ ...filter, selected: false })));
                                setDateFrom(date);
                              }}
                              initialFocus
                              showOutsideDays={false}
                            />
                          </PopoverContent>
                        </Popover>
                        <Popover>
                          <PopoverTrigger asChild className="group">
                            <Button
                              variant="outline"
                              className={cn(
                                'h-[44px] flex-1 justify-start rounded-xl text-left !text-sm font-normal',
                                !dateTo && 'text-muted-foreground',
                              )}
                            >
                              {dateTo ? format(dateTo, 'dd MMM yyyy') : <span>Pick a date</span>}
                              <ChevronDown className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] ml-auto flex h-4 w-4 items-center justify-end transition-transform duration-300 group-data-[state=open]:rotate-180 " />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent align="end" className="w-auto rounded-2xl border-none p-0">
                            <Calendar
                              className="p-[33.7px]"
                              mode="single"
                              selected={dateTo}
                              onSelect={(date) => {
                                setFixedDateFilters(fixedDateFilters.map((filter) => ({ ...filter, selected: false })));
                                setDateTo(date);
                              }}
                              initialFocus
                              showOutsideDays={false}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 font-semibold">Transaction Type</p>
                      <MultiSelect
                        options={transactionTypes}
                        setOptions={setTransactionTypes}
                        placeholder="Select transaction type"
                      />
                    </div>
                    <div>
                      <p className="mb-3 font-semibold">Transaction Status</p>
                      <MultiSelect
                        options={transactionStatus}
                        setOptions={setTransactionStatus}
                        placeholder="Select transaction status"
                      />
                    </div>
                  </div>
                </DialogHeader>
                <DialogFooter className="mt-auto flex">
                  <DialogClose asChild>
                    <Button
                      variant="ghost"
                      className="h-[50px] flex-1 rounded-full border border-[#EFF1F6]"
                      type="button"
                    >
                      Clear
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button className="h-[50px] flex-1 rounded-full " type="submit">
                      Apply
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button
              variant="secondary"
              className="h-auto gap-1 rounded-full py-3 pl-[30px] pr-5 text-base font-semibold"
            >
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
    </div>
  );
};

export default TransactionsTable;
