import styled from '@emotion/styled';
import Chart from '../assets/chart.png';
import More from '../assets/more.png';
import Profile from '../assets/profile.png';

export default function IconsColumn() {
    return (
        <IconsContainer>
            <img src={Chart} alt='Chart Icon'/>
            <img src={Profile} alt='User Profile Icon'/>
            <img src={More} alt='More Options Icon'/>
        </IconsContainer>
    )
}

const IconsContainer = styled.div`
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    img {
        width: 28px;
        height: 28px;
        cursor: pointer;
    }
`
