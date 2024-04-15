import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostController from './PostController';
import Posts from './Posts';
import { useFetch } from '../../api/useFetch';
import { useAppContext } from '../../context/AppContext';
import LoadingAnimation from '../loading/LoadingAnimation';
import PrivacyMessage from './PrivacyMessage';
import { useParams } from 'react-router-dom';
import ProfilePostSkeleton from '../skeletons/ProfilePostSkeleton';

const Container = styled.div``;
const UsersPosts = ({ userID, mine, tempSlug }) => {
    const [videos, setVideos] = useState([]);
    const [index, setIndex] = useState(0);
    const [slug, setSlug] = useState('');
    const { locked } = useAppContext();
    const { username } = useParams();

    const { loading, data, error } = useFetch(
        `/posts/single/${slug} /${userID}`
    );
    useEffect(() => {
        if (tempSlug) {
            setIndex(1);
            setSlug(tempSlug);
        }
    }, [tempSlug, setIndex]);
    useEffect(() => {
        if (data) {
            setVideos(data?.posts);
        }
    }, [data]);
    if (error) {
        return <h1>error</h1>;
    }
    return (
        <Container>
            <PostController
                setSlug={setSlug}
                index={index}
                setIndex={setIndex}
                locked={locked}
                mine={mine}
            />
            {locked && slug === 'liked' && !mine ? (
                <PrivacyMessage username={username} />
            ) : loading ? (
                <ProfilePostSkeleton />
            ) : (
                <Posts
                    videos={videos}
                    slug={slug}
                />
            )}
        </Container>
    );
};

export default UsersPosts;
