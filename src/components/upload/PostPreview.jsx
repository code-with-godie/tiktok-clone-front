import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../styled/Button';
import { postData } from '../../api/apiCalls';
import { useAppContext } from '../../context/AppContext';
import phone from '../../assets/phone.png';
import TiktokMini from './TiktokMini';
import PostPublic from './PostPublic';
import PostAllowance from './PostAllowance';
import PostControls from './PostControls';
import { useNavigate } from 'react-router-dom';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;
  gap: 1rem;
  /* color: #000000e2; */
  @media screen and (min-width: 768px) {
    gap: 0rem;
    flex-direction: row;
  }
`;
const VideoContainer = styled.div`
  /* height: 300px; */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    height: auto;
    width: 300px;
  }
`;
const DecscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`;
const CaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const CaptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CaptionParent = styled.div`
  display: flex;
  border: 1px solid #d8d8d8;
  border-radius: 0.5rem;
  gap: 0.5rem;
  align-items: center;
  padding: 0.2rem;
`;
const LabelHeader = styled.p`
  /* color: #000000; */
  font-size: 1.2rem;
  text-transform: capitalize;
`;
const Label = styled(LabelHeader)`
  color: #dbdadadf;
  font-size: 1rem;
`;
const Caption = styled.input`
  padding: 0.5em;
  outline: none;
  color: ${props => props.theme.text_primary};
  background: transparent;
  flex: 1;
  border: none;
  font-size: 1rem;
`;
const CaptionDecscription = styled.p``;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;
const Title = styled.h2`
  /* color: #000000e5; */
`;
const TitleDecription = styled.p`
  color: #ababab;
  font-size: 1.2rem;
  font-weight: 100;
`;
const PhoneContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Phone = styled.img`
  object-fit: contain;
  width: 150px;
  height: 215px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 430px;
  }
`;
const PhoneScreen = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 130px;
  height: 170px;
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 350px;
  }
  background-color: #000000;
  z-index: 10000;
`;
const Video = styled.video`
  width: 100%;
  height: auto;
  max-height: 60vh;
  cursor: pointer;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Footer = styled.div`
  padding: 0.2rem;
  width: 100%;
  border: 1px solid #bcbcbc;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const FooterDescription = styled.p`
  cursor: ${props => props.bold && 'pointer'};
  font-weight: 100;
  color: ${props =>
    props.bold ? props.theme.text_primary : props.theme.text_gray};
`;
const PostPreview = ({ file, setFile, handleVideo }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token, darkMode } = useAppContext();
  const videoRef = useRef();
  const inputRef = useRef();
  const [caption, setCaption] = useState(file?.path);
  const cancel = () => {
    setFile(null);
  };
  const save = async () => {
    setLoading(true);
    try {
      const { url, privacy } = file;
      const payload = {
        folder: 'tiktok/posts',
        file: url,
        privacy,
        caption,
      };
      const res = await postData('/posts', payload, token);
      if (res) {
        navigate('/');
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const playPause = () => {
    const video = videoRef.current;
    video?.paused ? video.play() : video?.pause();
  };
  const handleVideoChange = e => {
    const video = e.target.files[0];
    handleVideo(video);
  };
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('click', playPause);
    }
    return () => {
      video.removeEventListener('click', playPause);
    };
  }, [videoRef.current]);
  return (
    <Wrapper>
      <VideoContainer>
        <Top>
          <Title>Upload Video</Title>
          <TitleDecription>post video to your account</TitleDecription>
        </Top>
        <Video
          ref={videoRef}
          src={file?.url}
        />
        <PhoneContainer>
          <Phone src={phone} />
          <PhoneScreen>
            <TiktokMini url={file?.url} />
          </PhoneScreen>
        </PhoneContainer>
        <Footer>
          <FooterDescription>
            {' '}
            {caption?.length > 20
              ? `${caption?.substring(0, 20)}...`
              : caption}{' '}
          </FooterDescription>
          <FooterDescription
            bold
            onClick={() => inputRef.current?.click()}
          >
            {' '}
            Change Video{' '}
          </FooterDescription>
          <input
            type='file'
            hidden
            ref={inputRef}
            onChange={handleVideoChange}
          />
        </Footer>
      </VideoContainer>
      <DecscriptionContainer>
        <CaptionWrapper>
          <CaptionContainer>
            <LabelHeader>caption</LabelHeader>
            <Label>56/2000</Label>
          </CaptionContainer>
          <CaptionParent>
            <Caption
              value={
                caption?.length > 2000
                  ? `${caption.substring(0, 2000)}`
                  : caption
              }
              onChange={e => setCaption(e.target.value)}
            />
            <CaptionDecscription>@</CaptionDecscription>
            <CaptionDecscription>#</CaptionDecscription>
          </CaptionParent>
        </CaptionWrapper>
        <PostPublic setFile={setFile} />
        <PostAllowance setFile={setFile} />
        <PostControls setFile={setFile} />
        <Button
          handleclick={cancel}
          color={darkMode ? 'white' : 'gray'}
          border='1px solid #dedede'
          large
        >
          cancel
        </Button>
        <Button
          handleclick={save}
          bg='#FE496C'
          large
          disabled={loading}
          color='white'
        >
          {loading ? <LoadingAnimation /> : 'Post'}
        </Button>
      </DecscriptionContainer>
    </Wrapper>
  );
};

export default PostPreview;
