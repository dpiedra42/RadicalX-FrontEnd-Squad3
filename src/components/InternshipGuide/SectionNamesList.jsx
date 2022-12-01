import styled from "@emotion/styled"

// images
import Menu from '../../assets/menu.png';
import RightMenu from '../../assets/right-menu.png';
import AddItem from '../../assets/additem.png';

export default function SectionNamesList({names}) {
    return (
        <SectionNamesContainer>
            {names.map((name) => (
                <ListItemSection>
                    <img src={Menu} alt='menu logo'/>
                    <NameImgBox>
                        <p>{name}</p>
                        <img src={RightMenu} alt='Right menu arrow'/>
                    </NameImgBox>
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
    width: 50%;
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
const NameImgBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    color: #333333;
    background-color: white;
    border: 1px solid #E0E0E0;
    border-radius: 16px;
    padding: 0 20px 0 20px;
    cursor: pointer;
    transition: 0.5s;

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