import Logo from '../assets/RadicalXLogo.png';
import Book from '../assets/book.png';
import Brief from '../assets/briefcase.png';
import Dash from '../assets/dashboard.png';
import Medal from '../assets/medal-star.png';
import Setting from '../assets/setting.png';
import styled from '@emotion/styled';

const Sidebar = () => {
    return (
        <SidebarContainer>
                <LogoImg src={Logo} alt='Logo'></LogoImg>
                <div>
                    <IconContainer>
                        <Icons src={Dash} alt='Dashboard-Icon'></Icons>
                        Dashboard
                    </IconContainer>
                    <IconContainer>
                        <Icons src={Medal} alt='Medal-Icon'></Icons>
                        Apprenticeship
                    </IconContainer>
                    <IconContainer>
                        <Icons src={Book} alt='Book-Icon'></Icons>
                       Internships
                    </IconContainer>
                    <IconContainer>
                        <Icons src={Brief} alt='Briefcase-Icon'></Icons>
                        Jobs
                    </IconContainer>
                    <IconContainer>
                        <Icons src={Setting} alt='Settings-Icon'></Icons>
                       Settings
                    </IconContainer>
                </div>
            </SidebarContainer>
    )
}
export default Sidebar;

const SidebarContainer = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    align-items: left;
    background: #ffffff;
    box-shadow: 0px 12px 34px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
    margin: 16px;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`
const LogoImg = styled.img`
    width: 160px;
    height: 32px;
    padding: 35px;
`
const IconContainer = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 10px;
    margin: 13px 0px 0px 20px;
    font-size: 16px;
    font-family: "Space Grotesk", sans-serif;
    cursor: pointer;
    background-color: white;
    border: 1px solid transparent;
    letter-spacing: 0.3px;
    border-radius: 16px;

    transition: 0.3s;

    :hover {
        border: 1px solid #793EF5;
        background-color: #5047f233;
        color: #793EF5;
        
        img {
            filter: invert(36%) sepia(78%) saturate(7009%) hue-rotate(253deg) brightness(100%) contrast(93%);
        }
    }
`
const Icons = styled.img`
    width: 24px;
    height: 24px;
`