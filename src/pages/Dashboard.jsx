import styled from '@emotion/styled';
import Logo from '../assets/RadicalXLogo.png';
import Book from '../assets/book.png';
import Brief from '../assets/briefcase.png';
import Dash from '../assets/dashboard.png';
import Medal from '../assets/medal-star.png';
import Setting from '../assets/setting.png';
import Add from '../assets/add-square.png';
import Calendar from '../assets/calendar.png';


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
                <InternshipInsights>
                    <InsightsBox>
                        <BoxTitle>Internship Insights</BoxTitle>
                        <BoxDesc>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge
                            in which knowledge about space can be both a priori and synthetic.
                        </BoxDesc>
                    </InsightsBox>
                    <DateBox>
                        <SmallButton>This week</SmallButton>
                        <SmallButton>This month</SmallButton>
                        <LargeButton>
                            <img src={Calendar} alt='calendar icon'></img>
                            Select dates
                        </LargeButton>
                    </DateBox>
                    <div></div>
                </InternshipInsights>
            </Internships>
        </DashContainer>
    );
}
export default Dashboard;

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
const Internships = styled.div`
    width: 100%;
    margin: 45px 66px 0px 50px;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
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
    cursor: pointer;

    :hover {
        background-color:  #E2E6EB;
        color: #828282;
    }
`
const AddIcon = styled.img`
    width: 20px;
    height: 20px;
`
const InternshipInsights = styled.div`
    height: 270px;
    background: #FFFFFF;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
    gap: 10px;
`
const InsightsBox = styled.p`
    background: #F6F5F9;
    border-radius: 16px;
    width: 280px;
    height: 238px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
`
const BoxTitle = styled.h2`
    margin: 16px 35px 0 16px;
    font-weight: 600;
    font-size: 19px;
`
const BoxDesc = styled.p`
    margin: 12px 35px 0 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
`
const DateBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 10px;
    width: calc(100% - 316px);
    background: #F2F2F2;
    border-radius: 12px;

    button {
        :hover {
            background-color: #793EF5;
            color: white;
        }
    }
`
const SmallButton = styled.button`
        font-family: 'Space Grotesk';
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 6px 12px;
        gap: 8px;
        width: 100px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 8px;
        border: none;
`
const LargeButton = styled.button`
    width: 137px;
    height: 32px;
    font-family: 'Space Grotesk';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 6px 12px;
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    gap: 8px;

    img {
        width: 20px;
        height: 20px;
    }
`