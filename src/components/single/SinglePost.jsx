import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Slide from './Slide';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from './Header';
import Comments from './Comments';
import CommentInput from './CommentInput';
import { useAppContext } from '../../context/AppContext';
import SingleVideo from './SingleVideo';
import { useLocation } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Left = styled.div`
  flex: 1;
  height: 50vh;
  display: flex;
  .swiper {
    flex: 1;
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    .icon {
      position: absolute;
      right: 0.5rem;
      z-index: 100;
      font-size: 1.5rem;
      color: white;
      cursor: pointer;
    }
    .top {
      top: 0.5rem;
    }
    .bottom {
      bottom: 0.5rem;
      background-color: #0000006e;
      z-index: 1000000;
    }
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;
const Right = styled.div`
  flex: 1;
  height: 50vh;
  display: flex;
  flex-direction: column;
  /* overflow: auto; */
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;
const SinglePost = () => {
  const [url, setUrl] = useState('');
  const location = useLocation();

  useEffect(() => {
    location.state && setUrl(location.state);
    console.log(location);
  }, [location]);
  //   const { posts } = useAppContext();
  //   console.log(posts);
  return (
    <Wrapper>
      <Left>
        {url && <SingleVideo url={url} />}

        {/* <Swiper
          spaceBetween={'0px'}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className='swiper'
          direction='vertical'
        >
          {posts.map(post => (
            <SingleVideo
              key={post._id}
              {...post}
            />
          ))}
        </Swiper> */}
      </Left>
      <Right>
        <Header />
        <Comments />
        <CommentInput />
      </Right>
    </Wrapper>
  );
};

export default SinglePost;
