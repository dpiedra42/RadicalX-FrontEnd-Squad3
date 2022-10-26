import styled from '@emotion/styled';

export default function InternshipColumn() {
    return (
        <InternshipColumnContainer>
            <h4>Product Design GVI</h4>
            <p>
                Amet minim mollit non deserunt est sit
                aliqua dolor do amet sint.
            </p>
        </InternshipColumnContainer>
    )
}

const InternshipColumnContainer = styled.div`
    height: 96px;
    h4{
        padding-left: 12px;
        width: 195px;
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 0;
    }
    p {
        padding-left: 12px;
        width: 195px;
        font-size: 12px;
        line-height: 16px;
    }
`