import React from 'react';

import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    ListSubheader,
    Fab,
    makeStyles, Button,
} from '@material-ui/core';
import {Add as AddIcon, DeleteOutlined} from '@material-ui/icons';
import StudentsList from '../common/StudentsList';
import {Link} from 'react-router-dom';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import {deleteStudent} from "../../services/APIService";

const useStyles = makeStyles(theme => ({
    list: {
        paddingBottom: theme.spacing(10),
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <>
            <List className={classes.list}>
                <ListSubheader>Students</ListSubheader>
                <StudentsList>
                    {({students}) =>
                        students.map(student => (
                            <ListItem
                                key={student.id}
                                button
                                component={Link}
                                to={`/students/${student.id}`}
                            >
                                <ListItemAvatar>
                                    <Avatar src={student.avatar}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={student.name}
                                    secondary={student.address}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton aria-label="Delete Todo"
                                                component={Link}
                                                to={`/students/delete/${student.id}`}
                                                color="secondary"
                                                variant="outlined">
                                        <DeleteOutlined />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))
                    }
                </StudentsList>
            </List>
            <Fab
                className={classes.fab}
                color="primary"
                component={Link}
                to="/students/create"
            >
                <AddIcon/>
            </Fab>
        </>
    );
};
