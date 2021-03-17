import React,{Component} from 'react';
import './navbar.scss';

export default class NavbarComponent extends Component {
    constructor(){
        super();
        this.menus = [
            {id: 1, name: 'Home', href:"home"},
            {id: 2, name: 'About', href:"about"},
            {id: 3, name: 'Skills', href:"skills"},
            {id: 4, name: 'Projects', href:"projects"},
            {id: 5, name: 'Contact', href:"contact"},
        ]
    }

    renderMenus(menus){
        return menus.map(menu => 
            <li 
                key={menu.id} 
                className="menu menu--size menu--theme">
                <a href={`#${menu.href}`} className="menu-link">
                    {menu.name}
                </a>
            </li>
        )
    }

    render(){
        return (
            <nav className="navbar navbar--size navbar--theme">
                <div className="center">
                    <ul className="menus menus--size menus--theme">
                        {this.renderMenus(this.menus)}
                    </ul>
                </div>
            </nav>
        )
    }
}