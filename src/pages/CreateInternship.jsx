import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import LeftArrow from '../assets/arrow-left.png';
import RightArrow from '../assets/arrow-right.png';
import Unticked from '../assets/untick-circle.png';
import Menu from '../assets/menu.png';
import RightMenu from '../assets/right-menu.png';
import Add from '../assets/add2.png';

import Category from '../components/CreateInternship/Category';
import Description from "../components/CreateInternship/Description";

export default function CreateInternship() {
    const [toggledSection, setToggledSection] = useState(undefined)
    const FormSectionKeys = Object.keys(formSections);
    const navigate = useNavigate();

    const ToggledSectionComponent = formSections[toggledSection]?.component || formSections?.category.component;

    function handleClick(name) {
        setToggledSection(name);
    }
    
    return (
        <CreateContainer>
            <HeaderBox>
                <BackButton onClick={() => navigate(-1)}>
                    <img src={LeftArrow} alt='Left Arrow Icon'/>
                    Back
                </BackButton>
                <HeaderTitle>
                    Add New Internship
                </HeaderTitle>
                <NextButton>
                    Continue To Next Step
                    <img src={RightArrow} alt='Right Arrow Icon'/>
                </NextButton>
            </HeaderBox>
            <ProgressBar>
                <ul>
                    <img src={Unticked} alt='Unticked circle icon'/>
                    <li>Internship Description</li>
                </ul>
                <ul>
                    <img 
                        style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                        src={Unticked} 
                        alt='Unticked circle icon'
                    />
                    <li style={{opacity: '0.3'}}>Internship Guide</li>
                </ul>
                <ul>
                    <img 
                        style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                        src={Unticked} 
                        alt='Unticked circle icon'
                    />
                    <li style={{opacity: '0.3'}}>Surveys</li>
                </ul>
                <ul>
                    <img 
                        style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                        src={Unticked} 
                        alt='Unticked circle icon'
                    />
                    <li style={{opacity: '0.3'}}>Settings</li>
                </ul>
            </ProgressBar>
            <FormData>
                <OptionsList>
                    {FormSectionKeys.map((sectionKey) => (
                        <Option key={sectionKey} className={sectionKey === toggledSection ? 'optionToggled' : null}>
                            <img src={Menu} alt='menu logo'/>
                            <button onClick={() => handleClick(sectionKey)}>
                                {formSections[sectionKey].name}
                                <img src={RightMenu} alt='Right menu arrow'/>
                            </button>
                        </Option>
                    ))}
                    <AddOption>
                        <img src={Add} alt='Add Icon'/>
                        Add More
                    </AddOption>
                </OptionsList>
                <OptionDescription>
                    {toggledSection ? <ToggledSectionComponent/> : null}
                </OptionDescription>
            </FormData>
        </CreateContainer>
    )
}

// Constants

const formSections = {
    category: {
        name: 'Category',
        component: Category,
    },
    description: {
        name: 'Description',
        component: Description,
    },
    location: {
        name: 'Location',
        component: null,
    },
    benefits: {
        name: 'Benefits',
        component: null,
    },
    introVideo: {
        name: 'Intro Video',
        component: null,
    },
    mentorDetails: {
        name: 'Mentor Details',
        component: null,
    },
    recRoles: {
        name: 'Recommended Roles',
        component: null,
    },
    links: {
        name: 'Links',
        component: null,
    },
}

// Styles

const CreateContainer = styled.div`
    background-color: #F1F4F8;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 1400px;
`
const HeaderBox = styled.div`
    width: calc(100% - 46px);
    height: 80px;
    margin-top: 20px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
`
const HeaderTitle = styled.h1`
    font-size: 28px;
    color: #1E1E1E;
    font-weight: 500;
`
const BackButton = styled.button`
    background-color: white;
    border: none;
    font-family: 'Space Grotesk';
    font-size: 18px;
    letter-spacing: 0.3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
    gap: 8px;
    cursor: pointer;

    img {
        width: 28px;
        height: 28px;  
    }
`
const NextButton = styled.button`
    width: 219px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E2E6EB;
    border-radius: 12px;
    border: none;
    margin-right: 24px;
    font-family: 'Space Grotesk';
    font-size: 14px;
    letter-spacing: 0.4px;
    color: #828282;
    gap: 8px;

    img {
        width: 20px;
        height: 20px; 
    }
`
const ProgressBar = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: calc(100% - 46px);
    margin-top: 20px;
    border: solid #D0D4DA 1px;
    border-radius: 20px;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        letter-spacing: 0.3px;
        gap: 8px;
        padding: 0 24px 0 24px;
    }
    img{
        width: 24px;
        height: 24px;
    }
`
const FormData = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 46px);
    margin-top: 34px;
    gap: 23px;
`
const OptionsList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
`
const Option = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 64px;

    &.optionToggled {
        background: blue;
    }

    button {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 18px;
        color: #333333;
        background-color: white;
        border: 1px solid #E0E0E0;
        border-radius: 16px;
        padding: 20px;
        cursor: pointer;
    }

    img {
        width: 24px;
        height: 24px;
    }

`
const AddOption = styled.button`
    width: calc(100% - 52px);
    margin: 0 0 73px 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #333333;
    height: 56px;
    color: #793EF5;
    border: dashed 1px #793EF5;
    border-radius: 12px;
    gap: 12px;
    cursor: pointer;
    background-color: transparent;
    
    img{
        width: 20px;
        height: 20px;
    }
`
const OptionDescription = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`