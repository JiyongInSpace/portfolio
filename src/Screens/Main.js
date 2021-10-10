import React, { useRef } from 'react';
import Header from '../Components/Header';
import About from './About';
import Contact from './Contact';
import Greeting from './Greeting';
import Project from './Project';
import Footer from '../Components/Footer';


export default () => {
    const tabRef = useRef([]);
    const scrollTo = (num) => {
        tabRef.current[num].scrollIntoView({behavior: "smooth"});
    }

    return (
    <>
        <Header handleScroll={scrollTo}/>
        <Greeting tab={el => (tabRef.current[0] = el)}/>
        <About tab={el => (tabRef.current[1] = el)}/>
        <Project tab={el => (tabRef.current[2] = el)}/>
        <Contact tab={el => (tabRef.current[3] = el)}/>
        <Footer handleScroll={scrollTo}/>
    </>
)};