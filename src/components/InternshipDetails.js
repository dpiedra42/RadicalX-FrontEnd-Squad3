import styled from '@emotion/styled';

import Arrow from '../assets/arrow-square-down.png';

import InternshipTitleColumn from '../components/TitleColumn';
import DaysColumn from '../components/DaysColumn'
import EnrolledColumn from '../components/EnrolledColumn';
import BarGraphColumn from '../components/BarGraphColumn';
import IconsColumn from '../components/IconsColumn';

export default function InternshipDetails() {
    const columnData = [
        {
            title: 'Product Design GVI',
            description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
            days: Math.floor(Math.random() * 120),
            createdTs: 1634039062,
            enrolled: 5000 + Math.floor(Math.random() * 15000),
        },
        {
            title: 'Product Design GVI',
            description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
            days: Math.floor(Math.random() * 120),
            createdTs: 1634039062,
            enrolled: 5000 + Math.floor(Math.random() * 15000),
        },
        {
            title: 'Product Design GVI',
            description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
            days: Math.floor(Math.random() * 120),
            createdTs: 1634039062,
            enrolled: 5000 + Math.floor(Math.random() * 15000),
        },
        {
            title: 'Product Design GVI',
            description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
            days: Math.floor(Math.random() * 120),
            createdTs: 1634039062,
            enrolled: 5000 + Math.floor(Math.random() * 15000),
        },
        {
            title: 'Product Design GVI',
            description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
            days: Math.floor(Math.random() * 120),
            createdTs: 1634039062,
            enrolled: 5000 + Math.floor(Math.random() * 15000),
        }
    ];
    return (
        <InternshipDetailsContainer>
            <TitleColumn>
                <HeaderRow1>
                    <h3>Internship Title</h3>
                    <button>
                        <img src={Arrow} alt='Arrow Icon'></img>
                    </button>
                </HeaderRow1>
                <>
                    {columnData.map(data =>(
                        <InternshipTitleColumn title={data.title} description={data.description}/>
                    ))}
                </>
            </TitleColumn>
            <CompletionColumn>
                <HeaderRow2>
                    <h3>Completion Period</h3>
                    <button>
                        <img src={Arrow} alt='Arrow Icon'></img>
                    </button>
                </HeaderRow2>
                <>
                    {columnData.map(data =>(
                        <DaysColumn days={data.days} createdTs={data.createdTs}/>
                    ))}
                </>
            </CompletionColumn>
            <TotalColumn>
                <HeaderRow3>
                    <h3>Total Enrolled</h3>
                    <button>
                        <img src={Arrow} alt='Arrow Icon'></img>
                    </button>
                </HeaderRow3>
                <>
                    {columnData.map(data =>(
                        <EnrolledColumn enrolled={data.enrolled}/>
                    ))}
                </>
            </TotalColumn>
            <QualifiedColumn>
                <HeaderRow4> 
                    <h3>Qualified Candidates</h3>
                    <button>
                        <img src={Arrow} alt='Arrow Icon'></img>
                    </button>
                </HeaderRow4>
                <>
                    {columnData.map(data => (
                        <BarGraphColumn/>
                    ))}
                </>
            </QualifiedColumn>
            <OptionsColumn>
                <HeaderRow5/>
                <>
                    {columnData.map(data => (
                        <IconsColumn/>
                    ))}
                </>
            </OptionsColumn>
        </InternshipDetailsContainer>
    )
}

const InternshipDetailsContainer = styled.div`
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