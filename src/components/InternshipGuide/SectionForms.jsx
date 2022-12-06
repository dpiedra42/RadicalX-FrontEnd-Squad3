import styled from "@emotion/styled";

import Video from '../../assets/document-upload.png';

export default function SectionsForms({toggle, getArray, modifySectionValue, formValues}) {
    return (
        <SectionFormsContainer>
            {getArray(toggle).map((option) => (
                <Section key={option}>
                    <OptionTitle>{option}</OptionTitle>
                    <DescriptionForm>
                        <textarea 
                            type="text"
                            value={formValues[toggle][option]} 
                            name="Description" 
                            placeholder='Description'
                            onChange={(e) => modifySectionValue(e.target.value, option)}
                            required
                        />
                    </DescriptionForm>
                    <DragForm>
                        <input
                            type='file'
                            multiple={false}
                        />
                        <DragBox>
                            <p>Drag n drop to upload your video</p>
                            <img src={Video} alt='video icon'/>
                        </DragBox>
                    </DragForm>
                </Section>
            ))}
        </SectionFormsContainer>
    )
}

const SectionFormsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 20px;
    padding-bottom: 24px;
`
const Section = styled.div`
    padding: 24px 0 0 24px; 
    width: calc(100% - 46px);
`
const OptionTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-bottom: 16px;
`
const DescriptionForm = styled.form`
    padding-bottom: 16px;

    textarea {
        height: 32px;
        width: calc(100% - 16px);
        padding: 10px 0 0 16px;

        font-family: 'Space Grotesk';
        font-size: 16px;

        background-color: #F1F4F8;
        border: 1px solid #CECECE;
        border-radius: 16px;
        resize: none;
    }
`
const DragForm = styled.form`
    input {
        display: none;
    }
`
const DragBox = styled.div `
    height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px dashed #B2B6BC;
    border-radius: 12px;
    color: #778188;

    p{
        font-weight: 400;
        font-size: 14px;
    }

    img {
        width: 20px;
        height: 20px;
    }
`