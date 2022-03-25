import styled from "styled-components"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useRecoilState } from "recoil";
import { isOpenState } from '../recoil/navStates'


const Nav = () => {
    const [ isOpen, setIsOpen ] = useRecoilState<boolean>(isOpenState)

    const navBarToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
            <NavBar>

            <MenuBarIcon>
            </MenuBarIcon>
            <MenuBarLabel>홈</MenuBarLabel>
            <MenuBarLabel>검색</MenuBarLabel>
            <MenuBarMargin />
            <MenuBarLabel>다현이의 행복한 오늘</MenuBarLabel>
            <MenuBarIcon />

            <NavMenu>


            </NavMenu>

            </NavBar>

            </IconContext.Provider>
        </>
    )
}

const NavBar = styled.div`
    font-family: 'NanumSquareRound', 'sans-serif';
    position: fixed;
    background-color: #393E46;
    width: 100%;
    height: 40px;
    display: flex;
    flex-basis: 150px;
    justify-items: center;
    align-items: center;
    padding: 0 20px 0 0;
    z-index: 998;
`

const MenuBarIcon = styled.span`
    margin-left: 2rem;
    font-size: 14px;
    align-items: center;
    background: none;
`

const MenuBarLabel = styled.span`
    font-size: ${( {theme} ) => theme.fontSizes.small};
    font-weight: 300;
    color: #FFF;
    display: block;
    padding: 10px;

`

const NavMenu = styled.nav`

`

const MenuBarMargin = styled.span`
    margin: 0 auto 0 auto;
`


export default Nav