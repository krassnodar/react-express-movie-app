import React from 'react';
import {
  Wrapper,
  Ul,
  Li,
  Button
} from './pagination.style';

interface IProps {
  page: number,
  setPage: (pageNumber: number) => void
}

const Pagination = ({ page, setPage }: IProps) => {
  const array = [1,2,3,4,5,6,7,8,9,10];

  const handlePaginationButton = (pageNumber: number) => {
    setPage(pageNumber);
    window.scroll(0, 0);
  }

  return (
    <Wrapper>
      <Ul>
        {array.map(pageNumber => (
          <Li 
            key={pageNumber}
            onClick={() => handlePaginationButton(pageNumber)}
          >
            <Button 
              active={page === pageNumber}
            >
              {pageNumber}
            </Button>
          </Li>
        ))}
      </Ul>
    </Wrapper>
  )
}

export default Pagination;