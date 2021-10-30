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
        width={30}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 18.111c1.291.999 3.231 1.582 5.445 1.556 2.214.026 4.154-.557 5.445-1.556 1.292-.998 3.232-1.582 5.445-1.555 2.214-.027 4.154.556 5.446 1.555M8.779 1a3.733 3.733 0 00-1.556 3.111 3.733 3.733 0 001.556 3.111M15.002 1a3.734 3.734 0 00-1.556 3.111 3.732 3.732 0 001.556 3.111"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M1 10.921h21.78V18.7a9.332 9.332 0 01-9.334 9.333h-3.111A9.335 9.335 0 011 18.7V10.92z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M22.386 22.352a4.669 4.669 0 006.61-4.03 4.665 4.665 0 00-3.97-4.826 4.668 4.668 0 00-2.248.214"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    </Button>
  );
}

export default SvgComponent;
