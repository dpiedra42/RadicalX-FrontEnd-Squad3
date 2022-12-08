import styled from "@emotion/styled";
import { useState } from "react";

// components
import HeaderBox from '../components/reusable/HeaderBox';
import ProgressBar from '../components/reusable/ProgressBar';
import SurveyFormSection from "../components/Surveys/SurveyFormSection";
import SurveyListNames from "../components/Surveys/SurveyListNames";

export default function Surveys() {
    const SurveyName = ['Survey 1', 'Survey 2'];
    const [toggle, setToggle] = useState('Survey 1');
    // const [surveyValues, setSurveyValues] = useState({
    //     Survey1: [],
    //     Survey2: []
    // });
    
    return (
        <SurveysContainer>
            <HeaderBox/>
            <ProgressBar name='Surveys'/>
            <SurveyBoxes>
                <SurveyListNames toggle={toggle} toggleFunction={setToggle} SurveyName={SurveyName}/>
                <SurveyFormSection toggle={toggle}/>
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