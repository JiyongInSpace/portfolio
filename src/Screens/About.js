import React from 'react';
import styled from 'styled-components';
import skills from '../assets/skills';

export default ({tab}) => {
    return (
    <Background ref={tab}>
        <Container>
            <Title>ABOUT</Title>
            <Subtitle>제 상태는 현재진행형입니다!</Subtitle>
            <Section>
                <Tab>
                    <TabTitle>
                        <TabIcon className="fas fa-user-astronaut"></TabIcon>
                        Who Is He?
                    </TabTitle>
                    <WhoAmI></WhoAmI>
                    <WhoAmIName>
                    김지용
                    </WhoAmIName>
                    <WhoAmITxt>
                        
                    개발자가 되고 싶어 회사를 그만두고 개발을 공부하고 있습니다. 결코 빠른 시작이 아닌 걸 잘 알기에 남들보다 더 노력하려고 합니다.
                    </WhoAmITxt>
                    <TabContent>
                        <AboutMeIcon>
                        <Icon className="fas fa-dumbbell"></Icon>
                        <span>DILIGENT</span>
                        <span>초심을 잃지 않는 개발자입니다. </span>
                        </AboutMeIcon>
                        <AboutMeIcon>
                        <Icon className="fas fa-seedling"></Icon>
                        <span>GROWING</span>
                        <span>하루하루 성장하는 개발자입니다.</span>
                        </AboutMeIcon>
                        <AboutMeIcon>
                        <Icon className="far fa-laugh-squint"></Icon>
                        <span>ENJOYING</span>
                        <span>코딩을 즐기는 개발자입니다. </span>
                        </AboutMeIcon>
                    </TabContent>
                    
                </Tab>
                <Tab>
                    <TabTitle>
                        <TabIcon className="fas fa-laptop-code"></TabIcon>
                        Skills
                    </TabTitle>
                    <TabContent>
                        <Image img={skills.html_logo}></Image>
                        <Image img={skills.css_logo}></Image>
                        <Image img={skills.js_logo}></Image>
                        <Image img={skills.react_logo}></Image>
                    </TabContent>
                </Tab>
                <Tab>
                    <TabTitle>
                        <TabIcon className="fas fa-book-reader"></TabIcon>
                        Education
                    </TabTitle>
                    <ul>
                        <List>
                            <span>📘그린컴퓨터아카데미(2021.05~)</span>
                            <Listdetail>
                                (디지털컨버전스)UI/UX 디자인 웹퍼블리셔&프론트엔드 개발자 양성과정을 수료하였습니다. 
                            </Listdetail>
                        </List>
                        <List>
                            <span>📙네트워크관리사 2급</span>
                            <Listdetail>
                                웹 서비스의 과정을 좀 더 자세히 이해하기 위해 ICQA 주관 국가공인자격증을 취득하였습니다.
                            </Listdetail>
                        </List>
                        <List>
                            <span>📗컴퓨터활용능력 2급</span>
                            <Listdetail>
                            한글 및 MS Office를 사용한 문서, 보고서 작성 등 관련 업무를 수행한 적이 있습니다. 현재 1급을 공부중입니다.
                            </Listdetail>
                        </List>
                    </ul>
                </Tab>
            </Section>
        </Container>
    </Background>
)}


const Background = styled.div`
    width: 100%;
    padding: 100px 0;
`;
const Container = styled.article`
    width: 1180px;
    margin: 0 auto;
    padding: 20px;
    @media ${props => props.theme.desktop}{
        width: 100%;
    }
`;
const Title = styled.h2`
    text-align: center;
    margin-bottom: 30px;
    font-size: 4em;
    font-weight: 800;
    @media ${props => props.theme.tablet}{font-size: 3em;}
    @media ${props => props.theme.mobile}{font-size: 2em;}
`;
const Subtitle = styled.p`
    text-align: center;
    color: gray;
`
const Section = styled.section`
    margin-top: 70px;
    display: grid;
    grid-template-rows: 3fr 4fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    &>div:first-child{
        grid-column: 1 / 2;
	    grid-row: 1 / 3;
    }
    @media ${props => props.theme.tabletL}{
        display: flex;
        flex-direction: column;
    }
    @media ${props => props.theme.mobile}{
        margin-top: 20px;
    }
`
const Tab = styled.div`
    padding: 30px ;
    border-radius: 10px;
    box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media ${props => props.theme.mobile}{
        padding: 15px;
    }
`;
const TabTitle = styled.h4`
    font-size: 2.2em;
    font-weight: 700;
    margin-bottom: 30px;
    @media ${props => props.theme.mobile}{
        letter-spacing: -0.05em;
        font-size: 2em;
    }
`;
const TabIcon = styled.i`
    margin-right: 10px;
`;
const TabContent = styled.div`
    line-height: 1.5em;
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
    
`;
const WhoAmI = styled.div`
    width: 250px; height: 250px;
    margin: 0 auto;
    border-radius: 50%;
    background-color: lightgray;
    @media ${props => props.theme.mobile}{
        width: 60vw; height: 60vw;
    }
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid;
`;
const WhoAmIName = styled.h3`
    font-size: 1.5em;
    font-weight: 600;
    margin: 10px;
`;
const WhoAmITxt = styled.div`
    width: 80%;
    margin: 5px 0 20px 0;
    font-size: 0.9em;
    line-height: 1.4em;
`;
const Icon = styled.i`
    font-size: 5.5em;
`;
const List = styled.h4`
    font-size: 1.1em;
    margin-bottom: 15px;
    span{font-weight: bold;}
    @media ${props => props.theme.mobile}{
        text-align: center;
    }
`;
const Listdetail = styled.p`
    margin-top: 5px;
    color: gray;
    font-size: 0.9em;
    line-height: 1.2em;
    @media ${props => props.theme.mobile}{
        margin-bottom: 20px;
    }
`
const Image = styled.div`
    width: 25%; height: 130px;
    background-image: ${props => `url(${props.img})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @media ${props => props.theme.mobile}{
        width: 50%; height: 110px;
        margin-bottom: 20px;
    }
`;

const AboutMeIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    &>span:nth-child(2){
        font-size: 1.5em;
        font-weight: 600;
        margin: 10px;
    }
    &>span:nth-child(3){
        font-size: 0.9em;
        letter-spacing: -0.05em;
    }

    @media ${props => props.theme.mobile}{
        width: 100%;
        margin-top: 25px;
        &>span:nth-child(2){
            font-size: 1.3em;
            margin: 0px;
        }
    }
`