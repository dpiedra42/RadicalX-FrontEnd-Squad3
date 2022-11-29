import styled from "@emotion/styled";
import { useState } from "react";

import ImageIcon from '../../assets/image-icon.png';
import Profile from '../../assets/profile2.png';
import Link from '../../assets/link.png';
import SMS from '../../assets/sms-purple.png';


export default function MentorDetails({ modifySectionValue, value}) {
    const [nameInput, SetNameInput] = useState('')
    const [emailInput, SetEmailInput] = useState('')
    const [linkInput, SetLinkInput] = useState('')

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(nameInput, emailInput)
    //     if (!value.includes(nameInput))
    //         modifySectionValue([...value, nameInput]);
    //     if (!value.includes(emailInput))
    //         modifySectionValue([...value, emailInput]);

    // };

    return(
        <MentorContainer>
            <p>Mentor Details</p>
            <MentorPicture>
                <img src={ImageIcon} alt='Icon'/>
            </MentorPicture>
            <UserEmailContainer>
                <ProfileIcon src={Profile} alt='user icon'></ProfileIcon>
                <input 
                    type="text" 
                    name="Mentor Name" 
                    placeholder='Name'
                    value={nameInput}
                    onChange={(e) => SetNameInput(e.target.value)}
                    required
                />
                <EmailIcon src={SMS} alt='email icon'></EmailIcon>
                <input 
                    type="text" 
                    name="Email Address" 
                    placeholder='Email address' 
                    value={emailInput}
                    onChange={(e) => SetEmailInput(e.target.value)}
                    required
                />
            </UserEmailContainer>
            <LinkContainer>
                <img src={Link} alt='link icon'></img>
                <input 
                    type="text" 
                    name="Linkedin URL" 
                    placeholder='LinkedIn URL (optional)'
                    value={linkInput}
                    onChange={(e) => SetLinkInput(e.target.value)}
                />
            </LinkContainer>
        </MentorContainer>
    )
}

const MentorContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;  

    p {
        font-family: 'Space Grotesk';
        font-weight: 500;
        font-size: 24px;
        line-height: 18px;
        color: #333333;
    }
`
const MentorPicture = styled.div`
    width: 80px;
    height: 80px;
    background: #E2E6EB;
    border-radius: 20px;

    img{
        position: relative;
        top: 58px;
        left: 57px;
        width: 28px;
        height: 28px;
    }
`
const UserEmailContainer = styled.div`
    padding-top: 24px;
    display: flex;
    position: relative;
    align-items: center;
    gap: 24px;

    input {
        width: 50%;
        height: 46px;
        padding-left: 50px;
        border: 1px solid #CECECE;
        border-radius: 14px;

        font-family: 'Space Grotesk', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.3px;
    }
`
const ProfileIcon = styled.img`
    height: 24px;
    width: 24px;

    position: absolute;
    left: 15px;
`
const EmailIcon = styled.img`
    height: 24px;
    width: 24px;

    position: absolute;
    right: 265px;
`
const LinkContainer = styled.div`
    padding-top: 24px;
    display: flex;
    position: relative;
    align-items: center;
    gap: 24px;

    input {
        width: 100%;
        height: 46px;
        padding-left: 50px;
        border: 1px solid #CECECE;
        border-radius: 14px;

        font-family: 'Space Grotesk', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.3px;
    }
    img{
        position: absolute;
        left: 15px;
        height: 24px;
        width: 24px;
    }
`