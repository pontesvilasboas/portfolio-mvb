import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Courses extends Component {
  render() {
    if (this.props.resumeCourses && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.courses;
      var course = this.props.resumeCourses.map(function (course, i) {
        const degree = course.degree;

        var cD = degree.map((courseDone, i) => {
          return (
            <Badge pill className="title-courses-badge  mr-2 mb-2" key={i}>
              {courseDone}
            </Badge>
          );
        });
        return (
          <VerticalTimelineElement
            className=""
            date={course.years}
            iconStyle={{
              background: "#333333",
              color: "",
              textAlign: "center",
            }}
            icon={<i className="courses-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {cD}
            </div>
            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {course.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {course.institution}
            </h4>
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="courses" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-white" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {course}
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Courses;
