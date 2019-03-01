import React, { Component  } from "react";

class About extends Component {

    
    render() {
        const resumeData = this.props.resumeData;
        return (
            
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                <div className="w-100">
                    <h1 className="mb-0">{resumeData.firstName}
                    <span className="text-primary">{resumeData.lastName}</span>
                    </h1>
                    <div className="subheading mb-5">{resumeData.address} · {resumeData.city}, {resumeData.state} {resumeData.zip} · 
                    <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
                    </div>
                    <p className="lead mb-5">{resumeData.summary}</p>
                    <div className="social-icons">
                    <a href={this.props.resumeData.urls.linkedIn}>
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    
                    </div>
                </div>
                </section>
        )
    }
}

export default About;