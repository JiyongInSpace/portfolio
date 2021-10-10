import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export default ({handleScroll}) => {
    const clickScroll = (num) => {
        handleScroll(num);
    }
    return(
        <Header>
            <Container>
                <Photo></Photo>
                <List>
                    <NLink to="/" onClick={() => clickScroll(0)}>
                        <span className="desktop">Home</span>
                        <Icon className="fas fa-home"></Icon>
                    </NLink>
                    <NLink to="/about" onClick={() => clickScroll(1)}>
                        <span className="desktop">About</span>
                        <Icon className="far fa-address-card"></Icon>
                    </NLink>
                    <NLink to="/project" onClick={() => clickScroll(2)}>
                        <span className="desktop">Project</span>
                        <Icon className="fas fa-code"></Icon>
                    </NLink>
                    <NLink to="/contact" onClick={() => clickScroll(3)}>
                        <span className="desktop">Contact</span>
                        <Icon className="far fa-envelope"></Icon>
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
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
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
`;
const Photo = styled.figure`
    border: 3px solid;
    width: 70px;
    height: 70px;
    border-radius: 40px;
    margin-left: 15px;
`;
const NLink = styled(Link)`
    margin-right: 20px;
    color: black;
    @media ${props => props.theme.mobile}{
        span{display: none;}
    }
    
`;
const Icon = styled.i`
    display: none;
    @media ${props => props.theme.mobile}{
        display: inline;
    }
`;