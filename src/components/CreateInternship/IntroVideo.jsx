import styled from "@emotion/styled";

import video from '../../assets/document-upload.png';

export default function IntroVideo({ value, modifySectionValue }) {
    return (
        <IntroVideoContainer>
            <p>Intro Video</p>
            <div>
                Drag n drop to upload your video
                <img src={video} alt='video icon'/>
            </div>
        </IntroVideoContainer>
    )
}

const IntroVideoContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;  

    p {
        font-family: 'Space Grotesk';
        font-weight: 500;
        font-size: 24px;
        line-height: 18px;
        color: #333333;
    }

    div {
        height: 68px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: 2px dashed #E2E6EB;
        border-radius: 8px;
        color: #778188;
        
        img {
            width: 20px;
            height: 20px;
        }
    }

    
`