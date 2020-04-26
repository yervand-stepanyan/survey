import React from 'react';
import {
  PieChart, Pie, Sector, Cell, Tooltip
} from 'recharts';
import uuid from 'react-uuid'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B43ACE'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function CustomPieChart ( {data, title}) {
  return (
    <div>
      <div>{title}</div>
      <PieChart 
        width={400} 
        height={200} 
        key={uuid()}
      >
        <Pie
          innerRadius={20}
          outerRadius={80} 
          fill="#8884d8"
        // paddingAngle={5}
          dataKey="value"
          data={data}
          // cx={200}
          // cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {
            data.map((entry, index) => <Cell key={uuid()} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
    
        <Tooltip />

      </PieChart>
    </div>
  )
}

export default CustomPieChart;