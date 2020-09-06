import React, { useState, useEffect } from 'react';
import { Grid, Avatar, Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: '100%',
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }));
const Comments = (props) => {
    const { name, email, body } = props.commentData;
    const classes = useStyles();
    const [propic, setPropic] = useState('');
    useEffect(()=>{
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then( data => {
            setPropic(data.results[0].picture.thumbnail);
        })
        .catch(err => console.error('Could not load images from api.'))
    },[])
    return (
        <>
            <Box my={3}>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar src={propic}>W</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h4" component="h2">{name}</Typography>
                            <Box fontStyle="italic">
                                <Typography>"{body}"</Typography>
                            </Box>
                            <Box textAlign="right">
                            <Chip label={email} />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

            </Box>
        </>
    );
};

export default Comments;