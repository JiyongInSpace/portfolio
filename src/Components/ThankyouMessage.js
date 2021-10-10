import React, {useState} from 'react';
import styled from 'styled-components';

export default () => {

    const [modalVisible, setModalVisible] = useState(true);
    const closeModal = () => {
        setModalVisible(false);
    }
    
    
    return (
    
    <Container className="thankyou_message">
        <ModalOverlay visible={modalVisible}>
            <Modal>
                <Icon className="material-icons-outlined">send</Icon>
                편지가 발송되었습니다. <br /> 관심을 가져주셔서 감사합니다.
                <ExitBtn onClick={closeModal}>✖</ExitBtn>
            </Modal>
        </ModalOverlay>
    </Container>
)}

const Container = styled.div`
    display: none;
`;
const ModalOverlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    justify-content: center; align-items: center;
`;

const Modal = styled.div`
    width: 280px; height: 140px;
    display: flex;
    justify-content: center; align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.3);
    line-height: 1.3em;
    position: relative;
`
const Icon = styled.span`
    margin-right: 10px;
    font-size: 2.5em;
`;

const ExitBtn = styled.div`
    position: absolute;
    display: flex; justify-content: center; align-items: center;
    border: none;
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
`;