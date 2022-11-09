import styled from "@emotion/styled";

import Unticked from '../../assets/untick-circle.png';

export default function ProgressBar() {
    return (
        <ProgressBarContainer>
            <ul>
                <img src={Unticked} alt='Unticked circle icon'/>
                <li>Internship Description</li>
            </ul>
            <ul>
                <img 
                    style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                    src={Unticked} 
                    alt='Unticked circle icon'
                />
                <li style={{opacity: '0.3'}}>Internship Guide</li>
            </ul>
            <ul>
                <img 
                    style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                    src={Unticked} 
                    alt='Unticked circle icon'
                />
                <li style={{opacity: '0.3'}}>Surveys</li>
            </ul>
            <ul>
                <img 
                    style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                    src={Unticked} 
                    alt='Unticked circle icon'
                />
                <li style={{opacity: '0.3'}}>Settings</li>
            </ul>
        </ProgressBarContainer>
    )
}

const ProgressBarContainer = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: calc(100% - 46px);
    margin-top: 20px;
    border: solid #D0D4DA 1px;
    border-radius: 20px;

    ul {
        list-style: none;
        display: flex;
        align-items: center;
        letter-spacing: 0.3px;
        gap: 8px;
        padding: 0 24px 0 24px;
    }
    img{
        width: 24px;
        height: 24px;
    }
`