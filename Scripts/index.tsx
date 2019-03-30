import * as React from "react";
import * as ReactDOM from "react-dom";
import { MdMenu, MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'
import Slider from "react-slick";

import './../Sass/style.scss'

interface IMenu {
    text: string;
    href: string;
    submenus?: IMenu[];
}
interface IProps {
    menuData: IMenu[];
}

export const Navigation: React.FunctionComponent<IProps> = props => {
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
                        {props.menuData.map(menu => (
                            <li key={menu.text} onClick={handleClickMenu(menu)} className={openedMenu === menu.text ? 'opened' : ''} >
                                <a href={(menu.submenus!.length > 0) ? '#' : menu.href}>
                                    <span>{menu.text}</span>
                                    {menu.submenus!.length > 0 && <MdKeyboardArrowDown />}
                                </a>
                                {menu.submenus!.length > 0 &&
                                    <ul className="unstyle">
                                        {menu.submenus!.map(sub => (
                                            <li key={sub.text}>
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

const SimpleSlider: React.FunctionComponent = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
    );
}


//https://stackoverflow.com/a/12709880/1872200
declare global {
    interface Window {
        menuData: IMenu[];
    }
}

ReactDOM.render(
    <Navigation menuData={window.menuData} />,
    document.getElementById("navigation") as HTMLElement
);

ReactDOM.render(
    <SimpleSlider />,
    document.getElementById("slide") as HTMLElement
);
