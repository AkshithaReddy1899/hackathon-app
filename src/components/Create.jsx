import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';

const Create = () => {
  const initialValues = {
    id: uuidv4(),
    name: '',
    start_date: '',
    end_date: '',
    description: '',
    image: 'https://i.ibb.co/7r5yL5y/773900d05332.png',
    level: 'Easy',
  };

  return (
    <>
      <Form data={initialValues} />
    </>
  );
};

export default Create;
