import React from "react";
import icon1 from '../../images/svg1.svg'
import icon2 from '../../images/svg4.svg'
import icon3 from '../../images/svg5.svg'
import { ServicesContainer, ServicesH1, ServicesCards, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./services.style";

const Services = () => {
    return ( 
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesCards>
                    <ServicesCard>
                        <ServicesIcon src={icon1} />
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>You can access our platform online anywhere in the world</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>Unlock our social membership card that returns 5% cash back</ServicesP>
                    </ServicesCard>
                </ServicesCards>
            </ServicesContainer>
        </>
     );
}
 

export default Services;