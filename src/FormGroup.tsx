import React from 'react';
import { Form } from 'react-bootstrap';
import { Props as FormControlProps, FormControl } from './FormControl';
import { getFieldErrorProps, getFieldFormFeedbackType } from './utils';
import { FormControlTag } from 'types';

export type Props = FormControlProps & {
  label?: string;
  tag?: React.ElementType;
  controlTag?: FormControlTag;
};

const FormGroup: React.FC<Props> = ({ label, tag, controlTag, ...props }) => {
  const { showError, fieldError } = getFieldErrorProps(props);

  return (
    <Form.Group aria-label="form-group" as={tag}>
      {label && <Form.Label aria-label="form-label">{label}</Form.Label>}
      <FormControl {...props} tag={controlTag} />
      {showError && fieldError && (
        <Form.Control.Feedback
          type={getFieldFormFeedbackType(props)}
          aria-label="form-feedback"
        >
          {fieldError}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

FormGroup.displayName = 'FormGroup';

export { FormGroup };
