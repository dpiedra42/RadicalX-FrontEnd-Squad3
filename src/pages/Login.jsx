import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import styled from '@emotion/styled';
import Logo from '../assets/RadicalXLogo.png';
import Email from '../assets/sms.png';
import Lock from '../assets/lock.png';
import Eye from '../assets/eye.png';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginPassword, setloginPassword] = useState('');
    const [loginEmail, setloginEmail] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        setErrorMsg('');
        e.preventDefault();
        console.debug("logging in...")
        try {
          const res = await signInWithEmailAndPassword(auth, loginEmail,loginPassword);
          console.debug(res);
          navigate('/dashboard');

        } catch (error) {
          console.debug(error.message);
          setErrorMsg(error.message);
        }
      };

    return (
        <GridContainer>
            <Grid1/>
            <Grid2>
                <LogoContainer>
                    <LogoImg src={Logo} alt="Logo"/>
                </LogoContainer>
                <div>
                    <LoginTitle>Login</LoginTitle>
                    <form onSubmit={handleLogin}>
                        <IconContainer>
                            <Icon src={Email} alt="Email Icon"/>
                            <LoginInput type="text" name="Email" placeholder='Email' 
                            onChange={(e) => {setloginEmail(e.target.value)}} required/>
                        </IconContainer>
                        <IconContainer>
                            <Icon src={Lock} alt="Lock Icon"/>
                            <LoginInput type={showPassword ? "text" : "password"} name="Password" placeholder='Password' 
                            onChange={(e) => {setloginPassword(e.target.value)}} required/>
                            <IconEye src={Eye} alt="Eye Icon" onClick={() => setShowPassword(!showPassword)}/>
                        </IconContainer>
                        <LoginOptions>
                            <p>Remember me</p>
                            <ForgotText>Forgot password?</ForgotText>
                        </LoginOptions>
                        <SubmitButton type="submit">Login</SubmitButton>
                        {errorMsg && <p style={{ maxWidth: '300px' }}>Error: {errorMsg}</p>}
                    </form>
                </div>
            </Grid2>
        </GridContainer>
    );
};

const GridContainer = styled.div`
    display: flex;
    width: 100%;
    grid-template-columns: 50vw 50vw;
    height: 100vh;
    grid-template-rows: auto;
`
const Grid1 = styled.div`
    background-color: #7041ec;
    flex: 1 1 0;

    @media screen and (max-width: 768px) {
        flex: 0 0 0;
    }
`
const Grid2 = styled.div`
    flex: 1 1 0;
    background-color: white;
    display: grid;
    grid-row: auto auto;
    align-items: center;
    justify-content: center;
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-height: 450px) {
        display: none;
    }
`
const LogoImg = styled.img`
    position: absolute;
    width: 200px;
    height: 40px;
    top: 77px;

`
const LoginTitle = styled.h1`
    width: 66px;
    height: 24px;   
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.4px;
    padding-bottom: 5px;
`
const IconContainer = styled.div`
    position:relative;
    padding-bottom:12px;
    margin:0;
`
const Icon = styled.img`
    position:absolute;
    top:14px;
    left:16px;
    width: 20px;
    height: 20px;
`
const IconEye = styled.img`
    position:absolute;
    top :14px;
    right: 16px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`
const LoginInput = styled.input`
    font-family: 'Space Grotesk';   
    box-sizing: border-box;
    width: 360px;
    height: 48px;
    background: #F5F5F7;
    border: 1px solid #CECECE;
    border-radius: 16px;
    padding-left:44px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.3px;
`
const LoginOptions = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 16px;
    line-height: 0px;
    text-align: center;
    letter-spacing: 0.4px;
    color: grey;
    padding-bottom: 18px;
`
const ForgotText = styled.p`
    color: #7041ec;
    font-weight: 500;
    font-size: 16px;
`
const SubmitButton = styled.button`
    font-family: 'Space Grotesk';
    align-items: center;
    color: white;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    width: 360px;
    height: 48px;
    background: #793EF5;
    border-radius: 16px;
    border: none;
`

export default Login;