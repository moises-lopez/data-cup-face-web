import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const RainbowChart = ({ data }) => {
  //   const data = [
  //     {
  //       name: "",
  //       uv: 100,
  //       pv: 2400,
  //       fill: "#8884d8",
  //     },
  //     {
  //       name: "18-24",
  //       uv: 1,
  //       pv: 2400,
  //       fill: "#8884d8",
  //     },
  //   ];
  // console.log(data, "HOLASedasd");
  return (
    <RadialBarChart
      width={300}
      height={200}
      innerRadius="10%"
      outerRadius="80%"
      data={data}
      startAngle={180}
      endAngle={0}
    >
      <RadialBar
        minAngle={15}
        label={{ fill: "#666", position: "insideStart" }}
        background
        clockWise={true}
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
      <Tooltip />
    </RadialBarChart>
  );
};

export default RainbowChart;
