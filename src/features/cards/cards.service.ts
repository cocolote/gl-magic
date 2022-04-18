import { http } from '@shared/utils/http-client';

type filtersType = {
  page: number,
  filters?: {
    [key: string]: string,
    name: string,
    colors: string,
  },
};

const dOptions = {
  pageSize: 20,
  contains: ['imageUrl'],
};

const getAll = async ({ page, filters }: filtersType): Promise<any> => {
  let url = 'https://api.magicthegathering.io/v1/cards'
    + `?page=${page}`
    + `&pageSize=${dOptions.pageSize}`
    + `&contains=${dOptions.contains.join(',')}`;

    if (filters) Object.keys(filters).forEach((fKey: string) => {
      if (filters[fKey].replaceAll(' ', '').length > 0) {
        url = url + `&${fKey}=${filters[fKey]}`;
      }
    });

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
