import { useState } from "react";
import styled from "@emotion/styled";

import HeaderBox from "../components/reusable/HeaderBox";
import ProgressBar from "../components/reusable/ProgressBar";
import SectionNamesList from "../components/InternshipGuide/SectionNamesList";

// import Add from '../assets/add2.png';

export default function InternshipGuide() {
    // const [dragActive, setDragActive] = useState(false);
    const [formValues, setFormValues] = useState({
        Overview: {Brief: '', Requirements: '', Milestones: ''},
        Schedule: {Duration: '', Timeline: '', Deliverables: ''},
        Resources: {Curated: '', Events: ''}
    })
    const FormSectionNames = Object.keys(formValues);

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
                <SectionNamesList names={FormSectionNames} keys={formValues}/>
                <SectionForms>

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
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    border-radius: 20px;
`