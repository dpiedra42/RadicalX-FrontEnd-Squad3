import styled from "@emotion/styled";
import { useState } from "react";

// Images
import Menu from '../assets/menu.png';
import RightMenu from '../assets/right-menu.png';
import Add from '../assets/add2.png';
import Check from '../assets/tick-circle.png';

// Components
import HeaderBox from "../components/CreateInternship/HeaderBox";
import ProgressBar from "../components/CreateInternship/ProgressBar";
import Category from '../components/CreateInternship/Category';
import Description from "../components/CreateInternship/Description";
import Location from "../components/CreateInternship/Location";
import Benefits from "../components/CreateInternship/Benefits";
// import Roles from "../components/CreateInternship/Roles";


export default function CreateInternship() {
    const [toggledSection, setToggledSection] = useState(undefined)
    const [sectionValues, setSectionValues] = useState({
        category: [],
        description: '',
        location: '',
        benefits: '',
        introVideo: '',
    });
    
    const FormSectionKeys = Object.keys(formSections);
    const ToggledSectionComponent = formSections[toggledSection] ? formSections[toggledSection].component : null ;
    
    function handleClick(name) {
        const imgsbox = document.getElementById('imgbox');
        var imgs = imgsbox.getElementsByTagName('img');
        var len = imgs.length;
        
        if (name === 'description' && sectionValues['category'].length > 0 && len === 0)
        {
            const img = document.createElement("img");
            img.src = Check;
            img.alt = "Check Icon";
            const src = document.getElementById('imgbox');
            src.appendChild(img);
        }

        if (formSections[name].component)
            setToggledSection(name);
    };

    function getModifySectionValueFor(sectionName) {
        return function modifySectionValue(newValue) {
            const newSectionValues = { ...sectionValues };
            newSectionValues[sectionName] = newValue;
            setSectionValues(newSectionValues);
        }
    };

    return (
        <CreateContainer>
            <HeaderBox/>
            <ProgressBar/>
            <FormData>
                <OptionsList>
                    {FormSectionKeys.map((sectionKey) => (
                        <OptionSection key={sectionKey}>
                            <img src={Menu} alt='menu logo'/>
                            <SectionName onClick={() => handleClick(sectionKey)} className={sectionKey === toggledSection ? 'optionToggled' : null}>
                                <div id='imgbox'>
                                    <p>{formSections[sectionKey].name}</p>
                                </div>
                                <img src={RightMenu} alt='Right menu arrow'/>
                            </SectionName>
                        </OptionSection>
                    ))}
                    <AddOption>
                        <img src={Add} alt='Add Icon'/>
                        Add More
                    </AddOption>
                </OptionsList>
                <OptionDescription>
                    {
                        toggledSection ? 
                            <ToggledSectionComponent 
                                modifySectionValue={getModifySectionValueFor(toggledSection)}
                                value={sectionValues[toggledSection]}
                            /> 
                        : 
                            null
                    }
                </OptionDescription>
            </FormData>
        </CreateContainer>
    )
}

// Constants
const formSections = {
    category: {
        name: 'Category',
        component: Category
    },
    description: {
        name: 'Description',
        component: Description
    },
    location: {
        name: 'Location',
        component: Location
    },
    benefits: {
        name: 'Benefits',
        component: Benefits
    },
    introVideo: {
        name: 'Intro Video',
        component: null
    },
    mentorDetails: {
        name: 'Mentor Details',
        component: null
    },
    recRoles: {
        name: 'Recommended Roles',
        component: null
    },
    links: {
        name: 'Web Links & Resources',
        component: null
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
const OptionSection = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    width: 100%;

    img {
        width: 24px;
        height: 24px;
    }

`
const SectionName = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    color: #333333;
    background-color: white;
    border: 1px solid #E0E0E0;
    border-radius: 16px;
    padding: 0 20px 0 20px;
    cursor: pointer;
    transition: 0.5s;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }

    &.optionToggled {
        border: 1px solid #793EF5;
        box-shadow: 0px 24px 34px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
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