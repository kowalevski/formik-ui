import React from 'react';
import Control, { FormControlProps } from 'react-bootstrap/FormControl';
import { FieldProps } from 'formik';
import { FormControlExtendedProps } from './types';
import { getFieldFormControlProps } from './utils';

export type Props = FieldProps & FormControlProps & FormControlExtendedProps;

const FormControl: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Control {...getFieldFormControlProps(props)} aria-label="form-control">
      {children}
    </Control>
  );
};

FormControl.displayName = 'FormControl';

export { FormControl };
