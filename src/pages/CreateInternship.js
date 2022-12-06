import styled from "@emotion/styled";

// Components
import HeaderBox from "../components/reusable/HeaderBox";
import ProgressBar from "../components/reusable/ProgressBar";
import FormData from "../components/CreateInternship/FormData";

export default function CreateInternship() {
    return (
        <CreateContainer>
            <HeaderBox next='/internshipGuide'/>
            <ProgressBar name='Internship Description'/>
            <FormData/>
        </CreateContainer>
    )
}

// Styles
const CreateContainer = styled.div`
    background-color: #F1F4F8;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 1400px;
    height: 100vh;
    overflow: auto;
`