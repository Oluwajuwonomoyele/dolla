import React from "react";
import { Container, FormWrapper, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from "./signin.style";

const SignIn = () => {
    return ( 
        <>
            <Container>
                <FormWrapper>
                    <Icon to='/'>dolla</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' placeholder="Enter your email address here" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' placeholder="Password" required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password?</Text>
                        </Form>
                    </FormContent>
                </FormWrapper>
            </Container>
        </>
     );
}
 
export default SignIn;