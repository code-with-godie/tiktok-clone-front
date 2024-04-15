import { Close } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext';
import Button from '../styled/Button';
import { updateData } from '../../api/apiCalls';
const Wrapper = styled.div`
    background: ${props => props.theme.bg_primary};
    color: ${props => props.theme.text_primary};
    .icon {
        color: ${props => props.theme.text_gray};
    }
`;
const Container = styled.div`
    padding: 1rem;
`;
const ControlContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
`;
const HeaderSectionContainer = styled.section`
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #b4b4b4c2;
`;
const PhotoContainer = styled.div`
    display: grid;
    max-width: 400px;
    place-content: center;
`;
const AvatarContainer = styled.div`
    position: relative;
    .profile {
        width: 90px;
        height: 90px;
    }
    .icon {
        position: absolute;
        bottom: 0;
        color: ${props => props.theme.text_gray_black};
        right: 0;
        background: white;
        border: 1px solid gray;
        :hover {
            background: #fffffff2;
        }
    }
`;
const Title = styled.h1`
    font-size: 1.7rem;
    font-weight: 500;
`;
const SectionWrapper = styled.div`
    display: flex;
    padding: 1rem 0 1rem 0;
    border-bottom: 1px solid #b4b4b4c2;
`;
const SectionTitleContainer = styled.div`
    flex: 1;
`;
const SectionTitle = styled.h3`
    font-size: 1.2rem;
    color: ${props => props.theme.text_primary};
    font-weight: 400;
    text-transform: capitalize;
`;
const SectionContentContainer = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;
const SectionContentWrapper = styled.div`
    flex: 3;
`;
const Input = styled.input`
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: none;
    font-size: 1rem;
    background: #f1f1f2;
    outline: none;
    ::placeholder {
        color: black;
    }
`;
const Bio = styled.textarea`
    padding: 1rem;
    border-radius: 0.2rem;
    border: none;
    color: black;
    font-size: 1rem;
    background: #f1f1f2;
    outline: none;
    resize: none;
    height: 100px;
    ::placeholder {
        color: black;
    }
`;
const Description = styled.p`
    font-size: 0.8rem;
    color: #a1a1a1;
    font-weight: 100;
`;
const SectionContainer = ({ title, children }) => {
    return (
        <SectionWrapper>
            <SectionTitleContainer>
                <SectionTitle> {title} </SectionTitle>
            </SectionTitleContainer>
            <SectionContentWrapper>
                <SectionContentContainer> {children} </SectionContentContainer>
            </SectionContentWrapper>
        </SectionWrapper>
    );
};
const EditProfile = ({ closeModel }) => {
    const {
        user: { username, profilePic, name, bio, _id: userID },
        token,
        updateUser,
        darkMode,
        openToast,
    } = useAppContext();
    const [user, setUser] = useState({
        username,
        profilePic,
        name,
        bio,
    });
    const [disabled, setDisabled] = useState(false);
    const [bioDisabled, setBioDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const profileInputRef = useRef();
    useEffect(() => {
        if (
            !user.username ||
            !user.name ||
            user.username.length < 3 ||
            user.name.length < 3
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [user.username, user.name]);
    useEffect(() => {
        if (user.bio.length >= 80) {
            setBioDisabled(true);
        } else {
            setBioDisabled(false);
        }
    }, [user.bio]);
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(prev => ({ ...prev, [name]: value }));
    };
    const handleFile = e => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
            setUser(prev => ({ ...prev, profilePic: fileReader.result }));
        };
    };
    const changeProfile = () => {
        profileInputRef.current?.click();
    };
    const save = async () => {
        try {
            setLoading(true);
            const res = await updateData(`/users/${userID}`, user, token);
            if (res.success) {
                updateUser(res.user);
                closeModel(false);
                openToast('profile successfully updated');
                setUser({
                    username,
                    profilePic,
                    name,
                    bio,
                });
            }
        } catch (error) {
            const message =
                error.response.data.message ||
                'Somwthing went wrong.Try again later!!!';
            openToast(message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Wrapper>
            <HeaderSectionContainer>
                <Title>Edit profile</Title>
                <IconButton onClick={e => closeModel(false)}>
                    <Close className='icon' />
                </IconButton>
            </HeaderSectionContainer>

            <Container>
                <SectionContainer title='profile photo'>
                    <PhotoContainer>
                        <input
                            ref={profileInputRef}
                            type='file'
                            id='profile'
                            hidden
                            onChange={e => handleFile(e)}
                        />
                        <AvatarContainer>
                            <Avatar
                                alt={username}
                                src={user.profilePic?.photo}
                                className='profile'
                            />
                            <IconButton
                                className='icon'
                                onClick={changeProfile}
                            >
                                <FaEdit />
                            </IconButton>
                        </AvatarContainer>
                    </PhotoContainer>
                </SectionContainer>
                <SectionContainer title='username'>
                    <Input
                        name='username'
                        value={user.username}
                        onChange={handleChange}
                    />
                    <Description>
                        www.tiktok-clone.com/@{user.username}{' '}
                    </Description>
                    <Description>
                        username can only contain letters, numbers,underscores
                        and periods. Changing you username will also change you
                        profile link
                    </Description>
                </SectionContainer>
                <SectionContainer title='name'>
                    <Input
                        name='name'
                        value={user.name}
                        onChange={handleChange}
                    />
                    <Description>
                        you nickname can only be changed once every 7 days
                    </Description>
                </SectionContainer>
                <SectionContainer title='bio'>
                    <Bio
                        name='bio'
                        value={user.bio}
                        onChange={handleChange}
                        disabled={bioDisabled}
                        placeholder='Add a bio...'
                    />
                    <Description> {user.bio.length} /80</Description>
                </SectionContainer>
            </Container>
            <ControlContainer>
                <Button
                    handleclick={() => closeModel(false)}
                    color={darkMode ? 'white' : 'gray'}
                    border='1px solid #dedede'
                    large
                >
                    Cancel
                </Button>
                <Button
                    border='1px solid #dedede'
                    bg={disabled ? '#f1f1f2' : 'transparent'}
                    color={disabled ? '#dedede' : darkMode ? 'white' : 'gray'}
                    large
                    handleclick={save}
                >
                    Save
                </Button>
            </ControlContainer>
        </Wrapper>
    );
};

export default EditProfile;
