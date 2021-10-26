import * as React from 'react';
import styled from '@emotion/styled';

const Button = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

function SvgComponent({active}) {
  return (
    <Button>
      <svg
        fill="none"
        height={30}
        stroke={active ? '#602915' : '#5E3E00'}
        width={32}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.82 1.583s-1.486.522-3.82.522c-2.335 0-3.82-.522-3.82-.522-.236 0-.469.04-.69.118L1.385 5.237l1.085 5.741 3.19.36a1.566 1.566 0 011.389 1.604l-.444 15.782h18.79l-.444-15.782a1.566 1.566 0 011.39-1.604l3.188-.36 1.085-5.741L20.51 1.7a2.084 2.084 0 00-.69-.118z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M21.035 1.89c-.295 1.48-.949 2.787-1.86 3.72-.91.932-2.026 1.438-3.175 1.438s-2.265-.506-3.175-1.438c-.911-.933-1.565-2.24-1.86-3.72"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </Button>
  );
}

export default SvgComponent;
