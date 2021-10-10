import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default ({img}) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
    <Container>
        
        <StyledSlider {...settings}>
            {img.map((image) => (
                <Item img={image}></Item>
            ))}
        </StyledSlider>
    </Container>
    );
}

const Container = styled.article`
    height: 50%;
    @media ${props => props.theme.mobile}{height: 35%;}
    .slick-next{
        right: 0px;
        z-index: 10;
        &:before {
            opacity: 0.5;
            color: gray;
        }
    }
    .slick-prev{
        left: 0px;
        z-index: 10;
        &:before {
            opacity: 0.5;
            color: gray;
        }
    }
`;
const StyledSlider = styled(Slider)`
    height: 100%;
    & div{height: 100%;}
`;
const Item = styled.div`
    border-radius: 12px 12px 0 0;
    display: flex;
    justify-content: center; align-items: center;
    padding: 10px;
    background-image: ${props => `url(${props.img})`};
    background-size: cover;
    /* background-repeat: no-repeat; */
    background-position: center;
`;