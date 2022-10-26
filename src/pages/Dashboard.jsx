import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar'
import InternshipInsights from '../components/InternshipInsights';
import Add from '../assets/add-square.png';
import Arrow from '../assets/arrow-square-down.png';
import InternshipColumn from '../components/InternshipColumn';
import DaysColumn from '../components/DaysColumn'


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
                </InternshipDetails>
            </Internships>
        </DashContainer>
    );
}
export default Dashboard;

const DashContainer = styled.div`
    display: flex;
    width: 100%;
    /* height: 100%; */
    background-color: #F1F4F8;
`
const Internships = styled.div`
    width: 100%;
    margin: 45px 66px 16px 50px;
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
const InternshipDetails = styled.div`
    background-color: pink;
    display: flex;
    border-radius: 16px;
    margin-top: 24px;
`
const TitleColumn = styled.div`
    display: flex;
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
    width: 385px;
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
    flex-direction: column;
    background-color: white;
`
const HeaderRow2 = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
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