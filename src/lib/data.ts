import { startOfMonth, subDays, subMonths } from 'date-fns';

const transactionTypesData = [
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
];

const transactionStatusData = [
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
];

const dateFilters = [
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
];

export { transactionTypesData, transactionStatusData, dateFilters };
