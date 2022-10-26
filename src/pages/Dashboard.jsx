import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar'
import InternshipInsights from '../components/InternshipInsights';
import Add from '../assets/add-square.png';
import Arrow from '../assets/arrow-square-down.png';
import InternshipColumn from '../components/InternshipColumn'


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
                    <TitleSection>
                        <HeaderRow>
                            <h3>Internship Title</h3>
                            <button>
                                <img src={Arrow} alt='Arrow Icon'></img>
                            </button>
                        </HeaderRow>
                        <InternshipColumn/>
                        <InternshipColumn/>
                        <InternshipColumn/>
                        <InternshipColumn/>
                        <InternshipColumn/>
                    </TitleSection>
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
const TitleSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 16px 0 0 16px;
`
const HeaderRow = styled.div`
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
    }
    img {
        width: 20px;
        height: 20px;
    }
`
// const CompletionSection = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 200px;
//     height: 56px;
//     align-items: center;
//     background-color: #F6F5F9;
//     h3 {
//         font-weight: 500;
//         font-size: 14px;
//         line-height: 24px;
//     }
//     button {
//         background-color: #F6F5F9;
//         border: none;
//     }
//     img {
//         width: 20px;
//         height: 20px;
//     }
// `
// const TotalSection = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 160px;
//     height: 56px;
//     background-color: #F6F5F9;
//     h3 {
//         font-weight: 500;
//         font-size: 14px;
//         line-height: 24px;
//     }
//     button {
//         background-color: #F6F5F9;
//         border: none;
//     }
//     img {
//         width: 20px;
//         height: 20px;
//     }
// `
// const QualifiedSection = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 250px;
//     height: 56px;       
//     background-color: #F6F5F9;
//     h3 {
//         font-weight: 500;
//         font-size: 14px;
//         line-height: 24px;
//     }
//     button {
//         background-color: #F6F5F9;
//         border: none;
//     }
//     img {
//         width: 20px;
//         height: 20px;
//     }
// `
// const ChartTitles = styled.div`
//     display: flex;
//     flex-direction: row;
//     background-color: #F6F5F9;
//     justify-content: space-evenly;
//     margin-top: 24px;
//     h3{
//         font-weight: 500;
//         font-size: 14px;
//         line-height: 24px;
//     }
// `