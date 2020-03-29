import * as React from 'react';
import { Formik, Field } from 'formik';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormGroup } from '../src';
import {
  FIELD_TEST_LABEL_TEXT,
  FIELD_TEST_ERROR_TEXT,
  FIELD_TEST_NAME,
  FIELD_TEST_VALUE,
} from './constants';
import { Col } from 'react-bootstrap';

describe('FormGroup', () => {
  it('renders without crashing', () => {
    const { getByLabelText } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field component={FormGroup} />
      </Formik>
    );

    expect(getByLabelText('form-group')).toBeTruthy();
    expect(getByLabelText('form-control')).toBeTruthy();
  });
  it('renders label text', () => {
    const { getByLabelText } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field label={FIELD_TEST_LABEL_TEXT} component={FormGroup} />
      </Formik>
    );

    expect(getByLabelText('form-label').textContent).toBe(
      FIELD_TEST_LABEL_TEXT
    );
  });
  it('renders invalid feedback', () => {
    const { getByLabelText } = render(
      <Formik
        onSubmit={() => {}}
        initialValues={{
          [FIELD_TEST_NAME]: FIELD_TEST_VALUE,
        }}
        initialErrors={{
          [FIELD_TEST_NAME]: FIELD_TEST_ERROR_TEXT,
        }}
        initialTouched={{
          [FIELD_TEST_NAME]: true,
        }}
      >
        <Field
          label={FIELD_TEST_LABEL_TEXT}
          name={FIELD_TEST_NAME}
          component={FormGroup}
        />
      </Formik>
    );

    const feedback = getByLabelText('form-feedback');
    expect(feedback).toBeTruthy();
    expect(feedback).toHaveClass('invalid-feedback');
    expect(feedback.textContent).toBe(FIELD_TEST_ERROR_TEXT);
  });
  it('renders as specific tag', () => {
    const { getByLabelText } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field tag="span" name={FIELD_TEST_NAME} component={FormGroup} />
      </Formik>
    );

    const feedback = getByLabelText('form-group');
    expect(feedback.tagName).toBe('SPAN');
  });
  it('renders as UI component', () => {
    const { getByLabelText } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field tag={Col} name={FIELD_TEST_NAME} component={FormGroup} />
      </Formik>
    );

    const feedback = getByLabelText('form-group');
    expect(feedback.tagName).toBe('DIV');
    expect(feedback).toHaveClass('col');
  });
  it('renders control as select', () => {
    const { getByLabelText, container } = render(
      <Formik onSubmit={() => {}} initialValues={{}}>
        <Field
          tag={Col}
          controlTag="select"
          name={FIELD_TEST_NAME}
          component={FormGroup}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Field>
      </Formik>
    );

    const formControl = getByLabelText('form-control') as HTMLElement;

    expect(formControl.tagName).toBe('SELECT');
    expect(container.querySelectorAll('option').length).toBe(3);
  });
});
