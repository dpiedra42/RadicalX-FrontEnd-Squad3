import React, {} from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/RadicalXLogo.png'

const Login = () => {
    return (
        <GridContainer>
            <Grid1/>
            <Grid2>
                <LogoContainer>
                    <LogoImg src={Logo} alt="Logo"/>
                </LogoContainer>
                <div>
                    <LoginTitle>Login</LoginTitle>
                    <form>
                        <LoginInput type="text" name="Email" placeholder='Email'/>
                        <LoginInput type="text" name="Password" placeholder='Password'/>
                        <p>Remember me</p>
                        <ForgotText>Forgot password?</ForgotText>
                        <SubmitInput type="submit" value="Login" />
                    </form>
                </div>
            </Grid2>
        </GridContainer>
    );
};

const GridContainer = styled.div`
    display: inline-grid;
    width: 100%;
    grid-template-columns: 50vw 50vw;
    height: 100vh;
    grid-template-rows: auto;
`
const Grid1 = styled.div`
    background-color: #7041ec;
`
const Grid2 = styled.div`
    background-color: white;
    display: grid;
    grid-row: auto auto;
    align-items: center;
    justify-content: center;
`
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
`
const LogoImg = styled.img`
    position: absolute;
    top: 77px;
`
const LoginTitle = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.4px;
`
const LoginInput = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 16px;
    width: 360px;
    height: 48px;
    background: #F5F5F7;
    border: 1px solid #CECECE;
    border-radius: 16px;
`
const ForgotText = styled.p`
    color: #7041ec;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`
const SubmitInput = styled.input`
    align-items: center;
    color: white;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    width: 360px;
    height: 48px;
    background: #793EF5;
    border-radius: 16px;
    border: none;
`

export default Login;