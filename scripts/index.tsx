import * as React from "react";
import * as ReactDOM from "react-dom";
import { MdMenu, MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'
import './../Sass/style.scss'

const menus = [
    {
        text: 'Home',
        href: '/',
        subs: []
    },
    {
        text: 'Menu 1',
        href: 'menu1',
        subs: [
            {
                text: 'Sub Menu 1',
                href: 'submenu1',
            },
            {
                text: 'Sub Menu 2',
                href: 'submenu2',
            },
            {
                text: 'Sub Menu 3',
                href: 'submenu3',
            }
        ]
    },
    {
        text: 'Menu 2',
        href: 'menu2',
        subs: [
            {
                text: 'Sub Menu 1',
                href: 'submenu1',
            },
            {
                text: 'Sub Menu 2',
                href: 'submenu2',
            },
            {
                text: 'Sub Menu 3',
                href: 'submenu3',
            }
        ]
    },
    {
        text: 'Menu 3',
        href: 'menu3',
        subs: []
    },
    {
        text: 'Menu 4',
        href: 'menu4',
        subs: [
            {
                text: 'Sub Menu 1',
                href: 'submenu1',
            },
            {
                text: 'Sub Menu 2',
                href: 'submenu2',
            },
            {
                text: 'Sub Menu 3',
                href: 'submenu3',
            }
        ]
    },
];


export const Navigation: React.FunctionComponent = () => {

    const [openedMenu, setOpenedMenu] = useState('');

    //event handler https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    const handleClickMenu = (menu: any) => (e: React.MouseEvent<HTMLLIElement>) => {
        if (menu.text == openedMenu) {
            setOpenedMenu('');
        }
        setOpenedMenu(menu.text);
    };

    return (
        <React.Fragment>
            <i id="btn-main-nav" className="material-icons"> <MdMenu /> </i>
            <div id="main-nav">
                <div className="container-wrapper">
                    <ul>
                        {menus.map(menu => (
                            <li key={menu.text} onClick={handleClickMenu(menu)} className={openedMenu === menu.text ? 'opened' : ''} >
                                <a href={(menu.subs.length > 0) ? '#' : menu.href}>
                                    <span>{menu.text}</span>
                                    {menu.subs.length > 0 && <MdKeyboardArrowDown />}
                                </a>
                                {menu.subs.length > 0 &&
                                    <ul className="unstyle">
                                        {menu.subs.map(sub => (
                                            <li>
                                                <a href={sub.href}>{sub.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
};

ReactDOM.render(
    <Navigation />,
    document.getElementById("navigation") as HTMLElement
);
