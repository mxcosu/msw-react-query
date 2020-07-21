import axios from 'axios';
import { useQuery } from 'react-query';

export const customGet = () =>
  axios
    .get('https://api.github.com/repos/tannerlinsley/react-query')
    .then((res) => res.data);

// eslint-disable-next-line react-hooks/rules-of-hooks
export const customReactQuery = (opts) => useQuery('test', customGet, opts);
