import React from 'react';
import styled from 'styled-components';
import postf from '../assets/post-it-f.png';
import posts from '../assets/post-it-s.png';
import postt from '../assets/post-it-t.png';

const Postit = ({name, message, num, idx}) => {
    
    return (
        <Container id={num} idx={idx}>
            <User>From {name}</User>
            <Message>"{message}"</Message>
        </Container>
    );
    };

export default Postit;

const Container = styled.li`
    width: 19%; height: 200px;
    margin-bottom: 20px;
    background-image: ${props => {
        switch(props.id % 3){
            case 1 :
                return `url(${postf})`
            case 2 :
                return `url(${posts})`
            default :
                return `url(${postt})`
        }
    }};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 30px 20px 10px 20px;
    @media ${props => props.theme.laptop}{
        width: 24%;
        display: ${props => props.idx >= 8 ? "none" : "block"};
    }
    @media ${props => props.theme.tablet}{
        width: 32%;
        display: ${props => props.idx >= 6 ? "none" : "block"};
    }
    @media ${props => props.theme.mobile}{
        width: 48%;
    }
    @media ${props => props.theme.mobileS}{
        display: ${props => props.idx >= 4 ? "none" : "block"};
        width: 80%;
    }
`;
const User = styled.h6`
    margin-bottom: 10px;
    font-weight: 700;
`;
const Message = styled.p`
    word-break: break-all;
    overflow-y: hidden;
    text-overflow: ellipsis;
    line-height: 1.3em;
`;