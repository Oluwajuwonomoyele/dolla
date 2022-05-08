import React, { useState } from "react";
import { Button } from "../button.style";
import video from '../../video/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight } from "./hero.style";


const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return ( 
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted type='video/mp4' src={ video } />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment... </HeroP>
                <Button to='signup' onMouseEnter={ onHover} onMouseLeave={ onHover } primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Get Started { hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroContent>
        </HeroContainer>
     );
}
 
export default Hero;
