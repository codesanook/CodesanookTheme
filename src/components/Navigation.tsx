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
    const [activeMenuName, setActiveMenuName] = React.useState('');
    const [isMenuActive, setIsMenuActive] = React.useState(false);


    //event handler https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
    const handleSelectMenu = (menu: any) => (e: React.MouseEvent<HTMLLIElement>) => {
        setActiveMenuName(menu.text);
    };

    const handleDeselectMenu = (e: React.MouseEvent<HTMLElement>) => {
        const currentTarget = e.currentTarget as HTMLElement;
        const element = e.relatedTarget as HTMLElement;
        const isOutToChild = element && element.parentNode === currentTarget;
        if (isOutToChild) {
        } else {
            setActiveMenuName('');
            //console.log(`not out to parent or child`);
        }
    };

    const handleMenuButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setIsMenuActive(!isMenuActive);
    };

    return (
        <React.Fragment>
            <div className='_text-right'>
                <i className='menu-button' onClick={handleMenuButtonClick}>
                    {
                        isMenuActive ? <md.MdClose /> : <md.MdMenu />
                    }
                </i>
            </div>
            <div className={'top-navigation'}>
                <ul className={['menu-item-container', (isMenuActive ? '-active' : '')].join(' ')}>
                    {
                        props.menuData.map(mainMenu => {
                            const subMenuClasses = activeMenuName === mainMenu.text ? ['-active', '-stack'] : ['-inactive'];

                            return (
                                <li key={mainMenu.text} className='menu-item'
                                    onMouseOver={handleSelectMenu(mainMenu)}
                                    onMouseOut={handleDeselectMenu}>
                                    <a className='link' 
                                        href={(mainMenu.submenus!.length > 0) ? '#' : mainMenu.href} >
                                        {mainMenu.text} {mainMenu.submenus!.length > 0 && <md.MdKeyboardArrowDown />}
                                    </a>
                                    {
                                        mainMenu.submenus!.length > 0 &&
                                        <ul className={['menu-item-container', ...subMenuClasses].join(' ')}>
                                            {mainMenu.submenus!.map(subMenu => (
                                                <li className='menu-item -stack' key={subMenu.text}>
                                                    <a className='link -stack' href={subMenu.href}>
                                                        {subMenu.text}
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
            </div>

        </React.Fragment >
    )
};

export default Navigation;