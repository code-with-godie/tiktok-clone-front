import styled from 'styled-components';
import React from 'react';
import { Block, Flag } from '@mui/icons-material';
import { FiSend } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { useState } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
    position: absolute;
    top: 110%;
    right: 0;
    padding: 0.5rem;
    background-color: ${props => props.theme.bg_primary};
    width: 200px;
    border-radius: 0.3rem;
    box-shadow: 0 0 5px 2px #f5f5f5;
`;
const OptionContainer = styled.div`
    display: flex;
    cursor: pointer;
    padding: 0.5rem;
    align-items: center;
    gap: 0.5rem;
    :not(:last-child) {
        border-bottom: 1px solid gray;
    }
    .icon {
        color: ${props => props.theme.text_primary};

        font-size: 1rem;
    }
    .icon.unblock {
        color: #d91b1b;
        font-size: 1rem;
    }
`;
const Option = styled.p`
    font-weight: 200;
    font-size: 1rem;
    color: ${props => props.theme.text_primary};

    text-transform: capitalize;
    &.unblock {
        color: #d91b1b;
    }
`;
const UserOption = ({ userID }) => {
    const navigate = useNavigate();
    const { handleLoginModel, user, blockUser } = useAppContext();
    const [blocked, setBlocked] = useState(user?.blockUser?.includes(userID));
    const handleClick = location => {
        if (!user) {
            handleLoginModel();
            return;
        }
        navigate(location);
    };

    const handleReport = () => {
        console.log('report');
    };
    useEffect(() => {
        setBlocked(user?.blockUser?.includes(userID));
    }, [user]);

    return (
        <Container>
            <OptionContainer onClick={e => handleClick('/inbox')}>
                <FiSend className='icon' />
                <Option>message</Option>
            </OptionContainer>
            <OptionContainer onClick={handleReport}>
                <Flag className='icon' />
                <Option>report</Option>
            </OptionContainer>
            <OptionContainer onClick={e => blockUser(userID)}>
                <Block className={!blocked && 'unblock icon'} />
                <Option className={!blocked && 'unblock'}>
                    {' '}
                    {blocked ? 'unblock' : 'block'}{' '}
                </Option>
            </OptionContainer>
        </Container>
    );
};

export default UserOption;
