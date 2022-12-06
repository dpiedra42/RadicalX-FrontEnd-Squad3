import styled from "@emotion/styled"
import { useState } from "react";

// images
import Menu from '../../assets/menu.png';
import Menu2 from '../../assets/menu2.png';
import RightMenu from '../../assets/right-menu.png';
import AddItem from '../../assets/additem.png';
import Add2 from '../../assets/add2.png';

export default function SectionNamesList({names, toggleFunction, getArray}) {
    const [toggle, setToggle] = useState('Overview');

    function handleClick(name) {
       setToggle(name);
       toggleFunction(name)
    };

    return (
        <SectionNamesContainer>
            {names.map((sectionName) => (
                <ListItemSection key={sectionName}>
                    <MenuIcon className={toggle === sectionName ? 'start' : null}>
                        <img src={Menu} alt='menu logo'/>
                    </MenuIcon>
                    <SectionBox className={toggle === sectionName ? 'highlight' : null}>
                        <NameImgBox onClick={() => handleClick(sectionName)}>
                            <p>{sectionName}</p>
                            <img src={RightMenu} alt='Right menu arrow'/>
                        </NameImgBox>
                        <MenuSectionsBox className={toggle === sectionName ? null : 'hidden'}>
                            {getArray(sectionName).map((option) => (
                                <div key={option}>
                                    <img src={Menu2} alt='menu Icon'/>
                                    <p>{option}</p>
                                </div>
                            ))}
                            <AddButton>
                                <img src={Add2} alt='Add Icon'/>
                                Add More
                            </AddButton>
                        </MenuSectionsBox>
                    </SectionBox>
                </ListItemSection>
            ))}
            <AddOption>
                <img src={AddItem} alt='Add Icon'/>
                Add More
            </AddOption>
        </SectionNamesContainer>
    )
}

const SectionNamesContainer = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;

`
const ListItemSection = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    width: 100%;
    img {
        width: 24px;
        height: 24px;
    }
`
const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    &.start {
        height: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 24px;
    }
`
const SectionBox = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid #E0E0E0;
    border-radius: 16px;
    padding: 0 20px 0 20px;

    &.highlight {
        border: 1px solid #793EF5;
        box-shadow: 0px 24px 34px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
    }
`
const NameImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    color: #333333;
    
    cursor: pointer;

`
const MenuSectionsBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-bottom: 24px;
    
    div{
        display: flex;
        align-items: center;
        gap: 12px;
        height: 56px;
        padding-left: 24px;
        border: 1px solid #E0E0E0;
        border-radius: 12px;
    }
    p{
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #333333;
    }
    img{
        width: 20px;
        height: 20px;
    }

    &.hidden {
        display: none;
    }
`
const AddButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;

    background-color: transparent;
    font-size: 16px;
    font-weight: 500;
    color: #793EF5;

    border: dashed 1px #793EF5;
    border-radius: 12px;
    gap: 13.67px;
    cursor: pointer;
    
    img{
        width: 20px;
        height: 20px;
    }
`
const AddOption = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    margin: 0 0 0 48px;

    background-color: #665FEF33;
    font-size: 18px;
    color: #793EF5;

    border: solid 1px #793EF5;
    border-radius: 12px;
    gap: 12px;
    cursor: pointer;
    
    img{
        width: 20px;
        height: 20px;
    }
`