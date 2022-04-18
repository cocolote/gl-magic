//import { http } from '../../shared/utils/http-client';
import { http } from '@shared/utils/http-client';

type filtersType = {
  name?: string,
  colors?: string,
};

const dOptions = {
  page: 0,
  pageSize: 20,
  contains: ['imageUrl'],
};

const getAll = async (filters: filtersType = {}) => {
  const url = 'https://api.magicthegathering.io/v1/cards'
    + `?page=${dOptions.page}`
    + `&pageSize=${dOptions.pageSize}`
    + `&contains=${dOptions.contains.join(',')}`;

  try {
    const resp = await http.get(url);
    return resp.data;
  } catch (err) {
    // TODO: Better error logs
    console.log(err);
  }
}

export const cardsSrvc = {
  getAll,
};
