import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
  render() {
    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      var study = this.props.resumeEducation.map(function (study, i) {
        const degree = study.degree;

        var ed = degree.map((education, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {education}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--study"
            date={study.years}
            iconStyle={{
              background: "#174f97",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="education-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {ed}
            </div>
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {study.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {study.institution}
            </h4>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {study}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
