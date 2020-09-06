import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const Post = (props) => {
    const { id, title, body } = props.postContent;
    const [image, setImage] = useState({ loading: true });

    useEffect(() => {
        fetch('https://picsum.photos/800/400')
            .then((response) => {
                // Adding artificial delay
                setTimeout(() => {
                    response.loading = false;
                    setImage(response);
                }, 100)
            });
    }, []);

    return (
        <div>
            <Box my={2}>
                <Typography variant="h3" component="h1">
                    {id}.{title}
                </Typography>
            </Box>
            {
                image.loading ? (
                    <Skeleton variant="rect" animation="wave" width="100%" height={400} />
                ) : (
                        <img src={image.url} alt="" width="100%" />
                    )
            }
            <Box my={2}>
                <Typography component="p">
                    {body}
                </Typography>
            </Box>
        </div>
    );
};

export default Post;