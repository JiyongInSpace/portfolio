import React, { useRef, useState } from 'react';
import Header from '../Components/Header';
import About from './About';
import Contact from './Contact';
import Greeting from './Greeting';
import Project from './Project';
import Footer from '../Components/Footer';
import GuestBook from './GuestBook';

const useLockScroll = () => {
    const [isLocked, setIsLocked] = useState(false);

    const lockScroll = () => {
        setIsLocked(true);
        document.body.style.overflow = "hidden";
    };
    const unlockScroll = () => {
        setIsLocked(false);
        document.body.style.overflow = "scroll";
    };
    return [isLocked, {lockScroll, unlockScroll}];
}

export default ({messageRepository}) => {
    const tabRef = useRef([]);
    const scrollTo = (num) => {
        tabRef.current[num].scrollIntoView({behavior: "smooth"});
    }
    const [isLocked, {lockScroll, unlockScroll}] = useLockScroll();
    
    return (
    <>
        <Header handleScroll={scrollTo}/>
        <Greeting tab={el => (tabRef.current[0] = el)}/>
        <About tab={el => (tabRef.current[1] = el)}/>
        <Project 
            tab={el => (tabRef.current[2] = el)} 
            lock={lockScroll}
            unlock={unlockScroll}/>
        <Contact tab={el => (tabRef.current[3] = el)}/>
        <GuestBook tab={el => (tabRef.current[4] = el)} messageRepository={messageRepository}/>
        <Footer handleScroll={scrollTo}/>
    </>
)};