import React, { useState} from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Info from "../components/info";
import { infoObjOne, infoObjThree, infoObjTwo } from "../components/info/data";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Sidebar from "../components/sidebar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (  
        <>
            <Sidebar isOpen={ isOpen } toggle={ toggle }/>
            <Navbar toggle={ toggle }/>
            <Hero />
            <Info {...infoObjOne} />
            <Info {...infoObjTwo} />
            <Services />
            <Info {...infoObjThree} />
            <Footer />
            
        </>
    );
}
 
export default Home;