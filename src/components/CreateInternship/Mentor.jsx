import styled from "@emotion/styled";

import ImageIcon from '../../assets/image-icon.png';

export default function MentorDetails() {
    return(
        <MentorContainer>
            <p>Mentor Details</p>
            <div>
                <img src={ImageIcon} alt='Icon'/>
            </div>
        </MentorContainer>
    )
}

const MentorContainer = styled.div`
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
    div{
        width: 80px;
        height: 80px;
        background: #E2E6EB;
        border-radius: 20px;
        
        img{
            position: relative;
            top: 58px;
            left: 57px;
            width: 28px;
            height: 28px;
        }
    }
`