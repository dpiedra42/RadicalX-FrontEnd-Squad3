import styled from "@emotion/styled";
import { useState } from "react";
import Search from '../../assets/search-normal.png';
import Close from '../../assets/close.png';

export default function Roles({ modifySectionValue, value }) {
    const [roleName, setRoleName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (!value.includes(roleName))
            modifySectionValue([...value, roleName]);

        setRoleName('');
    }

    function filterArray(name) {
        modifySectionValue(value.filter(item => item !== name));
    }

    return (
        <RolesContainer>
            <SectionTitle>Recommended Roles</SectionTitle>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                    type="text" 
                    name="searchRole" 
                    value={ roleName }
                    placeholder='Search Roles' 
                    onChange={(e) => setRoleName(e.target.value)}
                    required
                />
                <img src={Search} alt='Search Icon'/>
            </form>
            <RoleDisplay>
                {value.map((role) => (
                    <RoleItem key={role}>
                        <p>{role}</p>
                        <button onClick={() => filterArray(role)}>
                            <img src={Close} alt='Close Icon'/>
                        </button>
                    </RoleItem>
                ))}
            </RoleDisplay>
        </RolesContainer>
    )
} 

const RolesContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;

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
        font-size: 16px;
        border: 1px solid #CECECE;
        border-radius: 16px;
        width: 100%;
        height: 48px;
        padding-left: 16px;
    }
`
const SectionTitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 18px;
    color: #333333;
`
const RoleDisplay = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const RoleItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    background-color: #665FEF33;
    border: 1px solid #793EF5;
    border-radius: 32px;
    
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