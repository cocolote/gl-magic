//import { http } from '../../shared/utils/http-client';
import { http } from '@shared/utils/http-client';

type filtersType = {
  page: number,
  name?: string,
  colors?: string,
};

const dOptions = {
  pageSize: 20,
  contains: ['imageUrl'],
};

const getAll = async ({ page, name, colors }: filtersType = { page: 1 }) => {
  const url = 'https://api.magicthegathering.io/v1/cards'
    + `?page=${page}`
    + `&pageSize=${dOptions.pageSize}`
    + `&contains=${dOptions.contains.join(',')}`;

  try {
    const resp = await http.get(url);
    return resp;
  } catch (err) {
    // TODO: Better error logs
    console.log(err);
  }
}

export const cardsSrvc = {
  getAll,
};
