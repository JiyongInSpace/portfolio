import React from 'react';
import styled from 'styled-components';
import mail from "../assets/mail.png";
import kakao from "../assets/kakao.png";
import github from "../assets/github.png";



export default ({handleScroll}) => {
    const clickScroll = (num) => {
        handleScroll(num);
    }
    return (
    <Container>
        <TopBtn onClick={() => clickScroll(0)}>
            <i className="fas fa-angle-double-up"></i>
        </TopBtn>
        © 2021 - Kim Ji Yong, All rights reserved.
        <Logos>
            <Logo href="https://github.com/JiyongInSpace" target="_blank">
                <Img src={github}></Img>
            </Logo>
            <Logo href="https://open.kakao.com/o/sLed3HCd" target="_blank">
                <Img src={kakao}></Img>
            </Logo>
            <Logo>
                <Img src={mail} onClick={() => clickScroll(3)}></Img>
            </Logo>
        </Logos>
    </Container>
)};


const Container = styled.article`
    text-align: center;
    padding: 60px 0 40px 0;
    background-color: #f5f5f5;
    position: relative;
`;
const TopBtn = styled.button`
    position: absolute;
    top: -20px; left: calc(50% - 20px);
    border: none;
    border-radius: 20px;
    width: 40px; height: 40px;
    color: white; background-color: gray;
    display: flex; justify-content: center; align-items: center;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        transform: translateY(-10%);
    }
`;
const Logos = styled.div`
    width: 110px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;
const Logo = styled.a`
    display: block;
    width: 30px; height: 30px;
    background-color: white;
    border-radius: 15px;
    transition: 0.3s;
    &:hover{
        transform: translateY(5%);
    }
`;
const Img = styled.img`
    width: 100%; height: 100%;
    cursor: pointer;
`;