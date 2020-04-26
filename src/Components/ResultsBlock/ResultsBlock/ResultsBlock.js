import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import getSurveyResults  from '../getSurveyResults';
import CustomPieChart from '../Charts/CustomPieChart/CustomPieChart';
import CustomTextChart from '../Charts/CustomTextChart';
import CustomRangeChart from '../Charts/CustomRangeChart';
import { useStyles } from './ResultsBlock.style';




function ResultsBlock() {
  const classes = useStyles();
  
  const result = getSurveyResults(1);

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
                  <CustomTextChart title={res.title} data={Object.values(res.textAnswers)} count={res.count} />
                );
              case 'range': 
                return (
                  <CustomRangeChart 
                    title={res.title} 
                    data={Object.values(res.answers)} 
                    startValue={res.startValue} 
                    endValue={res.endValue}
                    stepValue={res.stepValue}
                  />
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