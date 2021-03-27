import React, {Component} from 'react';
import './skillscircles.scss';

export default class SkillsCirclesComponent extends Component {
    render (){
        return (
            <div className="flex-wrapper">
                <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart orange">
                    <path className="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                        strokeDasharray="30 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="17" className="label">Node</text>
                    <text x="18" y="25" className="percentage">30%</text>
                    </svg>
                </div>
                
                <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path className="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                        strokeDasharray="60, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="17" className="label">Express</text>
                    <text x="18" y="25" className="percentage">60%</text>
                    </svg>
                </div>

                <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart blue">
                    <path className="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path className="circle"
                        strokeDasharray="90, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                        <text x="18" y="17" className="label">React</text>
                    <text x="18" y="25" className="percentage">90%</text>
                    </svg>
                </div>
            </div>
        )
    }
}