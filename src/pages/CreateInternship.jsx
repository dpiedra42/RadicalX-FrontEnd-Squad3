import styled from "@emotion/styled";

// Components
import HeaderBox from "../components/CreateInternship/HeaderBox";
import ProgressBar from "../components/CreateInternship/ProgressBar";
import FormData from "../components/CreateInternship/FormData";

export default function CreateInternship() {
    return (
        <CreateContainer>
            <HeaderBox/>
            <ProgressBar/>
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
`