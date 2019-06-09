import * as React from 'react';
import * as md from 'react-icons/md'

export interface Menu {
    text: string;
    href: string;
    submenus?: Menu[];
}

interface Props {
    menuData: Menu[];
}

const Navigation: React.FunctionComponent<Props> = props => {
    const [openedMenu, setOpenedMenu] = React.useState('');
    const [mainMenuClassName, setMainMenuClassName] = React.useState('menu');

    //event handler https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    const handleClickMenu = (menu: any) => (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        if (menu.text === openedMenu) {
            setOpenedMenu('');
        }
        else {
            setOpenedMenu(menu.text);
        }
    };

    const handleMenuButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (mainMenuClassName === 'menu') {
            setMainMenuClassName('menu menu--active');
        } else {
            setMainMenuClassName('menu');
        }
    };

    // const handleResize = () => {
    //     if(window.innerWidth <= 768){
    //         setMainMenuClassName('menu menu--inactive');
    //     }else{
    //         setMainMenuClassName('menu');
    //     }
    // };
    // useEffect(() => {

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     }
    // }, []);
    return (
        <React.Fragment>
            <i className='menu-button' onClick={handleMenuButtonClick}>
                {
                    mainMenuClassName === 'menu' ? <md.MdMenu /> : <md.MdClose />
                }
            </i>
            <ul className={mainMenuClassName}>
                {
                    props.menuData.map(menu => {
                        const subMenuClass = openedMenu === menu.text ? 'menu--stack menu--active' : 'menu--inactive';

                        return (
                            <li key={menu.text} className='menu__item'
                                onMouseOver={handleClickMenu(menu)}
                                onMouseOut={handleClickMenu(menu)} >
                                <a className='menu__link'
                                    href={(menu.submenus!.length > 0) ? '#' : menu.href} >
                                    {menu.text} {menu.submenus!.length > 0 && <md.MdKeyboardArrowDown />}
                                </a>
                                {
                                    menu.submenus!.length > 0 &&
                                    <ul className={'menu ' + subMenuClass}>
                                        {menu.submenus!.map(sub => (
                                            <li className='menu__item menu__item--stack' key={sub.text}>
                                                <a className='menu__link' href={sub.href}>
                                                    {sub.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
};

export default Navigation;