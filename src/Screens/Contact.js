import React from 'react';
import styled from 'styled-components';
import ThankyouMessage from '../Components/ThankyouMessage';
import kakaostamp from "../assets/kakao_stamp.png";
import githubstamp from "../assets/git_stamp.png";
import paper from '../assets/paper.jpg';


export default ({tab, containerTab}) => {
    
    
    return (
        <Background ref={tab}>
            <Container ref={containerTab}>
                <Title>CONTACT</Title>
                <Subtitle>발전하는 신입개발자가 필요하시다면 아래 우편을 확인해주세요.</Subtitle>
                <Postcard>
                    <Form
                        className="gform"
                        method="POST"
                        action="https://script.google.com/macros/s/AKfycbzdHHW11UlA6Zllx6OQRgFjGMKBLlMIqpS1MGGcwXG3V4CrTGia1lndLMaG_NYjuilG/exec"
                    >
                        <FormEl>
                            <CardTextTitle>보내는 사람</CardTextTitle>
                            <Input type="text" placeholder="Enter Your Name" id="name" name="name" required></Input>
                            <Input type="mail" placeholder="Enter Your Email" id="email" name="email" required></Input>
                            <Textarea placeholder="Enter Your Message" id="message" name="message" rows="8" required></Textarea>
                            <Button>Send</Button>
                        </FormEl>
                        <ThankyouMessage />
                    </Form>
                    
                    <Stamps>
                        <Stamp href="https://github.com/JiyongInSpace" target="_blank">
                            <Img src={githubstamp}></Img>
                        </Stamp>
                        <Stamp href="https://open.kakao.com/o/sLed3HCd" target="_blank">
                            <Img src={kakaostamp}></Img>
                        </Stamp>
                    </Stamps>
                    <CardText>
                        <CardTextTitle>받는 사람</CardTextTitle>
                        <CardTextContent>
                            <span>신입 웹 프론트엔드 개발자 김지용</span>
                            <span>blaziken@naver.com</span>
                            <NumBox>
                                <Num>0</Num><Num>1</Num><Num>0</Num>-
                                <Num>3</Num><Num>5</Num><Num>4</Num><Num>3</Num>-
                                <Num>3</Num><Num>2</Num><Num>6</Num><Num>1</Num>
                            </NumBox>
                        </CardTextContent>
                    </CardText>
                </Postcard>
            </Container>
        </Background>
    );
}


const Background = styled.div`
    width: 100%;
    min-height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container = styled.article`
    width: 1180px;
    padding: 25px;
    @media ${props => props.theme.desktop}{
        width: 100%;
    }
    transition: 2s;
    opacity: 0;
    transform: translateY(5%);
    &.show{
        opacity: 1;
        transform: translateY(0);
    }
`;
const Title = styled.h2`
    font-family: 'Black Han Sans', sans-serif;
    font-size: 4em;
    text-align: center;
    @media ${props => props.theme.tablet}{font-size: 3em;}
    @media ${props => props.theme.mobile}{font-size: 2em;}
`;
const Subtitle = styled.p`
    text-align: center;
    color: gray;
    margin: 30px 0 50px 0;
`
const Postcard = styled.section`
    width: 900px; height: 500px;
    margin: 0 auto;
    position: relative;
    box-shadow: -2px -2px 8px rgba(255, 255, 255, 0.4),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 30% 70%;
    background-image: url(${paper});
    background-size: 165%;
    @media ${props => props.theme.tabletL}{
        width: 100%; height: unset;
    }
    @media ${props => props.theme.tablet}{
        display: flex;
        flex-direction: column;
        font-size: 0.8em;
    }
`;
const CardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 40px;
    @media ${props => props.theme.tablet}{
        padding: 25px;
        align-items: flex-end;
        text-align: right;
        font-size: 0.9em;
    }
    @media ${props => props.theme.mobile}{
        padding: 10px;
    }
`;
const CardTextTitle = styled.h4`
    font-size: 1.5em;
    color: blue;
    font-weight: 500;
    padding: 20px 0 0 20px;
    @media ${props => props.theme.tabletL}{
        padding: 0 10px 0 0;
    }
    @media ${props => props.theme.tablet}{
        font-size: 18px;
    }
`;
const CardTextContent = styled.div`
    font-size: 1.2em;
    margin: 25px 0 10px 0;
    padding: 0 0 0 20px;
    @media ${props => props.theme.tabletL}{
        padding: 0 10px 0 0;
    }
    span{
        line-height: 1.5em;
    }
`;
const NumBox = styled.div`
    display: flex;
    margin-top: 20px;
    @media ${props => props.theme.tablet}{
        justify-content: flex-end;
    }
`;
const Num = styled.div`
    width: 20px; height: 20px;
    border: 1px solid crimson;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2px;
    @media ${props => props.theme.tablet}{
        width: 15px; height: 15px;
    }
`;
const Stamps = styled.div`
    margin-left: auto;
    display: flex;
    align-items: flex-start;
    padding: 25px;
    @media ${props => props.theme.tablet}{
        position: absolute;
        top: 5px; right: 5px;
    }
    @media ${props => props.theme.mobile}{
        top: -5px; right: -5px;
    }
`;
const Stamp = styled.a`
    display: block;
    width: 90px; height: 120px;
    transition: 0.3s;
    margin-left: 10px;
    &:hover{
        transform: scale(1.05);
    }
    @media ${props => props.theme.tablet}{
        width: 70px; height: 105px;
    }
    @media ${props => props.theme.mobile}{
        &:first-child{display: none;}
    }
`;
const Img = styled.img`
    width: 100%; height: 100%;
    cursor: pointer;
`;


const Form = styled.form`
    width: 100%; height: 100%;
    grid-column: 1 / 2; grid-row: 1 / 3;
`;
const FormEl = styled.div`
    width: 100%; height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    @media ${props => props.theme.mobile}{
        padding: 20px
    }
`;
const Input = styled.input`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 200;
    padding: 5px 20px;
    border: none;
    border-bottom: 1px solid lightgray;
    background: inherit;
    margin-top: 20px;
    font-size: 20px;
    &:focus{outline: none;}
    @media ${props => props.theme.tablet}{
        font-size: 1.3em;
        width: calc(100% - 150px);
        padding: 0px 20px;
    }
    @media ${props => props.theme.mobile}{
        width: calc(100% - 75px);
        padding: 0px 5px;
    }
`;
const Button = styled.button`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 200;
    padding: 5px 20px;
    border: none;
    border-bottom: 1px solid lightgray;
    margin-top: 20px;
    font-size: 20px;
    cursor: pointer;
    border-right: 1px solid lightgray;
    transition: 0.4s;
    &:active{transform: scale(0.99);}
    &:hover{background-color: gray; color:white;}
    @media ${props => props.theme.tablet}{
        font-size: 1.3em;
    }
`;

const Textarea = styled.textarea`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 200;
    padding: 20px;
    margin-top: 10px;
    border: 1px solid lightgray;
    background: inherit;
    font-size: 20px;
    resize: none;
    &::-webkit-scrollbar{width:5px;}
    &::-webkit-scrollbar-thumb{background-color: white;}
    &::-webkit-scrollbar-track{background-color: silver;}
    &:focus{outline: none;}
    @media ${props => props.theme.tablet}{
        font-size: 1.3em;
    }
    @media ${props => props.theme.mobile}{
        padding: 10px 5px;
    }
`;