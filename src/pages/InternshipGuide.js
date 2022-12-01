import { useState } from "react";
import styled from "@emotion/styled";

import HeaderBox from "../components/reusable/HeaderBox";
import ProgressBar from "../components/reusable/ProgressBar";

import Menu from '../assets/menu.png';
import RightMenu from '../assets/right-menu.png';
// import Add from '../assets/add2.png';
import AddItem from '../assets/additem.png';

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
                <SectionNamesList>
                    {FormSectionNames.map((name) => (
                        <ListItemSection>
                            <img src={Menu} alt='menu logo'/>
                            <NameImgBox>
                                <div id={name}>
                                    <p>{name}</p>
                                </div>
                                <img src={RightMenu} alt='Right menu arrow'/>
                            </NameImgBox>
                        </ListItemSection>
                    ))}
                    <AddOption>
                        <img src={AddItem} alt='Add Icon'/>
                        Add More
                    </AddOption>
                </SectionNamesList>
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
    height: 100%; //remove later
`
const SectionsBox = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 46px);
    /* height: 100%; //remove later */
    margin-top: 34px;
    gap: 23px;
`
const SectionNamesList = styled.ul`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;

`
const ListItemSection = styled.li`
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
const NameImgBox = styled.div`
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

`
const AddOption = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    margin: 0 0 0 48px;

    background-color: #665FEF33;
    font-size: 18px;
    color: #793EF5;

    border: solid 1px #793EF5;
    border-radius: 12px;
    gap: 12px;
    cursor: pointer;
    
    img{
        width: 20px;
        height: 20px;
    }
`
const SectionForms = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: white;
    border-radius: 20px;
`