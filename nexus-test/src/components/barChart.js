import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.chartData !== state.chartData) {
      return {
        chartData: props.chartData,
      };
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
