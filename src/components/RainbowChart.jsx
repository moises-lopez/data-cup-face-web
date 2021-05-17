import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const RainbowChart = ({ data }) => {
  //console.log(window.innerWidth)
  let width = window.innerWidth > 600 ? 160 : 100;
  let height = window.innerWidth > 600 ? 90 : 60;
  return (
    <RadialBarChart
      width={width}
      height={height}
      innerRadius="10%"
      outerRadius="80%"
      data={data}
      startAngle={180}
      endAngle={0}
    >
      <RadialBar minAngle={15} background clockWise={true} dataKey="uv" />
    </RadialBarChart>
  );
};

export default RainbowChart;
