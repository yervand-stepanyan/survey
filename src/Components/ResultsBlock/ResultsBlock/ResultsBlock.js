import React from 'react';

import getSurveyResults  from '../getSurveyResults';
import CustomPieChart from '../Charts/CustomPieChart/CustomPieChart'
import { useStyles } from './ResultsBlock.style';




function ResultsBlock() {
  const classes = useStyles();
  
  const result = getSurveyResults(1);
  result.map(res => console.log(Object.values(res.answers)));

  return (
    <div>
      { result.map(res => (
        
        (res.type !== 'text') &&
        <CustomPieChart title={res.title} data={Object.values(res.answers)} />
      ))}
    </div>
   
  )
}

export default ResultsBlock;