import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFetch } from '../../api/useFetch';
import { useAppContext } from '../../context/AppContext';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
import { FaEye, FaTrash } from 'react-icons/fa';
import { IconButton } from '@mui/material';
const Container = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h2`
    text-transform: capitalize;
    padding: 0.5rem;
`;
const TableWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    overflow: auto;
    display: flex;
    text-decoration: none;
    flex-direction: column;
`;
const Table = styled.table`
    padding: 0.5rem;
    border-collapse: collapse;
`;
const TableRow = styled.tr`
    display: flex;
    :first-child {
        border-top: 1px solid #ededee;
    }
    :not(:last-child) {
        border-bottom: 1px solid #ededee;
    }
`;
const TableData = styled.td`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1rem;
    :first-child {
        flex: 1.7;
    }
    .icon {
        font-size: 1.5rem;
        color: ${props => props.theme.text_gray};
    }
    :nth-child(2) {
        flex: 0.5;
    }
    :nth-child(3) {
        flex: 1.5;
    }
`;
const TableHeading = styled.th`
    border-bottom: 1px solid black;
    flex: 1;
    padding: 1rem;
    font-size: 1rem;
    color: ${props => props.theme.text_gray};
    text-transform: capitalize;
    text-align: start;
    border: none;
    :first-child {
        flex: 1.7;
    }
    :nth-child(2) {
        flex: 0.5;
    }
    :nth-child(3) {
        flex-grow: 1.5;
        flex-shrink: 0;
    }
`;

const Video = styled.video`
    max-width: 100%;
    height: auto;
    max-height: 150px;
    object-fit: contain;
`;
const TableBody = styled.tbody``;
const Status = styled.p`
    color: lime;
    display: inline;
    background-color: #37ef3714;
    padding: 0.5rem;
`;
const Posted = styled.p`
    display: inline;
    padding: 0.5rem;
`;
const Posts = () => {
    const formatDate = createAt => {
        const date = new Date(createAt);
        const year = date.getFullYear();
        const month = date.getMonth();
        const tempDate = date.getDate();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliSeconds = date.getMilliseconds();

        return `${tempDate}/${month}/${year}-${hour}:${minutes}:${seconds}`;
    };
    const { user } = useAppContext();
    const { data, loading, error } = useFetch(`/posts/single/all/${user?._id}`);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (data) {
            setPosts(data?.posts);
        }
    }, [data]);
    if (loading) {
        return <LoadingAnimation />;
    }
    return (
        <Container>
            <Title>manage your posts</Title>
            <TableWrapper>
                <Table>
                    <TableRow>
                        <TableHeading>posts</TableHeading>
                        <TableHeading>actions</TableHeading>
                        <TableHeading>status</TableHeading>
                        <TableHeading>Privacy</TableHeading>
                    </TableRow>
                    <TableBody>
                        {posts?.map(post => (
                            <TableRow key={post?._id}>
                                <TableData>
                                    <Video src={post?.url?.postUrl} />
                                </TableData>
                                <TableData>
                                    <IconButton>
                                        <FaTrash className='icon' />
                                    </IconButton>
                                </TableData>
                                <TableData>
                                    {post?.createdAt ? (
                                        <Status>posted</Status>
                                    ) : (
                                        <Status>pending</Status>
                                    )}
                                    <Posted>
                                        {formatDate(post?.createdAt)}
                                    </Posted>
                                </TableData>
                                <TableData>
                                    <FaEye />
                                    <Posted>Everyone</Posted>
                                </TableData>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableWrapper>
        </Container>
    );
};

export default Posts;
