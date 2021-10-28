import React, { useRef } from 'react';
import styled from 'styled-components';

const MessageForm = ({onSubmit, visible, hide}) => {
    const nameRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if(nameRef.current.value === '' || messageRef.current.value === ''){
            return;
        }
        const postitMessage = {
            id: Date.now(),
            name: nameRef.current.value || "익명",
            message: messageRef.current.value || ""
        };
        formRef.current.reset();
        onSubmit(postitMessage);
    }

    return <Layout visible={visible}>
            <Form ref={formRef} >
            <h2>
                Message
                <Exit onClick={hide}><i className="fas fa-times" /></Exit>
                </h2>
            <Input ref={nameRef} type="text" placeholder="Your Name" required></Input>
            <Textarea ref={messageRef}  placeholder="Your Message" required/>
            <Button onClick={handleSubmit}>Append</Button>
        </Form>
    </Layout>
    };

export default MessageForm;

const Layout = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    justify-content: center; align-items: center;
    display: ${props => props.visible ? "flex" : "none"};
`;
const Form = styled.form`
    border-radius: 10px;
    box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.3);
    width: 250px; height: 200px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 15px;
    h2{
        text-align: center;
        margin-bottom: 10px;
        position: relative;
    }
`;
const Input = styled.input`
    padding: 4px 10px;
    border: 0;
    border-bottom: 1px solid lightgray;
    margin-bottom: 5px;
`;
const Textarea = styled.textarea`
    flex-grow: 1;
    padding: 10px;
    border: 1px solid lightgray;
    font-family: "Noto Sans KR", sans-serif;
    resize: none;
`;
const Button = styled.button`
    border: 0;
    margin-top: 5px;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 3px;
    background-color: black; color: white;
    &:hover{background-color: gray; color: black;}
`;

const Exit = styled.button`
    position: absolute;
    right: 0; top: 0;
    background-color: inherit;
    border: 0; padding: 0;
    cursor: pointer;
`;