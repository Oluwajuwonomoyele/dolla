import React from "react";
import { Button } from "../button.style";
import { InfoContainer, InfoSection, Row, Col1, Lead, Heading, Subtitle, Img, Col2, TextWrapper } from "./info.style";

const Info = ({lightBg, id, lead, imgStart, lightText, heading, darkText, description, buttonLabel, img, alt, primary, dark}) => {
    return ( 
        <>
            <InfoSection lightBg={ lightBg } id={id} >
                <InfoContainer>
                    <Row imgStart={ imgStart }>
                        <Col1>
                            <TextWrapper>
                                <Lead>{ lead }</Lead>
                                <Heading lightText={ lightText }>{ heading }</Heading>
                                <Subtitle darkText={ darkText }>{ description }</Subtitle>
                                <Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary}
                                    dark={dark}
                                >{ buttonLabel}</Button>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <Img src={ img } alt={ alt } />
                        </Col2>
                    </Row>
                </InfoContainer>
            </InfoSection>
        </>
     );
}
 
export default Info;