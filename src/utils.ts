import { FormControlProps as ControlProps } from 'react-bootstrap';
import { Props as FormControlProps } from './FormControl';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export const getFieldPropsForFormControl = ({
  disabled,
  field,
  tag,
  form: { isSubmitting },
  ...props
}: FormControlProps): ControlProps & BsPrefixProps<React.ElementType> => {
  return {
    ...field,
    ...props,
    disabled: disabled || isSubmitting,
    as: tag,
  };
};
