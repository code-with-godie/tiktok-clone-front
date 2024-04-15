import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Post from './Post';
const Wrapper = styled.div`
  flex: 3;
  overflow: auto;
`;
const Container = styled.div`
  width: 100%;
  max-width: 700px;
  scroll-snap-type: mandatory;
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
const Feeds = ({ videos }) => {
  const [observer, setObserver] = useState(null);
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const ref = useRef(null);
  const [muted, setMuted] = useState(false);

  const createObserver = () => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentPlaying(entry.target);
            entry.target.paused && entry.target.play();
          } else {
            !entry.target.paused && entry.target.pause();
          }
        });
      },
      { threshold: 0.75 }
    );
    return observer;
  };

  useEffect(() => {
    const observer = createObserver();
    setObserver(observer);
  }, []);

  //   if (videos?.length === 0) {
  //     return (
  //       <Wrapper>
  //         <h1>there are no posts yet!!!!</h1>;
  //       </Wrapper>
  //     );
  //   }

  return (
    <Wrapper ref={ref}>
      <Container>
        {videos?.map((video, index) => (
          <Post
            key={video._id}
            id={`video-${index}`}
            {...video}
            observer={observer}
            muted={muted}
            setMuted={setMuted}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default Feeds;
