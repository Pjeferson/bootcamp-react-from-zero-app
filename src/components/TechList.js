import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  // static defaultProps = {tech: 'Tech'}; example of use

  state = {
    techs: ["Node.js", "ReactJS", "React Native"],
    newTech: ""
  };

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };

  handleSubmit = e => {
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
    e.preventDefault();
  };

  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.newTech}</h1>
        <ul>
          <TechItem />
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newTech}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Adicionar" />
        </form>
      </>
    );
  }
}

export default TechList;
