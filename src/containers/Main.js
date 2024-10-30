import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Skill from "../pages/skill/skillTree";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";

export default class Main extends Component {
  render() {
    const theme = this.props.theme;
    console.log(theme);

    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Home theme={this.props.theme} />}
            />
            <Route
              path="/home"
              element={<Home theme={this.props.theme} />}
            />
            <Route
              path="/skill"
              element={<Skill theme={this.props.theme} />}
            />
            <Route
              path="/experience"
              element={<Experience theme={this.props.theme} />}
            />
            <Route
              path="/education"
              element={<Education theme={this.props.theme} />}
            />
            <Route
              path="/contact"
              element={<Contact theme={this.props.theme} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={this.props.theme} />}
            />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
