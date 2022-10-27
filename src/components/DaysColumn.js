import styled from '@emotion/styled';

export default function DaysColumn() {
    return (
        <DaysColumnContainer>
            <h4>120 days</h4>
            <p>(created on 10/12/2021)</p>
        </DaysColumnContainer>
    )
}

const DaysColumnContainer = styled.div`
    height: 96px;
    width: 195px;
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4{
        margin: 0;
        font-weight: 500;
        font-size: 16px;
    }
    p {
        margin: 0;
        font-size: 12px;
        line-height: 16px;
        color: #828282;
    }
`
