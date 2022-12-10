import styled from "@emotion/styled";
import { useState } from "react";

// components
import HeaderBox from '../components/reusable/HeaderBox';
import ProgressBar from '../components/reusable/ProgressBar';
import SurveyFormSection from "../components/Surveys/SurveyFormSection";
import SurveyListNames from "../components/Surveys/SurveyListNames";

export default function Surveys() {
    const [surveyValues, setSurveyValues] = useState({
        Survey1: {name: 'Survey 1', val: []},
        Survey2: {name: 'Survey 2', val: []}
    });
    const names = Object.keys(surveyValues);
    const [toggle, setToggle] = useState('Survey1');

    function getModifySectionValueFor(sectionName) {
        return function modifySectionValue(newValue) {
            const newSurveyValues = { ...surveyValues };

            newSurveyValues[sectionName].val = newValue;
            setSurveyValues(newSurveyValues);
            checkComplete();
        }
    };

    function checkComplete() {
        if (surveyValues.Survey1.val.length > 0 && surveyValues.Survey2.val.length > 0)
        {
            document.getElementById('completeNext').classList.add('sectionComplete');
        }
    }
    
    return (
        <SurveysContainer>
            <HeaderBox next='/settings'/>
            <ProgressBar name='Surveys'/>
            <SurveyBoxes>
                <SurveyListNames surveyValues={surveyValues} toggleFunction={setToggle} SurveyName={names}/>
                <SurveyFormSection 
                    toggle={toggle}
                    surveyValues={surveyValues}
                    modifyValue={getModifySectionValueFor(toggle)}
                />
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