import React from 'react';
import styled from 'styled-components';
import pencil from '../assets/pencil.png';


export default ({tab}) => {
    return(
    <Background ref={tab}>
        <Container>
            <PostCard>
                <CardBackFst>
                    <GreetingSubtitle>Portfolio</GreetingSubtitle>
                    Jal Butakdripnida.
                </CardBackFst>
                <CardBackSnd>
                    <div></div><div></div>
                </CardBackSnd>
            </PostCard>
            <PostCard>
                <CardFst>
                    <GreetingTitle>Kim Ji Yong</GreetingTitle>
                    Front-end web developer
                </CardFst>
                <CardSnd>

                </CardSnd>
                <CardTrd></CardTrd>
                <CardFth>
                    jiyonginspace.github.io/
                </CardFth>
            </PostCard>
            <Img src={pencil} />
        </Container>   
    </Background>
    )
};


const Background = styled.div`
    width: 100%;
    height: 100vh;
`;
const Container = styled.article`
    width: 1180px; height: 100%;
    margin: 0 auto;
    position: relative;
    @media ${props => props.theme.desktop}{width: 100%;}
    
`;
const PostCard = styled.div`
    width: 600px; height: 400px;
    transition: 0.5s;
    @media ${props => props.theme.tablet}{
        width: 75vw; height: 50vw;
        font-size: 1.7vw;
    }
    position: absolute;
    box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.3);
    background-color: white;
    padding: 30px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 2fr 1fr 2fr;
    grid-column-gap: 20px;
    &:first-child{
        top: 40%; left: 60%;
        transform: translate(-50%, -30%) rotate(10deg);
    }
    &:nth-child(2){
        top: 50%; left: 40%;
        transform: translate(-50%, -25%) rotate(-5deg);
    }
    @media ${props => props.theme.tablet}{
        &:first-child{
            top: 30%; right: 20px; left: unset;
            transform: rotate(10deg);
        }
        &:nth-child(2){
            top: 45%; left:5%;
            transform: rotate(-5deg);
        }
    }
    @media ${props => props.theme.mobile}{
        width: 70vw; height: 90vw;
        grid-template-columns: 1fr 10px;
        grid-template-rows: 1fr 2fr 2fr;
        padding: 20px;
        grid-gap: 10px;
        &:first-child{
            top: 30%; right: 5%; 
            transform: rotate(-10deg);
        }
        &:nth-child(2){
            top: 40%; left: 10%;
            transform: rotate(5deg);
        }
    }
`;
const Img = styled.img`
    height: 50%;
    position: absolute;
    top: 35%; left: 70%;
    transform: rotate(25deg);
    filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.4));
`
const CardFst = styled.div`
    @media ${props => props.theme.mobile}{
        grid-column: 1 / 3;
        grid-row: 1 / 2;
    }
`;
const GreetingTitle = styled.h1`
    font-size: 3.3em;
    font-weight: 700;
    margin-bottom: 10px;
    @media ${props => props.theme.mobile}{
        font-size: 5em;
    }
`;
const CardSnd = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background: lightgray;
    @media ${props => props.theme.mobile}{
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
`;
const CardTrd = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    background: lightgray;
    @media ${props => props.theme.mobile}{
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }
`;
const CardFth = styled.div`
    padding: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: gray;
    font-size: 0.8em;
    @media ${props => props.theme.mobile}{
        grid-column: 2 / 3;
        grid-row: 2 / 4;
        writing-mode: vertical-lr;
    }
`;

const CardBackFst = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    @media ${props => props.theme.mobile}{
        grid-column: 1 / 3;
        text-align: right;
    }
`;
const GreetingSubtitle = styled.h1`
    font-size: 2.5em;
    font-weight: 600;
    margin-bottom: 10px;
    @media ${props => props.theme.mobile}{
        font-size: 5em;
    }
`;
const CardBackSnd = styled.div`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &>div{
        height: 33%;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
    }
    @media ${props => props.theme.mobile}{
        grid-column: 1 / 3;
        grid-row: 3 / 4;
    }
`; 