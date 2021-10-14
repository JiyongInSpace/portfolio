import React, {useEffect} from 'react';
import styled from 'styled-components';
import ModalSlider from './ModalSlider';
import Stackicon from './Stackicon';


const ProjectModal = ({title, data, visible, onClose, img, unlock}) => {
    let vh = 0;
    useEffect(() => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, []);
    
    return (
    <>
        <Overlay visible={visible} onClick={(e) => {onClose(e); unlock();}}>
            <Modal>
                <ModalTitle>{title}</ModalTitle>
                <ModalSlider img={img} />
                <ModalSection>
                    <Stacks>
                        {data.stacks.map((stack,index) => (
                            <Stackicon key={`${title}${index}`} data={stack}/>
                        ))}
                    </Stacks>
                    <ModalDetail>
                        <TabTitle>
                            <TabIcon className="fas fa-question"/>설명
                        </TabTitle>
                        <TabDetail>{data.detail}</TabDetail>
                        <TabTitle>
                            <TabIcon className="fas fa-exclamation"/>주요 기능
                        </TabTitle>
                        <TabDetail>{data.function}</TabDetail>
                    </ModalDetail>
                    <Links>
                        <Link href={data.links.git} target="_blank">
                            <Icon className="fas fa-code"></Icon>
                        </Link>
                        <Link href={data.links.deploy} target="_blank">
                            <Icon className="fas fa-external-link-alt"></Icon>
                        </Link>
                    </Links>
                </ModalSection>
                <Exit onClick={(e) => {onClose(e); unlock();}}>✖</Exit>
            </Modal>
        </Overlay>
    </>
)};

export default ProjectModal;


const Overlay = styled.div`
    display: ${props => props.visible ? "flex" : "none"};
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    justify-content: center; align-items: center;
    position: fixed;
    top: 0; left: 0; bottom: 0; right: 0;
    z-index: 100;
`;
const Modal = styled.div`
    width: 700px; height: 90vh;
    background-color: white;
    position: relative;
    border-radius: 12px;
    box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.3);
    
    @media ${props => props.theme.tablet}{width: 90%;}
    @media ${props => props.theme.mobile}{
        width: 100vw; height: calc(var(--vh, 1vh) * 100);
        }
`;
const ModalTitle = styled.h2`
    position: absolute;
    top: 20px; left: 50%; transform: translateX(-50%);
    z-index: 1;
    font-size: 2em; font-weight: 600;
`;
const ModalSection = styled.div`
    height: 50%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f5f5f5;
    @media ${props => props.theme.mobile}{height: 65%;}
`;
const Stacks = styled.div`
    text-align: center;
    margin-bottom: 5px;
`
const ModalDetail = styled.div`
    flex-grow: 1;
    padding: 20px 30px;
    overflow-y: auto;
    background-color: white;
    border-radius: 15px;
    &::-webkit-scrollbar{width:5px;}
    &::-webkit-scrollbar-thumb{background-color: black;}
    &::-webkit-scrollbar-track{background-color: silver;}
`
const TabTitle = styled.h3`
    font-size: 1.2em;
    font-weight: 700;
    padding-bottom: 5px;
    margin-bottom: 5px;
    display: flex; align-items: baseline;
    border-bottom: 1px solid lightgray;
    i{margin-right: 5px;}
`;
const TabDetail = styled.p`
    margin-bottom: 20px;
    line-height: 1.5em;
`;
const TabIcon = styled.i`
    margin-right: 5px;
`;
const Links = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Link = styled.a`
    margin: 10px;
`
const Exit = styled.button`
    position: absolute;
    display: flex; justify-content: center; align-items: center;
    border: none; background-color: rgba(0, 0, 0, 0);
    font-size: 1em;
    width: 20px; height: 20px;
    right: 10px; top: 10px;
    transition: 0.2s;
    cursor: pointer;
    opacity: 0.5;
    z-index: 10;
    &:hover{
        transform: rotate(180deg) scale(1.3);
    }
    @media ${props => props.theme.mobile}{transform:scale(1.5); top: 25px; right:20px;}
`

const Icon = styled.i`
    font-size: 1.7em; color: black;
    transition: 0.1s;
    &:hover{
        transform: scale(1.08);
    }
`;