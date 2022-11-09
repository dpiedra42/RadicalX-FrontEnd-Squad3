import styled from "@emotion/styled";
import { useState } from "react";

import Menu from '../assets/menu.png';
import RightMenu from '../assets/right-menu.png';
import Add from '../assets/add2.png';

import HeaderBox from "../components/CreateInternship/HeaderBox";
import ProgressBar from "../components/CreateInternship/ProgressBar";
import Category from '../components/CreateInternship/Category';
import Description from "../components/CreateInternship/Description";

export default function CreateInternship() {
    const [toggledSection, setToggledSection] = useState(undefined)
    const FormSectionKeys = Object.keys(formSections);

    const ToggledSectionComponent = formSections[toggledSection]?.component || formSections?.category.component;

    function handleClick(name) {
        setToggledSection(name);
    }

    return (
        <CreateContainer>
            <HeaderBox/>
            <ProgressBar/>
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
       button {
            border: 1px solid #793EF5;
            box-shadow: 0px 24px 34px rgba(0, 0, 0, 0.12);
            border-radius: 16px;
        }
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
        transition: 0.5s;
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