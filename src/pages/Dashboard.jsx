import styled from '@emotion/styled';

import Sidebar from '../components/Sidebar'
import InternshipInsights from '../components/InternshipInsights';
import InternshipColumn from '../components/InternshipColumn';
import DaysColumn from '../components/DaysColumn'
import EnrolledColumn from '../components/EnrolledColumn';
import BarGraphColumn from '../components/BarGraphColumn';
import IconsColumn from '../components/IconsColumn';

import Add from '../assets/add-square.png';
import Arrow from '../assets/arrow-square-down.png';


const Dashboard = () => {
    return (
        <DashContainer>
            <Sidebar/>
            <Internships>
                <TitleContainer>
                    <Title>Internships</Title>
                    <AddButton>
                        <AddIcon src={Add} alt='Add-Icon'></AddIcon>
                        Create New Internship
                    </AddButton>
                </TitleContainer>
                <InternshipInsights/>
                <InternshipDetails>
                    <TitleColumn>
                        <HeaderRow1>
                            <h3>Internship Title</h3>
                            <button>
                                <img src={Arrow} alt='Arrow Icon'></img>
                            </button>
                        </HeaderRow1>
                        <InternshipColumn/>
                        <InternshipColumn/>
                        <InternshipColumn/>
                        <InternshipColumn/>
                        <InternshipColumn/>
                    </TitleColumn>
                    <CompletionColumn>
                        <HeaderRow2>
                            <h3>Completion Period</h3>
                            <button>
                                <img src={Arrow} alt='Arrow Icon'></img>
                            </button>
                        </HeaderRow2>
                        <DaysColumn/>
                        <DaysColumn/>
                        <DaysColumn/>
                        <DaysColumn/>
                        <DaysColumn/>
                    </CompletionColumn>
                    <TotalColumn>
                        <HeaderRow3>
                            <h3>Total Enrolled</h3>
                            <button>
                                <img src={Arrow} alt='Arrow Icon'></img>
                            </button>
                        </HeaderRow3>
                        <EnrolledColumn/>
                        <EnrolledColumn/>
                        <EnrolledColumn/>
                        <EnrolledColumn/>
                        <EnrolledColumn/>
                    </TotalColumn>
                    <QualifiedColumn>
                        <HeaderRow4> 
                            <h3>Qualified Candidates</h3>
                            <button>
                                <img src={Arrow} alt='Arrow Icon'></img>
                            </button>
                        </HeaderRow4>
                        <BarGraphColumn/>
                        <BarGraphColumn/>
                        <BarGraphColumn/>
                        <BarGraphColumn/>
                        <BarGraphColumn/>
                    </QualifiedColumn>
                    <OptionsColumn>
                        <HeaderRow5/>
                        <IconsColumn/>
                        <IconsColumn/>
                        <IconsColumn/>
                        <IconsColumn/>
                        <IconsColumn/>
                    </OptionsColumn>
                </InternshipDetails>
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
const InternshipDetails = styled.div`
    display: flex;
    border-radius: 16px;
    padding-top: 24px;
    flex-wrap: wrap;
`
const TitleColumn = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    background-color: white;
    border-radius: 16px 0 0 16px;
`
const HeaderRow1 = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top-left-radius: 16px;
    height: 56px;
    h3 {
        padding-left: 12px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
    button {
        background-color: #F6F5F9;
        border: none;
        padding-right: 12px;
        cursor: pointer;
    }
    img {
        width: 20px;
        height: 20px;
    }
`
const CompletionColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
`
const HeaderRow2 = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;   
    h3 {
        padding-left: 12px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
    button {
        background-color: #F6F5F9;
        border: none;
        padding-right: 12px;
        cursor: pointer;
    }
    img {
        width: 20px;
        height: 20px;
    }
`
const TotalColumn = styled.div `
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
`
const HeaderRow3 = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;   
    h3 {
        padding-left: 12px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
    button {
        background-color: #F6F5F9;
        border: none;
        padding-right: 12px;
        cursor: pointer;
    }
    img {
        width: 20px;
        height: 20px;
    }
`
const QualifiedColumn = styled.div`
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
`
const HeaderRow4 = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;

    h3 {
        padding-left: 12px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        white-space: nowrap;
    }
    button {
        background-color: #F6F5F9;
        border: none;
        padding-right: 12px;
        cursor: pointer;
    }
    img {
        width: 20px;
        height: 20px;
    }
`
const OptionsColumn = styled.div`
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
`
const HeaderRow5 = styled.div`
    background-color: #F6F5F9;
    height: 56px;
`