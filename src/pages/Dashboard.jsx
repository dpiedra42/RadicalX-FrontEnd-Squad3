import styled from '@emotion/styled';
import Logo from '../assets/RadicalXLogo.png';
import Book from '../assets/book.png';
import Brief from '../assets/briefcase.png';
import Dash from '../assets/dashboard.png';
import Medal from '../assets/medal-star.png';
import Setting from '../assets/setting.png';
import Add from '../assets/add-square.png';


const Dashboard = () => {
    return (
        <DashContainer>
            <Sidebar>
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
            </Sidebar>
            <Internships>
                <TitleContainer>
                    <Title>Internships</Title>
                    <AddButton>
                        <AddIcon src={Add} alt='Add-Icon'></AddIcon>
                        Create New Internship
                    </AddButton>
                </TitleContainer>
            </Internships>
        </DashContainer>
    );
}

const DashContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #F1F4F8;
`
const Sidebar = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 16px;
    width: 229px;
    height: calc(100% - 32px);
    background: #ffffff;
    box-shadow: 0px 12px 34px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
`
const LogoImg = styled.img`
    width: 160px;
    height: 32px;
    margin: 35px;
`
const IconContainer = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 10px;
    margin: 13px 0px 0px 20px;
    width: 189px;
    height: 48px;
    font-size: 16px;
    font-family: "Space Grotesk", sans-serif;
    cursor: pointer;
    background-color: white;
    border: none;
    letter-spacing: 0.3px;

    :hover {
        background-color: #5047f233;
        border: 1px solid black;
        border-radius: 16px;
        filter: invert(36%) sepia(78%) saturate(7009%) hue-rotate(253deg) brightness(100%) contrast(93%);
    }
`
const Icons = styled.img`
    width: 24px;
    height: 24px;
`
const Internships = styled.div`
    width: 100%;
    margin: 45px 50px 0px 50px;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h1`
    font-weight: 600;
    font-size: 32px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.3px;
`
const AddButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 217px;
    height: 44px;
    background: #793EF5;
    border-radius: 12px;
    color: white;
    border: none;
    font-family: 'Space Grotesk';
    font-size: 14px;
    letter-spacing: 0.4px;
`
const AddIcon = styled.img`
    width: 20px;
    height: 20px;
`

export default Dashboard;