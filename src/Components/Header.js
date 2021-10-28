import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import aboutMeImg from '../assets/aboutMe.png';


export default ({handleScroll, tab}) => {
    const clickScroll = (num) => {
        handleScroll(num);
    }
    return(
        <Header>
            <Container>
                <Photo img={aboutMeImg}/>
                <List>
                    <NLink to="/" onClick={() => clickScroll(0)} tab={tab}>
                        <span className="desktop">Home</span>
                        <Icon className="fas fa-home"></Icon>
                    </NLink>
                    <NLink to="/about" onClick={() => clickScroll(1)} tab={tab}>
                        <span className="desktop">About</span>
                        <Icon className="far fa-address-card"></Icon>
                    </NLink>
                    <NLink to="/project" onClick={() => clickScroll(2)} tab={tab}>
                        <span className="desktop">Project</span>
                        <Icon className="fas fa-code"></Icon>
                    </NLink>
                    <NLink to="/contact" onClick={() => clickScroll(3)} tab={tab}>
                        <span className="desktop">Contact</span>
                        <Icon className="far fa-envelope"></Icon>
                    </NLink>
                    <NLink to="/guest" onClick={() => clickScroll(4)} tab={tab}>
                        <span className="desktop">Guest</span>
                        <Icon className="fas fa-clipboard"></Icon>
                    </NLink>
                </List>
            </Container>
        </Header>
    )
};



const Header = styled.header`
    position: fixed;
    z-index: 1;
    top: 0; left: 0;
    width: 100%; height: 90px;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
`;
const Container = styled.div`
    width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const List = styled.div`
    top: 50px;
    left: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.1em;
`;
const Photo = styled.figure`
    background-color: lightgray;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 15px;
    background-image: ${props => `url(${props.img})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15);
`;
const NLink = styled(Link)`
    margin-right: 20px;
    color: black;
    position: relative;
    padding: 5px 0;
    overflow: hidden;
    @media ${props => props.theme.mobile}{
        span{display: none;}
    }
    transition: 0.2s;
    opacity: ${props => props.to === props.tab ? "0.4" : "1"};
`;
const Icon = styled.i`
    display: none;
    @media ${props => props.theme.mobile}{
        display: inline;
    }
`;