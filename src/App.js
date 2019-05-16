import React from "react";
import Select from "react-select";
import { countries } from "../src/util/countriesList";
import "./App.css";

export default class App extends React.Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    console.log(selectedOption.value);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <>
        <div className="countryInput">
        <h2>Please select the country </h2>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={countries}
          />
        </div>
      </>
    );
  }
}
