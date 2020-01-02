import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  // static defaultProps = {tech: 'Tech'}; example of use
  // static propTypes = { tech: PropTypes.string.isRequired };

  state = {
    techs: [],
    newTech: ""
  };

  /*
    Most used life-cycle methods:
    componentDidMount,
    componentDidUpdate,
    componentWillUnmount
  */

  // when a component appears on screen
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // when a component state or prop is changed
  componentDidUpdate(prevProps, prevState) {
    // this.props, this.state (current values)

    if (this.state.techs !== prevState.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // When a component is removed
  componentWillUnmount() {}

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
          <TechItem onDelete={() => {}} />
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
