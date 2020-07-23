import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  render() {
    return (
      <div className="chart">
        <Pie data={this.state.chartData} />
      </div>
    );
  }
}
