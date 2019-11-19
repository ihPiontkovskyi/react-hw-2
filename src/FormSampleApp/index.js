import React from 'react';
import {Form, Field} from 'react-final-form';
import './index.css';

const onSubmit = async values => {
  alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.confirm) {
    errors.confirm = 'Required';
  } else if (values.confirm !== values.password) {
    errors.confirm = 'Must match';
  }
  return errors;
};

const FormSampleApp = () => (
  <div className="form">
    <h2>Login (sync validation) </h2>
    <Form onSubmit={onSubmit} validate={validate}>
      {({handleSubmit, form, submitting, pristine, values}) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({input, meta}) => (
              <div className="field">
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {meta.error && meta.touched && (
                  <span className="error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="password">
            {({input, meta}) => (
              <div className="field">
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && (
                  <span className="error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="confirm">
            {({input, meta}) => (
              <div className="field">
                <label>Confirm</label>
                <input {...input} type="password" placeholder="Confirm" />
                {meta.error && meta.touched && (
                  <span className="error">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre className="form-fields-values">
            {JSON.stringify(values, 0, 2)}
          </pre>
        </form>
      )}
    </Form>
  </div>
);

export default FormSampleApp;
