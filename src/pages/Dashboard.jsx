import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../components/Dashboard/Sidebar'
import InternshipInsights from '../components/Dashboard/InternshipInsights';
import InternshipDetails from '../components/Dashboard/InternshipDetails';

import Add from '../assets/add-square.png';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <DashContainer>
            <Sidebar/>
            <Internships>
                <TitleContainer>
                    <Title>Internships</Title>
                    <AddButton onClick={() => navigate('./createInternship')}>
                        <AddIcon src={Add} alt='Add-Icon'></AddIcon>
                        Create New Internship
                    </AddButton>
                </TitleContainer>
                <InternshipInsights/>
                <InternshipDetails/>
            </Internships>
        </DashContainer>
    );
}
export default Dashboard;

const DashContainer = styled.div`
    display: flex;
    min-width: 1400px;
    background-color: #F1F4F8;
`
const Internships = styled.div`
    width: calc(100% - 331px);
    box-sizing: border-box;
    padding: 46px 0 16px 46px;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
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