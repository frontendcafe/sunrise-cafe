import React from 'react';

import LogoVercel from '../image/powered-by-vercel.svg';

export const VercelInfo = () => {
  return (
    <a
      href="https://vercel.com/?utm_source=hifrontendcafe&utm_campaign=oss"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img alt="Powered by Vercel" src={LogoVercel} />
    </a>
  );
};

export default VercelInfo;
