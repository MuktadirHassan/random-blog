import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Post from '../Post/Post';
import { Container, Button, Box } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const DetailedPost = () => {
    const { id } = useParams();
    const [postContent, setPostContent] = useState([]);
    const [postComment, setPostComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPostContent(data))
        .catch(err => console.error(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPostComment(data))
        .catch(err => console.error(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let history = useHistory();
    function handleClick() {
        history.push("/");
    }

    return (
        <Container maxWidth="md">
            <Box my={2}>
                <Button onClick={handleClick} variant="contained" color="primary">Go Back</Button>
            </Box>
            {
                <Post postContent={postContent}></Post>
            }
            {
                postComment.map(x => <Comments commentData={x} key={x.id}></Comments>)
            }
        </Container>
    );
};

export default DetailedPost;