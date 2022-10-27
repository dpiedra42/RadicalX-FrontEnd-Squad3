import styled from '@emotion/styled';

export default function EnrolledColumn() {
    return (
        <EnrolledColumnContainer>
            <p>20,000</p>
        </EnrolledColumnContainer>
    )
}

const EnrolledColumnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 96px;

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F0EFFD;
        border-radius: 8px;
        color: #793EF5;
        font-weight: 600;
        font-size: 18px;
        width: 94px;
        height: 40px;
    }

`