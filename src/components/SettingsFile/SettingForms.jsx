import styled from "@emotion/styled";
import { useState } from "react";

export default function SettingForms({toggle, surveyValues, modifyValue}) {
    const [inputValue, setInputValue] = useState('');

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (!surveyValues[toggle].val.includes(inputValue))
    //         modifyValue([...surveyValues[toggle].val, inputValue])

    //     setInputValue('');
    // };
    
    return(
        <SettingFormsContainer>
            <SettingsForm>
                <FormTitle>Internship URL</FormTitle>
                <textarea
                    type='text'
                    name='Question'
                    value={inputValue}
                    placeholder="Internship Url"
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                />
                <div>
                    Access
                </div>
                <div>
                    Security
                </div>
            </SettingsForm>
        </SettingFormsContainer>
    )
}

const SettingFormsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 20px;
    padding-bottom: 24px;
`
const SettingsForm = styled.div`
    padding: 24px 0 0 24px; 
    width: calc(100% - 46px);

    textarea {
        height: 36px;
        width: calc(100% - 16px);
        padding: 12px 0 0 16px;

        font-family: 'Space Grotesk';
        font-size: 16px;

        background-color: #F1F4F8;
        border: 1px solid #CECECE;
        border-radius: 16px;
        resize: none;
    }
`
const FormTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-bottom: 16px;
`