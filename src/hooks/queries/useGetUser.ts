import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

type ResType = {
  first_name: string;
  last_name: string;
  email: string;
};

export const QUERY_KEY_FEATURES = 'Get User';

export const getWallet = async (): Promise<ResType> => {
  const response = await axios.get('https://fe-task-api.mainstack.io/user');

  return response.data;
};

const useGetUser = () => {
  return useQuery([QUERY_KEY_FEATURES], () => getWallet(), {
    refetchOnWindowFocus: true,
    onSuccess: () => {},
    onError: (err: AxiosError) => {
      console.log(err.message);
    },
  });
};

export default useGetUser;
