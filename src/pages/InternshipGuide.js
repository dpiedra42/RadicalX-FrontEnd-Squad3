import styled from "@emotion/styled";

import HeaderBox from "../components/reusable/HeaderBox";
import ProgressBar from "../components/reusable/ProgressBar";

export default function internshipGuide() {

    return (
        <GuideContainer>
            <HeaderBox/>
            <ProgressBar name='Internship Guide'/>
            <SectionsBox>
                <div>

                </div>
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
    height: 100%; //remove later
    margin-top: 34px;
    gap: 23px;

    div{
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: white;
        border-radius: 20px;
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