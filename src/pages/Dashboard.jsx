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
                    <Icons src={Dash} alt='Dashboard-Icon'></Icons>
                    <text>Dashboard</text>
                </div>
                <div>
                    <Icons src={Medal} alt='Medal-Icon'></Icons>
                    <text>Apprenticeships</text>
                </div>
                <div>
                    <Icons src={Book} alt='Book-Icon'></Icons>
                    <text>Internships</text>
                </div>
                <div>
                    <Icons src={Brief} alt='Briefcase-Icon'></Icons>
                    <text>Jobs</text>
                </div>
                <div>
                    <Icons src={Setting} alt='Settings-Icon'></Icons>
                    <text>Settings</text>
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
const Internships = styled.div`
`
const Icons = styled.img`
    width: 24px;
    height: 24px;
`
export default Dashboard;