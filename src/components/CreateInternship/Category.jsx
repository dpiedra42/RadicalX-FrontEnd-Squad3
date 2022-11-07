import styled from "@emotion/styled";
import { useState } from "react";
import Search from '../../assets/search-normal.png';
import Close from '../../assets/close.png';

export default function Category() {
    const [categoryName, setCategoryName] = useState('')
    const [optionsArray, setOptionsArray] = useState([])

    function handleInput(e) {
        e.preventDefault();
        optionsArray.includes(categoryName) ? alert("Already listed in Category") :
        setOptionsArray(oldArray => [...oldArray, categoryName]);
        setCategoryName('');
    }

    function filterArray(name) {
        setOptionsArray(optionsArray.filter(item => item !== name))
        console.log(optionsArray)
    }

    return (
        <CategoryContainer>
            <p>Category</p>
            <form onSubmit={(e) => handleInput(e)}>
                <input 
                    type="text" 
                    name="searchCategory" 
                    value={ categoryName }
                    placeholder='Search Category' 
                    onChange={(e) => setCategoryName(e.target.value)}
                    required/>
                <img src={Search} alt='Search Icon'/>
            </form>
            <CategoryDisplay>
                {optionsArray.map((cat, id) => (
                    <CategoryItem key={id}>
                        <p>{cat}</p>
                        <button onClick={() => filterArray(cat)}>
                            <img src={Close} alt='Close Icon'/>
                        </button>
                    </CategoryItem>
                ))}
            </CategoryDisplay>
        </CategoryContainer>
    )
} 

const CategoryContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
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

        img {
        position: absolute;
        width: 20px;
        height: 20px;
        padding-right: 14px;
        }
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
`
const CategoryDisplay = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const CategoryItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    background-color: #665FEF33;
    border: 1px solid #793EF5;
    border-radius: 32px;
    /* padding: 0 12px 0 12px;   */
    
    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #793EF5;
        flex-wrap: wrap;
        padding-left: 16px;
    }

    button{
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-right: 12px;

        img{
            width: 22px;
            height: 22px;
        }
    }
`