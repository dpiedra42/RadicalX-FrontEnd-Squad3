import Logo from '../assets/RadicalXLogo.png';
import Book from '../assets/book.png';
import Brief from '../assets/briefcase.png';
import Dash from '../assets/dashboard.png';
import Medal from '../assets/medal-star.png';
import Setting from '../assets/setting.png';
import styled from '@emotion/styled';

const Sidebar = () => {
    return (
        <SidebarContainer>
                <LogoAndIcons>
                    <LogoImg src={Logo} alt='Logo'></LogoImg>
                    <IconsContainer>
                        <button>
                            <img src={Dash} alt='Dashboard-Icon'></img>
                            Dashboard
                        </button>
                        <button>
                            <img src={Medal} alt='Medal-Icon'></img>
                            Apprenticeship
                        </button>
                        <button>
                            <img src={Book} alt='Book-Icon'></img>
                        Internships
                        </button>
                        <button>
                            <img src={Brief} alt='Briefcase-Icon'></img>
                            Jobs
                        </button>
                        <button>
                            <img src={Setting} alt='Settings-Icon'></img>
                        Settings
                        </button>
                    </IconsContainer>
                </LogoAndIcons>
                <UserBox>
                    <div></div>
                    <p>Adam Scott</p>
                </UserBox>
            </SidebarContainer>
    )
}
export default Sidebar;

const SidebarContainer = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    background: #ffffff;
    box-shadow: 0px 12px 34px rgba(0, 0, 0, 0.04);
    border-radius: 24px;
    margin: 16px;
`
const LogoAndIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 20px;
    gap: 50px;
`
const LogoImg = styled.img`
    width: 160px;
    height: 32px;
`
const IconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 189px;
    align-items: flex-start;
    gap: 12px;

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 189px;
        height: 48px;
        gap: 10px;
        padding-left: 15px;
        font-size: 16px;
        font-family: "Space Grotesk", sans-serif;
        letter-spacing: 0.3px;
        cursor: pointer;
        background-color: white;
        border: 1px solid transparent;
        border-radius: 16px;
        transition: 0.3s;

        :hover {
            border: 1px solid #793EF5;
            background-color: #5047f233;
            color: #793EF5;
            
            img {
                filter: invert(36%) sepia(78%) saturate(7009%) hue-rotate(253deg) brightness(100%) contrast(93%);
            }
        }
    }
    img {
        width: 24px;
        height: 24px;
    }
`
const UserBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 20px 29px 20px;
    gap: 10px;

    div {
        width: 50px;
        height: 50px;
        background: #E2E6EB;
        border-radius: 16px;
    }

    p {
        font-family: 'Space Grotesk';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.3px;
    }
`