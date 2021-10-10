import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../Components/ProjectCard';
import data from '../db/data.json';
import projectImg from '../assets/projectImg';

export default ({tab}) => {
    return(
        <Background ref={tab}>
            <Container>
                <Title>PROJECT</Title>
                <Subtitle>그동안 공부를 하면서 만들어온 발자취들입니다.
                        <br/>모든 사이트들은 계속해서 업데이트 될 예정입니다!
                </Subtitle>
                <Section>
                    {data.projects.map((project, index) => (
                        <ProjectCard
                            index={index}
                            data={project}
                            width="28%" height="350px"
                            img={projectImg}
                            type="project"
                        />
                    ))}
                </Section>
                <Section>
                    {data.practices.map((practice, index) => (
                        <ProjectCard
                            index={index+3}
                            data={practice}
                            width="200px" height="200px"
                            img={projectImg}
                            type="practice"
                        />
                    ))}
                </Section>
            </Container>
        </Background>
    )
};

const Background = styled.div`
    width: 100%;
    padding: 100px 0;
    background-color: #f5f5f5;
`;
const Container = styled.article`
    width: 1180px;
    padding: 20px;
    margin: 0 auto;
    @media ${props => props.theme.desktop}{
        width: 100%;
    }
`;
const Title = styled.h2`
    text-align: center;
    margin-bottom: 50px;
    font-size: 4em;
    font-weight: 800;
    @media ${props => props.theme.tablet}{font-size: 3em;}
    @media ${props => props.theme.mobile}{font-size: 2em;}
`;
const Subtitle = styled.p`
    text-align: center;
    color: gray;
    line-height: 1.3em;
`
const Section = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;