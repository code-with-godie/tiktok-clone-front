import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Topnav from '../../components/nav/Topnav';
import Sidenav from '../../components/nav/Sidenav';
import Feeds from '../../components/home/Feeds';
import { useFetch } from '../../api/useFetch';
import PostSkeleton from '../../components/skeletons/PostSkeleton';
import { useAppContext } from '../../context/AppContext';
const Container = styled.main`
  height: 100vh;
  background: ${props => props.theme.bg_primary};
  color: ${props => props.theme.text_primary};
  display: flex;
  flex-direction: column;
`;
const Content = styled.section`
  flex: 1;
  display: flex;
  overflow: auto;
`;
const Home = () => {
  const { updatePost } = useAppContext();
  const [videos, setVideos] = useState([]);
  const { loading, data, error } = useFetch('/posts');
  useEffect(() => {
    if (data) {
      setVideos(data?.posts);
      updatePost(data?.posts);
    }
  }, [data]);
  if (error) {
    return <h1>error occured....</h1>;
  }
  return (
    <Container>
      <Topnav />
      <Content>
        <Sidenav />
        {loading ? <PostSkeleton counter={3} /> : <Feeds videos={videos} />}
      </Content>
    </Container>
  );
};

export default Home;
