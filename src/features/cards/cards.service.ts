//import { http } from '../../shared/utils/http-client';
import { http } from '@shared/utils/http-client';

const getAll = async (options: any = {}) => {
  const url = `https://api.magicthegathering.io/v1/cards`;

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
