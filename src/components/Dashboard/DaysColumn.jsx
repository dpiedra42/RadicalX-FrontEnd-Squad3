import styled from '@emotion/styled';

export default function DaysColumn(props) {
    const createdDate = new Date(props.createdTs * 1000);

    return (
        <DaysColumnContainer>
            <h4>{props.days} {props.days > 1 ? 'days' : 'day'}</h4>
            <p>(created on {createdDate.toLocaleDateString()})</p>
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
