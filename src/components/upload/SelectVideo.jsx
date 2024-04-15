import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import logo from '../../assets/upload.png';
import Button from '../styled/Button';
import { useAppContext } from '../../context/AppContext';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  /* background-color: #f8f8f8; */
  background: ${props => props.theme.semi_gray_black};
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 900px;
  background: ${props => props.theme.bg_primary};
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 5px rgba(224, 224, 224, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .dropzone {
    background: red;
  }
`;
const DropContainer = styled.div`
  width: 90%;
  height: 80%;
  border-radius: 0.5rem;
  border: ${props =>
    props.hover ? '2px dashed  #2ef11c' : '2px dashed #d4d4d4'};
  cursor: pointer;
  background-color: ${props => props.hover && '#f3f3f3'};
  display: flex;
  padding: 0.3rem;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  padding: 1rem 0 1rem 0;
`;
const DescriptionWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;
const Description = styled.p`
  text-align: center;
  color: gray;
  font-size: 0.9rem;
  &.bold {
    font-weight: 500;
    font-size: 1.2rem;
    color: black;
  }
`;
const SelectVideo = ({ handleVideo }) => {
  const { openToast } = useAppContext();
  const { getInputProps, getRootProps, acceptedFiles, isDragActive } =
    useDropzone({
      accept: { 'video/*': ['.mp4', '.webp', '.ogg', '.mkv'] },
      maxFiles: 1,
    });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      // const file = acceptedFiles[acceptedFiles.length - 1];
      // const type = file?.type.split('/')[0];
      // if (type !== 'video') {
      //     openToast('only videos are allowed for upload');
      //     return;
      // }
      handleVideo(acceptedFiles[acceptedFiles.length - 1]);
      // const fileReader = new FileReader();
      // fileReader.readAsDataURL(acceptedFiles[acceptedFiles.length - 1]);
      // fileReader.onload = () => {
      //     setFile({
      //         path: acceptedFiles[acceptedFiles.length - 1]?.name,
      //         size: acceptedFiles[acceptedFiles.length - 1]?.size,
      //         type: acceptedFiles[acceptedFiles.length - 1]?.type,
      //         url: fileReader.result,
      //     });
      // };
    }
  }, [acceptedFiles]);
  return (
    <Wrapper>
      <Container>
        <DropContainer {...getRootProps({ hover: isDragActive })}>
          <input
            {...getInputProps({
              type: 'file',
              hidden: true,
            })}
          />
          <Logo
            src={logo}
            alt="upoad image"
          />
          <DescriptionWrapper>
            <DescriptionContainer>
              <Description className="bold">Select video to upload</Description>
              <Description>Or drag and drop a file</Description>
              <Description>
                Long video can be split into multiple part to get more exposure
              </Description>
            </DescriptionContainer>
            <DescriptionContainer>
              <Description>MP4 or WebM</Description>
              <Description>720x1280 resolution or higher</Description>
              <Description>upto 30 min</Description>
              <Description>Less than 2GB</Description>
            </DescriptionContainer>
            <Button
              bg="#FE496C"
              color="white"
            >
              Select File
            </Button>
          </DescriptionWrapper>
        </DropContainer>
      </Container>
    </Wrapper>
  );
};

export default SelectVideo;
