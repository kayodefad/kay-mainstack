import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

type Metadata = {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name?: string;
};

export type TransactionType = {
  amount: number;
  metadata?: Metadata;
  payment_reference?: string;
  status: string;
  type: string;
  date: string;
};

export const QUERY_KEY_FEATURES = 'Get Transactions';

export const getWallet = async (): Promise<TransactionType[]> => {
  const response = await axios.get('https://fe-task-api.mainstack.io/transactions');

  return response.data;
};

const useGetTransactions = () => {
  return useQuery([QUERY_KEY_FEATURES], () => getWallet(), {
    refetchOnWindowFocus: true,
    onSuccess: () => {},
    onError: (err: AxiosError) => {
      console.log(err.message);
    },
  });
};

export default useGetTransactions;
