/* eslint-disable arrow-body-style */

'use client';

import { Button } from '@/components/ui/button';
import useGetTransactions, { TransactionType } from '@/hooks/queries/useGetTransactions';
import useGetWallet from '@/hooks/queries/useGetWallet';
import { capitalize, formatAmount } from '@/lib/utils';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const LineChartTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { value: number; payload: { type: string } }[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-1 rounded-lg bg-[#202020] px-2 py-1 text-xs font-semibold text-white outline-none">
        <span>{capitalize(payload[0].payload.type)}</span>
        <span>{`USD ${formatAmount(payload[0]?.value || 0)}`}</span>
      </div>
    );
  }

  return null;
};

const RevenueLineChart = () => {
  const { data: walletData, isLoading } = useGetWallet();
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const getTransactions = useGetTransactions();

  useEffect(() => {
    if (!getTransactions.isLoading) {
      setTransactions(getTransactions.data!);
    }
  }, [getTransactions.isLoading]);

  return (
    <div className="flex h-full flex-col justify-between gap-12">
      <div className="flex items-center gap-12">
        <div className="flex flex-col gap-[10px]">
          <p className="text-sm font-medium text-[#56616B]">Available Balance</p>
          <p className="text-4xl font-bold">
            {isLoading ? (
              '--'
            ) : (
              <>
                <span>USD&nbsp;</span>
                <span>{formatAmount(walletData?.balance || 0)}</span>
              </>
            )}
          </p>
        </div>
        <Button className="h-auto w-[167px] rounded-full bg-[#131316] px-7 py-[14px] text-base">Withdraw</Button>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="99%" height="99%">
          <LineChart data={transactions} margin={{ top: 0, right: 10, left: 10, bottom: -10 }}>
            <CartesianGrid vertical={false} horizontal={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => {
                return dayjs(tick).format('MMM DD, YYYY');
              }}
              tick={{ fill: '#56616B', fontSize: 14 }}
              stroke="#C4C4C4"
            />
            <Tooltip cursor={false} content={<LineChartTooltip />} />
            <Line type="monotone" dataKey="amount" stroke="#FF5403" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueLineChart;
