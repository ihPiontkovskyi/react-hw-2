import React, {useEffect, useState, useCallback} from 'react';
import * as APIService from '../../services/APIService';
import {
  Container,
  Typography,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core';
import {Form, Field} from 'react-final-form';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  field: {
    marginBottom: theme.spacing(2),
  },
}));

const StudentScreen = ({match, history}) => {
  const studentId = match.params.studentId;
  const [student, setStudent] = useState(null);

  useEffect(() => {
    if (studentId) {
      const currentStudent = APIService.getStudent(studentId);

      setStudent(currentStudent);
    }
  }, [studentId]);

  const handleFormSubmit = useCallback(
    values => {
      if (studentId) {
        APIService.updateStudent(studentId, values);
      } else {
        APIService.addStudent(values);
      }

      history.push('/students');
    },
    [studentId, history]
  );

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" className={classes.title}>
        {studentId ? 'Update Student' : 'Create Student'}
      </Typography>
      <Form onSubmit={handleFormSubmit} initialValues={student}>
        {({handleSubmit}) => (
          <>
            <Field name="avatar">
              {({input}) => (
                <TextField
                  className={classes.field}
                  label="Avatar URL"
                  variant="outlined"
                  fullWidth
                  {...input}
                />
              )}
            </Field>
            <Field name="name">
              {({input}) => (
                <TextField
                  className={classes.field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  {...input}
                />
              )}
            </Field>
            <Field name="address">
              {({input}) => (
                <TextField
                  className={classes.field}
                  label="Address"
                  variant="outlined"
                  fullWidth
                  {...input}
                />
              )}
            </Field>
            <Button
              onClick={handleSubmit}
              fullWidth
              color="primary"
              variant="contained"
              size="large"
            >
              Submit
            </Button>
          </>
        )}
      </Form>
    </Container>
  );
};

export default StudentScreen;
