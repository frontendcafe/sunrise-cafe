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
        height={20}
        stroke={active ? '#602915' : '#5E3E00'}
        width={34}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.775 13.252l-5.127 3.05a3.193 3.193 0 006.337-.563c0-1.01-.478-1.9-1.21-2.487zM20.836 1.032a1.279 1.279 0 011.28 1.279l-1.919 9.591a1.279 1.279 0 01-1.279 1.279h-3.836a1.279 1.279 0 01-1.28-1.279l-1.917-9.59a1.279 1.279 0 011.279-1.28h7.672z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
        <path
          d="M28.187 5.237l-5.886-2.498a1.327 1.327 0 00-.255-.078l-1.849 9.241c0 .564-.367 1.037-.874 1.207.128.163.293.299.497.385l2.354 1a1.28 1.28 0 001.677-.678l5.014-6.901a1.277 1.277 0 00-.677-1.677l-.001-.001z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
        <path
          d="M32.61 10.929l-3.681-3.553a1.23 1.23 0 00-.262-.19l-4.816 6.63a1.267 1.267 0 01-.567.618c-.083.413.037.86.363 1.174l.92.888a1.278 1.278 0 001.808-.032l6.266-3.726a1.278 1.278 0 00-.032-1.809v0zM2.225 13.252l5.127 3.05a3.193 3.193 0 01-6.337-.563c0-1.01.478-1.9 1.21-2.487zM5.813 5.237l5.886-2.498c.083-.035.17-.06.255-.078l1.849 9.241c0 .564.367 1.037.874 1.207-.13.168-.301.3-.497.385l-2.354 1a1.28 1.28 0 01-1.677-.678L5.134 6.915a1.279 1.279 0 01.678-1.677v-.001z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
        <path
          d="M1.39 10.929l3.681-3.553c.08-.077.168-.138.262-.19l4.816 6.63c.117.276.322.485.567.618a1.274 1.274 0 01-.363 1.174l-.92.888a1.279 1.279 0 01-1.808-.032l-6.266-3.726a1.279 1.279 0 01.032-1.809z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
      </svg>
    </Button>
  );
}

export default SvgComponent;
