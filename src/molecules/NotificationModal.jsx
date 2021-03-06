import React, {useEffect} from 'react';
import styled from '@emotion/styled';

import 'animate.css';
import IconCheck from '../image/IconCheck.svg';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const ModalMain = styled.div`
  position: fixed;
  background: white;
  height: auto;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  text-align: center;
  padding: 2rem 2rem 5rem 2rem;
  top: 40%;
  left: 42%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
`;

const Icon = styled.img`
  width: 5rem;
  cursor: pointer;
`;

Icon.defaultProps = {
  src: IconCheck,
};

export const NotificationModal = ({handleClose, show, children}) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container show={show}>
      <ModalMain className="animate__animated animate__bounceInRight">
        {children}

        <Icon />
      </ModalMain>
    </Container>
  );
};
