import styled from "@emotion/styled";
import { useState } from "react";

import HeaderBox from '../components/reusable/HeaderBox';
import ProgressBar from '../components/reusable/ProgressBar';

import Menu from '../assets/menu.png';
import AddItem from '../assets/additem.png';
import RightMenu from '../assets/right-menu.png';

const SurveyName = ['Survey 1', 'Survey 2'];

export default function Surveys() {
    const [surveyValues, setSurveyValues] = useState({
        Survey1: [],
        Survey2: []
    });
    
    return (
        <SurveysContainer>
            <HeaderBox/>
            <ProgressBar name='Surveys'/>
            <SurveyBoxes>
                <SurveyListNames>
                    {SurveyName.map((name) => (
                        <SurveyListItem>
                            <MenuIcon>
                                <img 
                                    src={Menu} 
                                    alt='menu logo'
                                />
                            </MenuIcon>
                            <NameImgBox>
                                <p>{name}</p>
                                <img 
                                    src={RightMenu} 
                                    alt='Right menu arrow'
                                />
                            </NameImgBox>
                        </SurveyListItem>
                    ))}
                    <AddOption>
                        <img src={AddItem} alt='Add Icon'/>
                        Add More
                    </AddOption>
                </SurveyListNames>
                <SurveyFormSection>

                </SurveyFormSection>
            </SurveyBoxes>
        </SurveysContainer>
    )
}

const SurveysContainer = styled.div`
    background-color: #F1F4F8;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 1400px;
    height: 100vh;
    overflow: auto;
`
const SurveyBoxes = styled.div`
    display: flex;
    flex-direction: row;
    width: calc(100% - 46px);
    margin-top: 34px;
    gap: 23px;
    padding-bottom: 24px;
`
const SurveyListNames = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
`
const SurveyListItem = styled.li`
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
const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const NameImgBox = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid #E0E0E0;
    border-radius: 16px;
    padding: 0 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    color: #333333;
    
    cursor: pointer;

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
const SurveyFormSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 20px;
    padding-bottom: 24px;
`