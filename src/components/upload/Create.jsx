import React, { useState } from 'react';
import styled from 'styled-components';
import PostPreview from './PostPreview';
import SelectVideo from './SelectVideo';
import { openToast } from '../../context/appControllers';
const Wrapper = styled.div`
  flex: 3;
`;
const Create = () => {
  const [file, setFile] = useState(null);

  const handleVideo = video => {
    //   const file = acceptedFiles[acceptedFiles.length - 1];
    const type = video?.type.split('/')[0];
    if (type !== 'video') {
      openToast('only videos are allowed for upload');
      return;
    }
    const fileReader = new FileReader(video);
    fileReader.readAsDataURL(video);
    fileReader.onload = () => {
      setFile({
        path: video?.name,
        size: video?.size,
        type: video?.type,
        url: fileReader.result,
      });
    };
  };
  return (
    <Wrapper>
      {file ? (
        <PostPreview
          file={file}
          setFile={setFile}
          handleVideo={handleVideo}
        />
      ) : (
        <SelectVideo handleVideo={handleVideo} />
      )}
    </Wrapper>
  );
};

export default Create;
