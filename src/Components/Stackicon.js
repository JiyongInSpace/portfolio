import styled from 'styled-components';

const Img = styled.img`
    margin-right: 10px;
`;


export default ({data}) => {
    return (
        <Img src={`https://img.shields.io/badge/${data.name}-${data.bgcolor}?style=for-the-badge&logo=${data.icon}&logoColor=${data.fontcolor}`}/>
    )
};