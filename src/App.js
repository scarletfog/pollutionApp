import React from "react";
import Select from "react-select";
import { countries } from "../src/util/countriesList";
import "./App.css";

export default class App extends React.Component {
  state = {
    selectedOption: {
      value: ""
    }
  };

  handleChange = ({ selectedOption: value }) => {
    this.setState({
      selectedOption: {
        ...this.state.selectedOption,
        value
      }
    });

    const countryCode = this.state.selectedOption.value;

    console.log(countryCode)
    try {
      fetch("https://api.openaq.org/v1/measurements?country=PL")
        .then(res => {
          if (res) {
            res.json().then(function(data) {
              console.log(data);
            });
          }
        })
        .catch(er => console.log("Fetch Error :-S", er));
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <>
        <div className="countryInput">
          <h2>Please select the country </h2>
          <Select
            value={selectedOption.value}
            onChange={this.handleChange}
            options={countries}
          />
        </div>
      </>
    );
  }
}
