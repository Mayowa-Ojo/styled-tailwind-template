import React, { useContext, useState } from 'react';
import tw from "twin.macro";
import { Link } from "react-router-dom";

import { FormInput, FormInputBox, FormLabel, FormWrapper, GoogleButton, TwitterButton } from "./styles";
import { Container, Button, Divider, FlexBox, Text } from "../../components";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg"
import { ReactComponent as GoogleIcon } from "../../assets/svg/google.svg"
import { StoreContext } from '../../store';
import { actions } from '../../store/actions';

const Login = () => {
   const context = useContext(StoreContext);
   const [state, dispatch] = context;
   const [inputs, setInputs] = useState({ email: "", password: ""});

   const handleLogin = () => {
      const payload = {
         email: inputs.email,
         password: inputs.password
      }

      dispatch({ type: actions.USER_LOGIN, payload });
      console.log("logged in...")
   }

   const handleChange = (e) => {
      setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
   }

   return (
      <FlexBox css={[tw`w-full h-screen flex`]}>

         <FlexBox isCol css={[tw`w-3/5 h-full relative`]}>
            <Text css={[tw`absolute top-0 right-0 mr-4 mt-4`]}>Not a member? 
               <Link css={[tw`text-indigo-400`]} to="#"> Sign Up now</Link>
            </Text>
            <FormWrapper>
            <Text css={[tw`text-2xl font-bold`]}>Sign in to your account</Text>

            <FlexBox css={[tw`justify-start mt-6`]}>
               <GoogleButton>
                  <GoogleIcon css={[tw`mr-2`]} />
                  Sign in with Google
               </GoogleButton>
               <TwitterButton>
                  <TwitterIcon css={[tw`w-4 h-4 fill-current text-gray-600`]} />
               </TwitterButton>
            </FlexBox>

            <FlexBox css={[tw`justify-start mt-10`]}>
               <Divider />
               <Text css={[tw`mx-8`]}>Or</Text>
               <Divider />
            </FlexBox>

            <FlexBox isCol css={[tw`mt-10 items-start`]}>
               <Container css={[tw`w-full`]}>
                  <FormLabel htmlFor="email">Username or Email</FormLabel>
                  <FormInputBox>
                     <FormInput id="email" placeholder="" name="email" value={inputs.email} onChange={handleChange}/>
                  </FormInputBox>
               </Container>
               <Container css={[tw`w-full mt-6`]}>
                  <Container as="span" css={[tw`inline-flex items-center justify-between w-full`]}>
                     <FormLabel htmlFor="password">Password</FormLabel>
                     <Link to="#" css={[tw`text-xs text-gray-500 font-medium`]}>Forgot password?</Link>
                  </Container>
                  <FormInputBox>
                     <FormInput id="password" placeholder="" name="password" value={inputs.password} onChange={handleChange}/>
                  </FormInputBox>
               </Container>
               <Button css={[tw`font-semibold mt-6 bg-indigo-400 px-10 py-2 rounded-md`]} onClick={handleLogin}>Sign In</Button>
            </FlexBox>
            </FormWrapper>
         </FlexBox>
      </FlexBox>
   )
}

export default Login
