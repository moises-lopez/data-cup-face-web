import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const RainbowChart = ({ data }) => {
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
      <RadialBar minAngle={15} background clockWise={true} dataKey="uv" />
    </RadialBarChart>
  );
};

export default RainbowChart;
