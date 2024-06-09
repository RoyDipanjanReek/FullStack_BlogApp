import React from 'react';
import { Container } from '../components';
import PostFrom from '../components/postForm/PostFrom';
function Addpost(props) {
    return (
        <div className='py-8'>
            <Container>
                <PostFrom />
            </Container>
        </div>
    );
}

export default Addpost;