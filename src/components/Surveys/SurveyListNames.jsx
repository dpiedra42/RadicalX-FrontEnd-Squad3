import styled from "@emotion/styled";

import Menu from '../../assets/menu.png';
import AddItem from '../../assets/additem.png';
import RightMenu from '../../assets/right-menu.png';

const SurveyName = ['Survey 1', 'Survey 2'];

export default function SurveyListNames() {
    return (
        <SurveyListNamesContainer>
            {SurveyName.map((name) => (
                <SurveyListItem>
                    <MenuIcon>
                        <img 
                            src={Menu} 
                            alt='menu logo'
                        />
                    </MenuIcon>
                    <NameImgBox>
                        <p>{name}</p>
                        <img 
                            src={RightMenu} 
                            alt='Right menu arrow'
                        />
                    </NameImgBox>
                </SurveyListItem>
            ))}
            <AddOption>
                <img src={AddItem} alt='Add Icon'/>
                Add More
            </AddOption>
        </SurveyListNamesContainer>
    )
}

const SurveyListNamesContainer = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    padding: 0;
    margin: 0;
`
const SurveyListItem = styled.li`
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
`
const NameImgBox = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid #E0E0E0;
    border-radius: 16px;
    padding: 0 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    color: #333333;
    
    cursor: pointer;

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