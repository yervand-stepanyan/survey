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

          { result.map(res => {
             switch (res.type) {
              case 'checkbox':
                return (
                  <CustomPieChart title={res.title} data={Object.values(res.answers)} /> 
                );
              case 'radiobutton':
                return (
                  <CustomPieChart title={res.title} data={Object.values(res.answers)} />
                );
              case 'dropdown':
                return (
                  <CustomPieChart title={res.title} data={Object.values(res.answers)} />
                );
              case 'text':
                return (
                  <div>{res.count}</div>
                );
              case 'range': 
                return (
                  <CustomPieChart title={res.title} data={Object.values(res.answers)} />
                );
              default:
                return 'there is no answer';
              } 
            })}
        </Typography>
      </Container>
    </>
    
      
  )
}

export default ResultsBlock;