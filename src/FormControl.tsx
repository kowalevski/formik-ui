import React from 'react';
import Control, { FormControlProps } from 'react-bootstrap/FormControl';
import { FieldProps } from 'formik';
import { getFieldPropsForFormControl } from './utils';

export type Props = FieldProps &
  FormControlProps & {
    tag?: 'input' | 'textarea' | 'select';
  };

export const FormControl: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Control {...getFieldPropsForFormControl(props)} aria-label="form-control">
      {children}
    </Control>
  );
};
