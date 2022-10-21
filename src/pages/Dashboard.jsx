import styled from '@emotion/styled';
import Logo from '../assets/RadicalXLogo.png';
import Book from '../assets/book.png';
import Brief from '../assets/briefcase.png';
import Dash from '../assets/dashboard.png';
import Medal from '../assets/medal-star.png';
import Setting from '../assets/setting.png';


const Dashboard = () => {
    return (
        <DashContainer>
            <Sidebar>
                <LogoImg src={Logo} alt='Logo'></LogoImg>
                <div>
                    <IconContainer>
                        <Icons src={Dash} alt='Dashboard-Icon'></Icons>
                        <IconLabel>Dashboard</IconLabel>
                    </IconContainer>
                    <IconContainer>
                        <Icons src={Medal} alt='Medal-Icon'></Icons>
                        <IconLabel>Apprenticeships</IconLabel>
                    </IconContainer>
                    <IconContainer>
                        <Icons src={Book} alt='Book-Icon'></Icons>
                        <IconLabel>Internships</IconLabel>
                    </IconContainer>
                    <IconContainer>
                        <Icons src={Brief} alt='Briefcase-Icon'></Icons>
                        <IconLabel>Jobs</IconLabel>
                    </IconContainer>
                    <IconContainer>
                        <Icons src={Setting} alt='Settings-Icon'></Icons>
                        <IconLabel>Settings</IconLabel>
                    </IconContainer>
                </div>
                {/* last tab will be username */}
            </Sidebar>
            <Internships>Internships</Internships>
        </DashContainer>
    );
}

const DashContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #F1F4F8;
`
const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 16px;
    width: 229px;
    background: #ffffff;
    box-shadow: 0px 12px 34px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
`
const LogoImg = styled.img`
    width: 160px;
    height: 32px;
    margin: 34px;
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;
    gap: 10px;
    width: 189px;
    height: 48px;
`
const Icons = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 20px;
`
const IconLabel = styled.p`
    width: 86px;
    height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.3px;
`
const Internships = styled.div`
`

export default Dashboard;