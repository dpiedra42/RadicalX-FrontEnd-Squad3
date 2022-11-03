import styled from '@emotion/styled';
import { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function BarGraphColumn() {
    const [focusBar, setFocusBar] = useState(null);

    const data = [
        {value: 60}, {value: 80}, {value: 100},
        {value: 80}, {value: 80}, {value: 60},
        {value: 80}, {value: 100},{value: 110},
        {value: 120},{value: 110}, {value: 100},
        {value: 140}, {value: 120}, {value: 110},
        {value: 80}, {value: 100}, {value: 60},
        {value: 50}, {value: 40}
    ];

    const handleMouseMove = (state) =>
    {
        if (state.isTooltipActive) 
        {
            setFocusBar(state.activeTooltipIndex);
        } 
        else 
        {
            setFocusBar(null);
        }
    }

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
            <div className="custom-tooltip">
                <p 
                    style={{ 
                        display: 'flex', justifyContent: 'center', backgroundColor: '#793EF5', 
                        color:'white', width: '40px', height: '24px', alignItems: 'center', borderRadius: '4px',
                        fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '12px'
                    }}
                    className="label"
                >
                {`${payload[0].value}`}
                </p>
            </div>
            );
        }
        return null;
    };
      

    return (
        <BarGraphContainer>
            <ResponsiveContainer width="80%" height="45%">
                <BarChart data={data} onMouseMove={handleMouseMove}>
                    <Tooltip 
                        cursor={false} content={<CustomTooltip />} 
                        wrapperStyle={{outline: 'none'}} position={{y: -35}}
                    />
                    <Bar dataKey="value"  barSize={6} fill="#C4C4C4" radius={[10, 10, 0, 0]}>
                        {
                            data.map((entry, index) => (
                                <Cell key={index} fill={focusBar === index ? "#793EF5" : "#C4C4C4"}/>
                            ))
                        }
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </BarGraphContainer>
    )
}

const BarGraphContainer = styled.div`
    width: 250px;
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
`
