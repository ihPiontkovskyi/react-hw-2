import React from 'react';
import {Typography, Container, Button, makeStyles} from '@material-ui/core';
import * as APIService from '../../services/APIService';

const useStyles = makeStyles(theme => ({
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  deleteButton: {
    marginLeft: theme.spacing(2),
  },
}));

export default function StudentDeleteScreen({history, match}) {
  const studentId = match.params.studentId;

  const handleDeleteButtonClick = () => {
    APIService.deleteStudent(studentId);
    history.push('/students');
  };

  const handleCancelButtonClick = () => {
    history.goBack();
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography align="center">
        Do you really want to delete this student?
      </Typography>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCancelButtonClick}
        >
          cancel
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleDeleteButtonClick}
          className={classes.deleteButton}
        >
          delete
        </Button>
      </div>
    </Container>
  );
}
