import React, { Component } from "react";
import { Dropdown, Button } from "react-bootstrap";
import "./App.css";

import { surveyPost } from "./api/surveyPost";
import { fetchSurveyResults } from "./api/fetchSurveyResults";
import { Labels } from "./labels";
import { showFirstResult } from "./helper/showFirstResult";
import { charDataManipulation } from "./helper/chartDataManipulation";

import BarChart from "./components/barChart";
import PieChart from "./components/pieChart";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteFoodLabel: "Pick your favourite food",
      //chartData: {},
    };
  }

  handleClick = (favouriteFood) =>
    this.setState({
      favouriteFood: Labels[favouriteFood].value,
      favouriteFoodLabel: Labels[favouriteFood].label,
    });

  handleSubmit = (e) => {
    this.setState({
      favouriteFoodLabel: "Pick your favourite food",
    });
    surveyPost(this.state.favouriteFood).then((res) => {
      console.log(res);
      if (res.ok) {
        fetchSurveyResults().then((rez) => {
          rez
            .json()
            .then((response) => {
              this.setState({ surveyResults: showFirstResult(response) });
            })
            .then(() => {
              this.setState({
                chartData: charDataManipulation(this.state.surveyResults),
              });

              this.forceUpdate();
            });
        });
      }
    });
  };

  render() {
    console.log("rerender");
    return (
      <div className="App">
        <div className="topDiv">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.state.favouriteFoodLabel}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  this.handleClick("Pizza");
                }}
              >
                {Labels.Pizza.label}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  this.handleClick("Pasta");
                }}
              >
                {Labels.Pasta.label}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  this.handleClick("Sarma");
                }}
              >
                {Labels.Sarma.label}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  this.handleClick("Pommes");
                }}
              >
                {Labels.Pommes.label}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="success" onClick={this.handleSubmit}>
            Submit
          </Button>{" "}
          <div>
            {this.state.surveyResults ? (
              <span>
                Most favorite food is {this.state.surveyResults[0].foodname}
              </span>
            ) : null}
          </div>
        </div>

        <div>
          {this.state.chartData ? (
            <div className="chartDiv">
              <BarChart chartData={this.state.chartData} />
              <PieChart chartData={this.state.chartData} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
