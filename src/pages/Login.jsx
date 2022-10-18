import React, {} from 'react';
import styled from '@emotion/styled';
import Logo from '../assets/RadicalXLogo.png'

const Login = () => {
    return (
        <GridContainer>
            <Grid1/>
            <Grid2>
                <div>
                    <LogoImg src={Logo} alt="Logo"/>
                </div>
                <div>
                    <h1>Login</h1>
                    <form>
                        <input type="text" name="Email" placeholder='Email'></input>
                        <input type="text" name="Password" placeholder='Password'></input>
                        <p>Remember me</p>
                        <p>Forgot password?</p>
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </Grid2>
        </GridContainer>
    );
};

const GridContainer = styled.div`
    display: inline-grid;
    width: 100%;
    grid-template-columns: auto auto;
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
const LogoImg = styled.img`
    
`


export default Login;