import styled from "@emotion/styled";
import Search from '../../assets/search-normal.png';

export default function Category() {
    return (
        <CategoryContainer>
            <p>Category</p>
            <form>
                <input type="text" name="search category" placeholder='Search Category' required/>
                <img src={Search} alt='Search Icon'/>
            </form>
        </CategoryContainer>
    )
} 

const CategoryContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 12px;
    width: 100%;

    p {
        font-weight: 500;
        font-size: 24px;
        line-height: 18px;
        color: #333333;
    }

    form {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    input {
        background-color: #F1F4F8;
        font-family: 'Space Grotesk';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        border: none;
        border-radius: 16px;
        width: 100%;
        height: 48px;
        border: 1px solid #CECECE;
        padding-left: 16px;
    }

    img {
        position: absolute;
        width: 20px;
        height: 20px;
        padding-right: 14px;
    }
`