import React from 'react';

import {
  PieChart, Pie, Sector, Cell, Tooltip
} from 'recharts';
import uuid from 'react-uuid'
import getSurveyResults  from '../getSurveyResults';

// import { SURVEYS } from '../SurveyResultsData'
import { useStyles } from './ResultsBlock.style';

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


function ResultsBlock() {
  const classes = useStyles();
  
  const result = getSurveyResults(1);
  result.map(res => console.log(Object.values(res.answers)));

  return (
    <div>
      { result.map(res => (
        
        (res.type !== 'text') &&
        <div>
          <div>{res.title}</div>
          <PieChart 
            width={400} 
            height={200} 
            key={uuid()}
          >
            <Pie
              dataKey="value"
              data={Object.values(res.answers)}
              // cx={200}
              // cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
            >
              {
                Object.values(res.answers).map((entry, index) => <Cell key={uuid()} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
        
            <Tooltip />

          </PieChart>
        </div>
      ))}
    </div>
   
  )
}

export default ResultsBlock;