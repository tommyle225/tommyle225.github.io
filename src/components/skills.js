import React, { Component } from 'react';

function SkillsList(props){
    const skills = props.skills;
    return (
        skills.map((skill,index)=>(
            <li key={index}>{skill}</li>
        ))
        
    );
}

class Skills extends Component {

    render() {
        
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="">
                        <SkillsList skills={this.props.resumeData.technicalSkills} />
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;