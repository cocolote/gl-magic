import { useState, useEffect, ReactElement } from 'react';
import {
  PagerContainer,
  ChangePage,
  SelectPage,
} from './styled.components';

type pagerType = {
  page: number,
  pageSize: number,
  total: number,
  newPage: (e: any) => void,
};

function Pager({ page, pageSize, total, newPage }: pagerType): ReactElement<typeof Pager> | null {
  const [lPage, setLPage] = useState<number>(+page);
  const [pages, setPages] = useState<number>(0);
  const [pageChangeDebounce, setPageChangeDebounce] = useState<any>(null);

  // Update pages that can be selected when total change or pageSize
  useEffect(() => {
    // Make sure we don't do division by zero
    if (typeof pageSize === 'number' && pageSize > 0)
      setPages(Math.ceil(total / pageSize));

    // Back to first page
    setLPage(1);
  }, [pageSize, total]);

  // Go back one page
  const backOne = (_: any) => {
    const prevPage = lPage - 1 < 1 ? 1 : lPage - 1;
    setLPage(prevPage);
    if (pageChangeDebounce) clearTimeout(pageChangeDebounce);
    setPageChangeDebounce(
      setTimeout(
        () => { newPage(prevPage); },
        800
      )
    );
  };

  // Go forward one page
  const forwardOne = (_: any) => {
    const nexPage = lPage + 1 > pages ? pages : lPage + 1;
    setLPage(nexPage);
    if (pageChangeDebounce) clearTimeout(pageChangeDebounce);
    setPageChangeDebounce(
      setTimeout(
        () => { newPage(nexPage); },
        800
      )
    );
  };

  const selectPage = (e: any) => {
    setLPage(+e.target.value);
    if (pageChangeDebounce) clearTimeout(pageChangeDebounce);
    setPageChangeDebounce(
      setTimeout(
        () => { newPage(+e.target.value); },
        800
      )
    );
  };

  return total > pageSize ? (
    <PagerContainer>
      <p>Page</p>
      <ChangePage onClick={backOne}>{'<<'}</ChangePage>
      <SelectPage value={lPage} onChange={selectPage}>
        {[...new Array(pages).keys()].map((n: number) => (
          <option key={'page-'+n+1} value={n+1}>{n+1}</option>
        ))}
      </SelectPage>
      <ChangePage onClick={forwardOne}>{'>>'}</ChangePage>
      <p>/</p>
      <p>{pages}</p>
    </PagerContainer>
  ) : null;
}

Pager.defaultProps = {
  page: 1,
  pageSize: 20,
};

export default Pager;
