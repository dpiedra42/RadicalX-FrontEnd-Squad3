import styled from "@emotion/styled";

import Add3 from '../../assets/add3.png';

export default function SurveyFormSection({toggle}) {
    return(
        <SurveyFormSectionContainer>
            <SurveyForm>
                <FormTitle>{toggle}</FormTitle>
                <FormContainer>
                    <input
                        type='text'
                        name='Question'
                        placeholder="Question"
                        required
                    />
                </FormContainer>
                <AddBox>
                    <img
                        src={Add3}
                        alt='add icon'
                    />
                    Add Question
                </AddBox>
            </SurveyForm>
        </SurveyFormSectionContainer>
    )
}

const SurveyFormSectionContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 20px;
    padding-bottom: 24px;
`
const SurveyForm = styled.div`
    padding: 24px 0 0 24px; 
    width: calc(100% - 46px);
`
const FormTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-bottom: 16px;
`
const FormContainer = styled.form`

    input {
        height: 48px;
        width: calc(100% - 16px);
        padding: 0 0 0 16px;

        font-family: 'Space Grotesk';
        font-size: 16px;

        background-color: #F1F4F8;
        border: 1px solid #CECECE;
        border-radius: 16px;
        resize: none;
    }
`
const AddBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    width: 158px;
    height: 38px;
    border: 1px dashed #793EF5;
    border-radius: 12px;
    margin-top: 16px;

    font-weight: 500;
    font-size: 15px;
    color: #793EF5;

    cursor: pointer;

    img{
        width: 22px;
        height: 22px;
    }
`