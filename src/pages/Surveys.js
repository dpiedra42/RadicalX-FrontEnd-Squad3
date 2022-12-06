import styled from "@emotion/styled";

import HeaderBox from '../components/reusable/HeaderBox';
import ProgressBar from '../components/reusable/ProgressBar';

export default function Surveys() {
    return (
        <SurveysContainer>
            <HeaderBox/>
            <ProgressBar name='Surveys'/>
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