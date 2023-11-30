import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

type GetWalletResponse = {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
};

export const QUERY_KEY_FEATURES = 'Get Wallet';

export const getWallet = async (): Promise<GetWalletResponse> => {
  const response = await axios.get('https://fe-task-api.mainstack.io/wallet');

  return response.data;
};

const useGetWallet = () => {
  return useQuery([QUERY_KEY_FEATURES], () => getWallet(), {
    refetchOnWindowFocus: true,
    onSuccess: () => {},
    onError: (err: AxiosError) => {
      console.log(err.message);
    },
  });
};

export default useGetWallet;
