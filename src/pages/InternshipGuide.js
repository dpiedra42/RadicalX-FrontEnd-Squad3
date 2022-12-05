import { useState } from "react";
import styled from "@emotion/styled";

import HeaderBox from "../components/reusable/HeaderBox";
import ProgressBar from "../components/reusable/ProgressBar";
import SectionNamesList from "../components/InternshipGuide/SectionNamesList";

import Video from '../assets/document-upload.png';

export default function InternshipGuide() {
    const [formValues, setFormValues] = useState({
        Overview: {Brief: '', Requirements: '', Milestones: ''},
        Schedule: {Duration: '', Timeline: '', Deliverables: ''},
        Resources: {Curated: '', Events: ''}
    })
    const [toggle, setToggle] = useState('Overview');
    const FormSectionNames = Object.keys(formValues);

    function getArray(section) {
        switch(section)
        {
            case 'Overview':
                return(Object.keys(formValues.Overview));
            case 'Schedule':
                return(Object.keys(formValues.Schedule));
            case 'Resources':
                return(Object.keys(formValues.Resources));
            default:
                return null;
        }
    };

    // function getModifySectionValueFor(sectionName) {
    //     return function modifySectionValue(newValue, type) {
    //         const newFormValues = { ...formValues };

    //         newFormValues[sectionName].type = newValue;
    //         setFormValues(newFormValues);
    //     }
    // };

    // function handleDrag(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if (e.type === 'dragenter' || e.type === 'dragover')
    //         setDragActive(true);
    //     else if (e.type === "dragleave")
    //         setDragActive(false);
    // }

    // function handleDrop(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setDragActive(false);
    //     if (e.dataTransfer.files){
    //         modifySectionValue(e.dataTransfer.files[0].name.toString())
    //     }
    // }

    return (
        <GuideContainer>
            <HeaderBox/>
            <ProgressBar name='Internship Guide'/>
            <SectionsBox>
                <SectionNamesList 
                    names={FormSectionNames}
                    toggleFunction={setToggle}
                    getArray = {getArray}
                />
                <SectionForms>
                    {getArray(toggle).map((option) => (
                        <Section>
                            <OptionTitle>{option}</OptionTitle>
                            <DescriptionForm>
                                <input 
                                    type="text" 
                                    name="Description" 
                                    placeholder='Description'
                                />
                            </DescriptionForm>
                            <DragForm>
                                <input
                                    type='file'
                                    multiple={false}
                                />
                                <DragBox>
                                    <p>Drag n drop to upload your video</p>
                                    <img src={Video} alt='video icon'/>
                                </DragBox>
                            </DragForm>
                        </Section>
                    ))}
                </SectionForms>
            </SectionsBox>
        </GuideContainer>
    )
}

const GuideContainer = styled.div`
    background-color: #F1F4F8;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 1400px;
`
const SectionsBox = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 46px);
    margin-top: 34px;
    gap: 23px;
`
const SectionForms = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    border-radius: 20px;
`
const Section = styled.div`
    padding: 24px; 
    width: calc(100% - 69px);
`
const OptionTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-bottom: 16px;
`
const DescriptionForm = styled.form`
    padding-bottom: 16px;

    input {
        background-color: #F1F4F8;
        font-family: 'Space Grotesk';
        font-size: 16px;
        border: 1px solid #CECECE;
        border-radius: 16px;
        height: 48px;
        width: 100%;
        padding-left: 16px;
    }
`
const DragForm = styled.form`
    input {
        display: none;
    }
`
const DragBox = styled.div `
    height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px dashed #B2B6BC;
    border-radius: 12px;
    color: #778188;

    p{
        font-weight: 400;
        font-size: 14px;
    }

    img {
        width: 20px;
        height: 20px;
    }
`