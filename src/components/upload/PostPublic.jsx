import React, { useState } from 'react';
import styled from 'styled-components';
import {} from '@mui/material';
// import SelectInput from '@mui/material/Select/SelectInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
const Title = styled.h3`
  color: #000000db;
  font-weight: 500;
`;
const Selected = styled.select`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 0.5rem;
  background: transparent;
  color: ${props => props.theme.text_primary};
  font-size: 1.3rem;
  border: 1px solid #cdcdcd;
  text-transform: capitalize;
  outline: none;
`;
const Option = styled.option`
  background: ${props => props.theme.bg_primary};
  font-size: 1.2rem;
  text-transform: capitalize;
  border-radius: none;
`;
const PostPublic = ({ setFile }) => {
  const [value, setValue] = useState('public');
  const handleChange = e => {
    setValue(e.target.value);
    setFile(prev => ({ ...prev, privacy: e.target.value }));
    // console.log(e.target.value);
  };
  return (
    <Container>
      <Title>who can see this video</Title>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={handleChange}
        >
          <MenuItem value='public'>public</MenuItem>
          <MenuItem value='friends'>friends</MenuItem>
          <MenuItem value='just me'>just me</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default PostPublic;
