import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import getSurveyResults  from '../getSurveyResults';
import CustomPieChart from '../Charts/CustomPieChart/CustomPieChart'
import { useStyles } from './ResultsBlock.style';




function ResultsBlock() {
  const classes = useStyles();
  
  const result = getSurveyResults(1);
  result.map(res => console.log(Object.values(res.answers)));

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md'>
        <Typography component="div">

          { result.map(res => (
            (res.type !== 'text') &&
            <CustomPieChart title={res.title} data={Object.values(res.answers)} />
          ))}
        </Typography>
      </Container>
    </>
    
      
  )
}

export default ResultsBlock;