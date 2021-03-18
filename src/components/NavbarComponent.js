import React,{Component} from 'react';
import './navbar.scss';

export default class NavbarComponent extends Component {
    constructor(){
        super();
        this.state = { 
            activeMenu: null, 
            visible: {
                element: null,
            },
            hide: {
                element: null,
            }
        };
        this.menus = [
            {id: 1, name: 'Home', href:"home"},
            {id: 2, name: 'About', href:"about"},
            {id: 3, name: 'Skills', href:"skills"},
            {id: 4, name: 'Projects', href:"projects"},
            {id: 5, name: 'Contact', href:"contact"},
        ];
    }

    componentDidMount(){
        this.observeSections();
        let menu = document.getElementsByClassName('menu')[0];
        menu.classList.add('active');
        this.setState({activeMenu: menu});
    }

    onMenuSelected(index){
        let {activeMenu} = this.state;
        let menu = document.getElementsByClassName('menu')[index - 1];
        
        //remove and add active class
        activeMenu.classList.remove('active');
        menu.classList.add('active');

        //set activeMenu
        this.setState({activeMenu: menu});
    }

    // observeSections(){
    //     let context = this;
    //     let observer = new IntersectionObserver(function(e){
    //         console.log(e[0]);
    //         let object = e[0];
    //         let target = {
    //             element: object.target
    //         }
    //         if(object.isIntersecting === true)
    //             context.setState({visible: target})
    //         else
    //             context.setState({hide: target})
    //     }, {root: null, threshold: .5});

    //     let home = document.getElementById('home');
    //     let about = document.getElementById('about');
    //     let skill = document.getElementById('skills');
    //     let project = document.getElementById('projects');
    //     let contact = document.getElementById('contact');
    //     observer.observe(home);
    //     observer.observe(about);
    //     observer.observe(skill);
    //     observer.observe(project);
    //     observer.observe(contact);
    // }

    renderMenus(menus){
        return menus.map(menu => 
            <li 
                key={menu.id}
                onClick={this.onMenuSelected.bind(this, menu.id)}
                className="menu menu--size menu--theme">
                <a href={`#${menu.href}`} className="menu-link">
                    {menu.name}
                </a>
            </li>
        )
    }

    render(){
        // console.log(this.state.visible.element)
        // console.log(this.state.hide.element)
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