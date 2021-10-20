import React, { useEffect } from 'react';
import styled from 'styled-components';
import pencil from '../assets/pencil.png';
import paper from '../assets/paper.jpg';
import greeting from '../assets/greeting1.png';

export default ({tab, containerTab}) => {
    let vh = 0;
    useEffect(() => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);

    return(
    <Background ref={tab}>
        <Container ref={containerTab}>
            <PostCard img={paper}>
                <CardBackFst>
                    <GreetingSubtitle>Portfolio</GreetingSubtitle>
                    안녕하세요, 잘 부탁드립니다.
                </CardBackFst>
                <CardBackSnd>
                    <div></div><div></div>
                </CardBackSnd>
            </PostCard>
            <PostCard img={paper}>
                <CardFst>
                    <GreetingTitle>Kim Ji Yong</GreetingTitle>
                    Front-end web developer
                </CardFst>
                <CardSnd>
                    <div>
                        <span className="yellow">#jiyong &#123;</span> <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="sky">potential</span>
                        :&nbsp;<span className="brown">100%</span>;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="sky">confidence</span>
                        :&nbsp;<span className="brown">100%</span>;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="sky">aspire</span>
                        :&nbsp;<span className="brown">100%</span>;<br />
                            <span className="yellow">&#125;</span>
                            <span className="blink">❘</span>
                    </div>
                </CardSnd>
                <CardTrd img={greeting} />
                <CardFth>
                    https://jiyongin.space/
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
    transition: 2s;
    opacity: 0;
    &.show{
        opacity: 1;
    }
`;
const PostCard = styled.div`
    width: 700px; height: 450px;
    transition: 0.5s;
    font-size: 1.3em;
    position: absolute;
    box-shadow: -2px -2px 8px rgba(255, 255, 255, 0.4),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.3);
    background-color: white;
    background-image: ${props => `url(${props.img})`};
    background-size: 165%;
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
    @media ${props => props.theme.desktop}{width: 65vw; height: 37vw; font-size: 1.2em;}
    @media ${props => props.theme.laptop}{font-size: 1em;}
    @media ${props => props.theme.tablet}{
        width: 72vw; height: 43vw;
        font-size: 1.60vw;
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
        width: 70vw; height: 80vw;
        grid-template-columns: 1fr 10px;
        grid-template-rows: 1fr 2fr 2fr;
        padding: 20px;
        grid-gap: 10px;
        &:first-child{
            top: 28%; right: 10%; 
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
    filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.2));
    @media ${props => props.theme.mobile}{
        left: unset; top: 50%; right: 30%;
        height: 80vw;
    }
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
    letter-spacing: -0.02em;
    margin-left: -4px;
    @media ${props => props.theme.mobile}{
        font-size: 5em;
    }
`;
const CardSnd = styled.div`
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    background-color: #373737;
    font-family: 'Nanum Gothic Coding', monospace;
    color: #d4d4d4;
    display: flex;
    align-items: center;
    padding-left: 15px;
    .sky{color: #7bdcf0;}
    .orange{color: #d7ba6e;}
    .brown{color: #ce8349;}
    .white{color: #d4d4d4;}
    .yellow{color: #ffd70e;}
    @keyframes blink-effect {50% {opacity: 0;}}
    .blink {animation: blink-effect 1s step-end infinite;
    font-size: 1.4em; padding-top: 10px;}
    @media ${props => props.theme.mobile}{
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }
`;

const CardTrd = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    background-image: ${props => `url(${props.img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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

