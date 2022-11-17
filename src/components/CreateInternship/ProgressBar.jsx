import styled from "@emotion/styled";

import Unticked from '../../assets/untick-circle.png';

export default function ProgressBar() {
    return (
        <ProgressBarContainer>
            <ul>
                <li>
                    <img src={Unticked} alt='Unticked circle icon'/>
                    Internship Description
                </li>
                <li style={{opacity: '0.3'}}>
                    <img 
                        style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                        src={Unticked} 
                        alt='Unticked circle icon'
                    />
                    Internship Guide
                </li>
                <li style={{opacity: '0.3'}}>
                    <img 
                        style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                        src={Unticked} 
                        alt='Unticked circle icon'
                        />
                    Surveys
                </li>
                <li style={{opacity: '0.3'}}>
                    <img 
                        style={{filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                        src={Unticked} 
                        alt='Unticked circle icon'
                        />
                    Setting
                </li>
            </ul>
        </ProgressBarContainer>
    )
}

const ProgressBarContainer = styled.div`
    display: flex;
    height: 60px;
    width: calc(100% - 46px);
    margin-top: 20px;
    border: solid #D0D4DA 1px;
    border-radius: 20px;

    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        list-style: none;
        letter-spacing: 0.3px;
        padding: 0 24px 0 24px;
    }
    
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

    }
    img{
        width: 24px;
        height: 24px;
    }
`