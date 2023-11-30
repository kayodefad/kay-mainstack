/* eslint-disable arrow-body-style */

'use client';

import { Button } from '@/components/ui/button';
import { formatAmount } from '@/lib/utils';
import dayjs from 'dayjs';
import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const BarChartTooltip = ({ active, payload }: { active?: boolean; payload?: { value: number; payload: { type: string } }[] }) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-1 rounded-lg bg-[#202020] px-2 py-1 text-xs font-semibold text-white outline-none">
        <span>{`${payload[0].payload.type[0].toUpperCase()}${payload[0].payload.type.slice(1)}`}</span>
        <span>{`USD ${formatAmount(payload[0]?.value || 0)}`}</span>
      </div>
    );
  }

  return null;
};

const data = [
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

const RevenueLineChart = () => {
  const amount = 120500;
  return (
    <div className="flex h-full flex-col justify-between gap-12">
      <div className="flex items-center gap-12">
        <div className="flex flex-col gap-[10px]">
          <p className="text-sm font-medium text-[#56616B]">Available Balance</p>
          <p className="text-4xl font-bold">
            <span>USD&nbsp;</span>
            <span>{formatAmount(amount || 0)}</span>
          </p>
        </div>
        <Button className="h-auto w-[167px] rounded-full bg-[#131316] px-7 py-[14px] text-base">Withdraw</Button>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="99%" height="99%">
          <LineChart data={data} margin={{ top: 0, right: 10, left: 10, bottom: -10 }}>
            <CartesianGrid vertical={false} horizontal={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => {
                return dayjs(tick).format('MMM DD, YYYY');
              }}
              tick={{ fill: '#56616B', fontSize: 14 }}
              stroke="#C4C4C4"
            />
            <Tooltip cursor={false} content={<BarChartTooltip />} />
            <Line type="monotone" dataKey="amount" stroke="#FF5403" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueLineChart;
