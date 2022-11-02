import { AreaChart, Area, XAxis, ResponsiveContainer } from 'recharts';
import Calendar from '../assets/calendar.png';
import styled from '@emotion/styled';

export default function InternshipInsights() {
    const data = [
        {name: '' , value: ''},
        {name: 'Total Enrollments', value: 100000},
        {name: 'Completion', value: 65000},
        {name: 'Qualified Candidates', value: 850},
        {name: 'Reached Out', value: 375},
        {name: 'Interview Set', value: 300},
        {name: 'Candidates Hired', value: 150},
        {name: '' , value: ''}
      ];

    return (
        <InternshipInsightsContainer>
            <InsightsBox>
                <h2>Internship Insights</h2>
                <p>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge
                    in which knowledge about space can be both a priori and synthetic.
                </p>
            </InsightsBox>
            <DateGraphBox>
                <DateBox>
                    <div>
                        <SmallButton>This week</SmallButton>
                        <SmallButton>This month</SmallButton>
                    </div>
                    <div>
                        <LargeButton>
                            <img src={Calendar} alt='calendar icon'></img>
                            Select dates
                        </LargeButton>
                    </div>
                </DateBox>
                <ResponsiveContainer width="100%"  height={174}>
                    <AreaChart data={data}>
                        <Area type='monotone'dataKey="value" fill="#665FEF33" stroke="none"/>
                        <XAxis 
                            xAxisId={0} interval={0} tick={{fontSize: 21, fontWeight: 500}} 
                            dataKey="value" axisLine={false} tickLine={false}
                        />
                        <XAxis 
                            xAxisId={1} interval={0} tick={{fontSize: 12, fontWeight: 500}} 
                            dataKey="name" axisLine={false} tickLine={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </DateGraphBox>
        </InternshipInsightsContainer>
 )
}

const InternshipInsightsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 16px;
    gap: 10px;
    
`
const InsightsBox = styled.div`
    background: #F6F5F9;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 16px 0 0 16px;
    display: flex;
    width: 280px;
    flex-direction: column;
    gap: 12px;

    h2{
        margin: 0;
        font-weight: 600;
        font-size: 19px;
    }
    p {
        margin: 0;
        width: 230px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.3px;
    }
`
const DateGraphBox = styled.div`
    display: flex;
    width: calc(100% - 290px);
    flex-direction: column;
    flex-wrap: wrap;
`
const DateBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 8px;
    background: #F2F2F2;
    border-radius: 12px;
    gap: 10px;

    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
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
    cursor: pointer;
`
const LargeButton = styled.button`
    width: 137px;
    height: 32px;
    gap: 8px;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }
`