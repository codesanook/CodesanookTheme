import { Menu } from "../Navigation";

const menuData: Menu[] = [{
    text: 'menu 1',
    href: '/',
    submenus: [{
        text: 'menu 1.1',
        href: '/'
    }, {
        text: 'menu 1.2',
        href: '/'
    }]
}, {
    text: 'menu 2',
    href: '/',
    submenus: [{
        text: 'menu 2.1',
        href: '/'
    }, {
        text: 'menu 2.2',
        href: '/'
    }]
}, {
    text: 'menu 3',
    href: '#',
    submenus:[]
},
{
    text: 'menu 4',
    href: '#',
    submenus:[]
}

];

export default menuData;