import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import IconEye from '../image/eye.svg';
import IconEyeSlash from '../image/eyeSlash.svg';
import {baseInput} from '../styles/Mixins';

const InputPasswordStyled = styled.input`
  ${baseInput}
  text-align: left;
  font-weight: 500;
  padding-left: 1rem;
  border: 0;
`;

const WrapperPassword = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border: 1px solid #c5c5c5;
  border-radius: 0.7rem;
`;

const EyeIcon = styled.img`
  width: 2.5rem;
  margin-right: 1rem;
`;

EyeIcon.defaultProps = {
  src: IconEye,
};

const EyeSlashIcon = styled.img`
  width: 2.5rem;
  margin-right: 1rem;
`;

EyeSlashIcon.defaultProps = {
  src: IconEyeSlash,
};

function IconShow({setIsVisible}) {
  return <EyeIcon onClick={() => setIsVisible(true)} />;
}

function IconHide({setIsVisible}) {
  return <EyeSlashIcon onClick={() => setIsVisible(false)} />;
}

function IconPassword({isVisible, setIsVisible}) {
  return (
    <>
      {isVisible ? (
        <IconHide setIsVisible={setIsVisible} />
      ) : (
        <IconShow setIsVisible={setIsVisible} />
      )}
    </>
  );
}

function InputPassword({name, value, setValue, placeholder, handleBlur}) {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <WrapperPassword>
      <InputPasswordStyled
        name={name}
        placeholder={placeholder}
        type={isVisible ? 'text' : 'password'}
        value={value}
        onBlur={handleBlur}
        onChange={({target}) => setValue(target.value)}
      />
      <IconPassword isVisible={isVisible} setIsVisible={setIsVisible} />
    </WrapperPassword>
  );
}

InputPassword.defaultProps = {
  value: '',
};

InputPassword.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  name: PropTypes.string,
};

export default InputPassword;
