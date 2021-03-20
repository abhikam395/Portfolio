import React,{Component, Suspense} from 'react';
import './skills.scss';
const SkillsCirclesComponent = React.lazy(() => import('./../components/SkillCirclesComponent'));

export default class SkillsSection extends Component {
    render(){
        return (
            <Suspense fallback={<p>Loading</p>}>
                <section id="skills" 
                    className="skillssection skillssection--size skillssection--theme">
                    <div className="center column" >
                        <h1 className="skill-title">My Skills</h1>
                        <span className="line"></span>
                        <p className="skill-description">
                            This is a landing page for creating a personal portfolio website. 
                            I experimented with a few layouts, this is one of the major layouts. 
                            I also tried different sections, elements and colors - I will reveal other 
                        </p>
                        <SkillsCirclesComponent />
                    </div>
                </section>
            </Suspense>
           
        )
    }
}