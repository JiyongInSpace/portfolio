import React, { useRef, useState } from 'react';
import Header from '../Components/Header';
import About from './About';
import Contact from './Contact';
import Greeting from './Greeting';
import Project from './Project';
import Footer from '../Components/Footer';
import GuestBook from './GuestBook';
import { useEffect } from 'react';


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
    const containerRef = useRef([]);
    const [currentTab, setCurrentTab] = useState("/");
    
    const scrollTo = (num) => {
        tabRef.current[num].scrollIntoView({behavior: "smooth"});
    }
    const [isLocked, {lockScroll, unlockScroll}] = useLockScroll();

    const onIntersect = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    };
    const options = { rootMargin: '10% 0px', threshold: ["0.1"] };
    useEffect(() => {
        const io = new IntersectionObserver(onIntersect, options);
        tabRef.current.forEach(current => current && io.observe(current));
        containerRef.current.forEach(current => current && io.observe(current));
        return () => io.disconnect();

    }, [tabRef]);
    useEffect(() => {
        window.addEventListener("scroll", tabNow);
        return () => window.removeEventListener("scroll", tabNow);
    }, []);
    const tabNow = (e) => {
        if(tabRef.current[4].getBoundingClientRect().top <= 10){
            setCurrentTab("/guest");
        } else if(tabRef.current[3].getBoundingClientRect().top <= 10){
            setCurrentTab("/contact");
        } else if(tabRef.current[2].getBoundingClientRect().top <= 10){
            setCurrentTab("/project");
        } else if(tabRef.current[1].getBoundingClientRect().top <= 10){
            setCurrentTab("/about");
        } else if(tabRef.current[0].getBoundingClientRect().top <= 10){
            setCurrentTab("/");
        }
    }

    return (
    <>
        <Header 
            handleScroll={scrollTo} 
            tab={currentTab}/>
        <Greeting 
            tab={el => (tabRef.current[0] = el)}
            containerTab={el => (containerRef.current[0] = el)}
            />
        <About 
            tab={el => (tabRef.current[1] = el)}  
            containerTab={el => (containerRef.current[1] = el)} 
            />
        <Project 
            tab={el => (tabRef.current[2] = el)}  
            containerTab={el => (containerRef.current[2] = el)} 
            lock={lockScroll}
            unlock={unlockScroll}
            />
        <Contact 
            tab={el => (tabRef.current[3] = el)}  
            containerTab={el => (containerRef.current[3] = el)} 
            />
        <GuestBook 
            tab={el => (tabRef.current[4] = el)}  
            containerTab={el => (containerRef.current[4] = el)} 
            messageRepository={messageRepository}
            lock={lockScroll}
            unlock={unlockScroll}
            />
        <Footer 
            handleScroll={scrollTo}/>
    </>
)};