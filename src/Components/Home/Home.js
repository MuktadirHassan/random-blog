import React from 'react';
import Container from '@material-ui/core/Container';
import { useState, useEffect } from 'react';
import PostCard from '../PostCard/PostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.error(err));
    }, [])
    
    return (
        <>
            <main>
                <Container maxWidth="sm">
                    {
                        posts.map(x => <PostCard postData={x} key={x.id}></PostCard>)
                    }
                </Container>
            </main>
        </>
    );
};

export default Home;