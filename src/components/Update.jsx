import React from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';

const Update = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <div>
      <Form data={item} />
    </div>
  );
};

export default Update;
