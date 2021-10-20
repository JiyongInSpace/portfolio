import styled from "styled-components";
import paper from '../assets/paper.jpg';


export default () => <Container />;

const Container = styled.div`
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url(${paper});
    background-position: center;
    background-size: 160%;
    z-index: 10;
    mix-blend-mode: multiply;
    border-radius: 10px;
`;