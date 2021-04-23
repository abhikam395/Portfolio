import React,{Component} from 'react';
import './projects.scss';
import ecommerceimage from './../images/ecommerce.png';
import dashboardimage from './../images/dashboard.png';


export default class ProjectsSection extends Component {

    constructor(){
        super();
        this.state = {
            projects: [
                {id: 1, name: 'Ecommerce', image: ecommerceimage, link: 'https://ecommerce.abhishekkamboj.tech'},
                {id: 2, name: 'Dashboard', image: dashboardimage, link: 'https://dashboard.abhishekkamboj.tech'},
            ]
        }
    }

    renderProjects(projects){
        return projects.map(project => {
            return (
                <li 
                    className="project project--size" 
                    key={project.id}>
                        <a href={project.link} className="project__link">
                            <img 
                                src={project.image} 
                                key={project.id} 
                                className="project__image" 
                                alt="imag"/>
                            <h3 className="project__name">{project.name}</h3>
                        </a>
                </li>
            )
        })
    }

    render(){
        let {projects} = this.state;
        return (
            <section id="projects" 
                    className="projectssection projectssection--size projectssection--theme">
                <div className="center">
                    <ul className="projects">
                        {this.renderProjects(projects)}
                    </ul>
                </div>
            </section>
        )
    }
}