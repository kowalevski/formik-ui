import React from 'react';
import { FormControlProps } from 'react-bootstrap';
import { FieldProps } from 'formik';

// export type Props = FieldProps & FormControlProps;
export type Props = {};

const TextField: React.FC<Props> = () => {
  return <input type="text" name="field" placeholder="TextField" />;
};

export default TextField;
