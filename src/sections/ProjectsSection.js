import React,{Component} from 'react';
import './projects.scss';
import image from './../images/1.png';

export default class ProjectsSection extends Component {

    constructor(){
        super();
        this.state = {
            projects: [
                {id: 1, name: 'Ecommerce', image: image},
                {id: 2, name: 'Banking', image: image},
                {id: 3, name: 'Gaming', image: image},
                {id: 4, name: 'Ecommerce', image: image},
                {id: 5, name: 'Ecommerce', image: image},
            ]
        }
    }

    renderProjects(projects){
        return projects.map(project => {
            return (
                <li 
                    className="project project--size" 
                    key={project.id}>
                        <a href={`/#${project.name}`} className="project__link">
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