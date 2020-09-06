import React, { useEffect, useState }from 'react';
import { Box, Card, CardContent, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';


const Post = (props) => {
    const { id, title, body} = props.postData;
    const [image, setImage] = useState({loading:true});

    useEffect(() =>{
        fetch(`https://picsum.photos/500/200?random=${id}`)
        .then((response) => {
            response.loading = false;
            setImage(response);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log(image.loading);
    return (
        <>
        <Box my={2}>
            <Card>
                <CardContent>
                    {
                        image.loading ? (
                            <Skeleton variant="rect" animation="wave" width="100%" height={200} />
                            ) : (
                            <img src={image.url} alt="" width="100%" height={200}/>
                        )
                    }
                    <h1>{id}.{title}</h1>
                    <p>{body}</p>
                    <Link to={`/posts/${id}`}>
                        <Button variant="contained" color="primary">Learn More</Button>
                    </Link>
                </CardContent>
            </Card>                 
        </Box>
        </>
    );
};

export default Post;