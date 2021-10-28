import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MessageForm from '../Components/MessageForm';
import Postit from '../Components/Postit';




export default ({tab, messageRepository, lock, unlock, containerTab}) => {
    const [messages, setMessages] = useState([]);
    const [formVisible, setFormVisible] = useState(false);

    const showForm = () => {
        setFormVisible(true);
    }
    const hideForm = e => {
        e.preventDefault();
        setFormVisible(false);
    }
    const makePostit = (postit) => {
        const updated = [postit, ...messages];
        setMessages(updated);
        messageRepository.saveMessage(updated);
        setFormVisible(false);
    }
    useEffect(() => {
        const stopSync = messageRepository.syncMessages(messages => setMessages(messages));
        return () => stopSync();
    }, [messages])
    
    return(
    <Background ref={tab}>
        <Container ref={containerTab} data-pathname="/guest">
            <Title>GUEST BOOK</Title>
            <Subtitle>짧은 글 하나 남겨주시면 감사하겠습니다.</Subtitle>
            <Btn onClick={showForm}><i className="fas fa-plus"></i></Btn>
            <Board>
                {messages && messages
                .map((post, index) => (
                    (index < 10) && <Postit key={`guestmessage${post.id}`} num={post.id} name={post.name} message={post.message} idx={index}/>
                ))}
            </Board>
            <MessageForm onSubmit={makePostit} visible={formVisible} hide={hideForm}/>
        </Container>   
    </Background>
    )
};


const Background = styled.div`
    width: 100%;
    padding: 150px 0;
    min-height: 100vh;
`;
const Container = styled.article`
    width: 1180px; height: 100%;
    margin: 0 auto;
    position: relative;
    @media ${props => props.theme.desktop}{width: 100%;}
    transition: 2s;
    opacity: 0;
    transform: translateY(5%);
    &.show{
        opacity: 1;
        transform: translateY(0);
    }
`;
const Title = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Black Han Sans', sans-serif;
    font-size: 4em;
    @media ${props => props.theme.tablet}{font-size: 3em;}
    @media ${props => props.theme.mobile}{font-size: 2em;}
`;
const Subtitle = styled.p`
    text-align: center;
    color: gray;
    line-height: 1.3em;
`
const Board = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const Btn = styled.button`
    margin: 20px auto;
    margin-bottom: 50px;
    width: 50px; height: 50px;
    border: 1px solid lightgray;
    border-radius: 25px;
    background-color: white;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -2px -2px 8px rgba(255, 255, 255, 0.4),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.3);
    &:hover{box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
    inset -2px -2px 12px rgba(255, 255, 255, 0.5),
    inset 2px 2px 4px rgba(255, 255, 255, 0.1),
    inset 2px 2px 8px rgba(0, 0, 0, 0.15);}
`;