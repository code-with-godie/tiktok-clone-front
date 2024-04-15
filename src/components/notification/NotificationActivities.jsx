import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    max-width: 70%;
`;
const Activity = styled.p`
    font-size: 0.9rem;
    background-color: #f1f1f2;
    color: #000000b2;
    cursor: pointer;
    border-radius: 1rem;
    padding: 0.3rem;
    font-weight: bold;
    &.activity.active {
        color: ${props => props.theme.bg_primary};
        background: ${props => props.theme.text_primary};
    }
`;
const NotificationActivities = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activities = document.querySelectorAll('.activity');
    useEffect(() => {
        activities.forEach((activity, index) => {
            if (activity.classList.contains('active')) {
                activity.classList.remove('active');
            }
            if (activeIndex === index) {
                activity.classList.add('active');
            }
            activity.addEventListener('click', () => {
                setActiveIndex(index);
            });
        });
    }, [activeIndex, activities]);
    return (
        <Container>
            <Activity className='activity'>All activity</Activity>
            <Activity className='activity'>Likes</Activity>
            <Activity className='activity'>Comments</Activity>
            <Activity className='activity'>Mentions and tags</Activity>
            <Activity className='activity'>Followers</Activity>
        </Container>
    );
};

export default NotificationActivities;
