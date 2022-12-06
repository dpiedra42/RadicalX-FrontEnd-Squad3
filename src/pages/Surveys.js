import styled from "@emotion/styled";
// import { useState } from "react";

import HeaderBox from '../components/reusable/HeaderBox';
import ProgressBar from '../components/reusable/ProgressBar';

export default function Surveys() {
    // const [surveyValues, setSurveyValues] = useState({
    //     Survey1: [],
    //     Survey2: []
    // });
    
    return (
        <SurveysContainer>
            <HeaderBox/>
            <ProgressBar name='Surveys'/>
            <SurveyBoxes>
                <SurveyListNames>

                </SurveyListNames>
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
const SurveyListNames = styled.div`
`