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
                        <div>
                            <p>{option}</p>
                            <form>
                                <input 
                                    type="text" 
                                    name="Description" 
                                    placeholder='Description'
                                />
                            </form>
                            {/* <form>
                                <input
                                    type='file'
                                    multiple={false}
                                />
                                <div>
                                    <p>Drag n drop to upload your video</p>
                                    <img src={Video} alt='video icon'/>
                                </div>
                            </form> */}
                        </div>
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
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    border-radius: 20px;
`