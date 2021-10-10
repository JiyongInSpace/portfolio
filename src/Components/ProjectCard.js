import React, {useState} from 'react';
import styled from 'styled-components';
import ProjectModal from './ProjectModal';


export default ({data, width, height, img, index, type}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = (e) => {
        (e.target === e.currentTarget) && setModalVisible(false);
    }

    return (
    <>
        <Container width={width} height={height} type={type}>
            <Front bg={img[index].card} />
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
            img={img[index].modal}
        />
    </>
)};


const Container = styled.div`
    width: ${props => props.width}; height: ${props => props.height};
    &[type="project"]{
        @media ${props => props.theme.tablet}{width: 60%;}
        @media ${props => props.theme.mobile}{width: 80%; height: 50vh;}
    }
    position: relative;
    color: white;
    perspective: 2000px;
    margin: 50px 0;
    &>div{
        width: 100%; height: 100%;
        backface-visibility: hidden;
        transition: 1s;
        border-radius: 10px;
        box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.3);
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
    background: white;
    background-image: ${props => `url(${props.bg})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;
const Back = styled.div`
    padding: 20px;
    background: lightgray;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transform: rotateY(-180deg);
    cursor: default;
`;
const Num = styled.span`
    font-size: 1.1em;
`;
const Title = styled.h4`
    font-size: 1.5em;
    font-weight: bold;
    margin: 10px 0;
`
const Detail = styled.p``
const Button = styled.button`
    padding: 3px;
    margin-top: 15px;
    background: inherit;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    &:hover{background-color: white; color: gray;}
`;
