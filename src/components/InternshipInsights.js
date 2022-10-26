import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
import Calendar from '../assets/calendar.png';
import styled from '@emotion/styled';

const InternshipInsights = () => {
    const data = [
        {name: 'Total Enrollments', value: 100000},
        {name: 'Completion', value: 65000},
        {name: 'Qualified Candidates', value: 850},
        {name: 'Reached Out', value: 375},
        {name: 'Interview Set', value: 300},
        {name: 'Candidates Hired', value: 150}
      ];
    return (
        <InternshipInsightsContainer>
            <InsightsBox>
                <BoxTitle>Internship Insights</BoxTitle>
                <BoxDesc>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge
                    in which knowledge about space can be both a priori and synthetic.
                </BoxDesc>
            </InsightsBox>
            <DateGraphBox>
                <DateBox>
                    <SmallButton>This week</SmallButton>
                    <SmallButton>This month</SmallButton>
                    <div>
                        <LargeButton>
                            <img src={Calendar} alt='calendar icon'></img>
                            Select dates
                        </LargeButton>
                    </div>
                </DateBox>
                <ResponsiveContainer width="100%"  height={174}>
                    <AreaChart data={data}>
                        <Area type='monotone'dataKey="value" fill="#665FEF33" stroke="none" />
                        <XAxis dataKey="name" />
                    </AreaChart>
                </ResponsiveContainer>
            </DateGraphBox>
        </InternshipInsightsContainer>
 )
}

const InternshipInsightsContainer = styled.div`
    height: 270px;
    background: #FFFFFF;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
    gap: 10px;
`
const InsightsBox = styled.div`
    background: #F6F5F9;
    border-radius: 16px;
    width: 280px;
    height: 238px;
    display: flex;
    flex-direction: column;
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
const DateGraphBox = styled.div`
    width: calc(100% - 306px);
`
const DateBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px;
    gap: 10px;
    background: #F2F2F2;
    border-radius: 12px;
    div {
        width: calc(100% - 218px);
        display: flex;
        justify-content: end;
    }
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Space Grotesk';
        font-weight: 500;
        font-size: 14px;
        background: #FFFFFF;
        border-radius: 8px;
        border: none;
        
        :hover {
            background-color: #793EF5;
            color: white;
            img {
                filter: invert(100%) sepia(8%) saturate(0%) hue-rotate(251deg) brightness(200%) contrast(102%);
            }
        }
    }
`
const SmallButton = styled.button`
    width: 100px;
    height: 32px;
`
const LargeButton = styled.button`
    width: 137px;
    height: 32px;
    gap: 8px;

    img {
        width: 20px;
        height: 20px;
    }
`

export default InternshipInsights;