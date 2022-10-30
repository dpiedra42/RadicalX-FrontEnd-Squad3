import styled from '@emotion/styled';

export default function InternshipTitleColumn(props) {
    return (
        <InternshipColumnContainer>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </InternshipColumnContainer>
    )
}

const InternshipColumnContainer = styled.div`
    height: 96px;
    padding-left: 12px;
    width: 195px;

    h4{
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 0;
    }
    p {
        font-size: 12px;
        line-height: 16px;
    }
`