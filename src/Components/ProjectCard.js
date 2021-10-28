import React, {useState} from 'react';
import styled from 'styled-components';
import ProjectModal from './ProjectModal';
import paper from '../assets/paper.jpg';
import Texture from './Texture';

export default ({data, width, height, img, index, type, lock, unlock}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
        lock();
    }
    const closeModal = (e) => {
        (e.target === e.currentTarget) && setModalVisible(false);
        (e.target === e.currentTarget) && unlock();
    }

    return (
    <>
        <Container width={width} height={height} type={type}>
            <Front bg={img[index].card} color={data.color} type={type}>
                <Texture />
                <Texture />
            </Front>
            <Back>
                <Num>{data.num}</Num>
                <Title>{data.title}</Title>
                <Detail>
                    {data.simpleDetail}
                </Detail>
                <Button onClick={openModal}>more</Button>
            </Back>
        </Container>
        <ProjectModal
            title={data.title}
            data={data.modal}
            visible={modalVisible}
            onClose={closeModal}
            img={img[index]}
            unlock={unlock}
        />
    </>
)};


const Container = styled.div`
    width: ${props => props.width}; height: ${props => props.height};
    &[type="Project"]{
        @media ${props => props.theme.tablet}{width: 60%;}
        @media ${props => props.theme.mobile}{width: 80%; height: 50vh;}
    }
    position: relative;
    color: white;
    perspective: 2000px;
    margin-top: 50px;
    
    &>div{
        width: 100%; height: 100%;
        backface-visibility: hidden;
        transition: 1s;
        border-radius: 10px;
        box-shadow: -2px -2px 8px rgba(255, 255, 255, 0.4),
        -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.3);
    }
    &:hover{
        &>div:first-child{transform: rotateY(180deg);}
        &>div:last-child{transform: rotateY(0deg);}
    }
`;
const Front = styled.div`
    color: gray;
    position: absolute;
    top: 0; left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
    background-color: ${props => props.color};
    background-image: ${props => props.bg ? `url(${props.bg})` : "unset"};
    background-size: ${props => props.type === "project" ? "70%" : "150px"};
    background-size: ${props => (props.color === "#f70555")&&("120px")};
    background-position: center;
    background-repeat: no-repeat;
`;
const Back = styled.div`
    padding: 20px;
    background-image: url(${paper});
    background-size: 165%;
    color: rgba(0,0,0,0.9);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transform: rotateY(-180deg);
    cursor: default;
`;
const Num = styled.span`
    font-size: 1.1em;
    color: gray;
`;
const Title = styled.h4`
    font-size: 1.5em;
    font-weight: bold;
    margin: 10px 0;
`
const Detail = styled.p``
const Button = styled.button`
    padding: 7px;
    font-size: 1.1em;
    margin-top: 15px;
    background: rgba(0,0,0,0.9); 
    color: white;
    border: 1px solid;
    cursor: pointer;
    transition: 0.3s;
    &:hover{opacity:0.7;}
    &:active{transform: scale(0.95);}
`;
