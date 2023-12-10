import React from 'react';

import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      NOT FOUND
      <button onClick={() => navigate('/')}>BackHome</button>
    </>
  );
};

export default ErrorPage;
