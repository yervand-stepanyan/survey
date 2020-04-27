import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import uuid from 'react-uuid';

import PrepareSurveyResults from '../PrepareSurveyResults';
import CustomPieChart from '../Charts/CustomPieChart/CustomPieChart';
import CustomTextChart from '../Charts/CustomTextChart';
import CustomRangeChart from '../Charts/CustomRangeChart';


import { useStyles } from './ResultsBlock.style'

function ResultsBlock({answers}) {
  const classes = useStyles();
  const result = PrepareSurveyResults(answers);
  const SurveyTitle = answers[0] ? answers[0].survey.title : '';

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        
        <Typography 
          variant='h4'
          className={classes.surveyTitle}
        >
          {SurveyTitle}
        </Typography>

        <Typography component="div">
          {Object.values(result).map(res => {
            switch (res.type) {
              case 'CHECKBOX':
                return (
                  <CustomPieChart
                    key={res.id}
                    title={res.title}
                    data={Object.values(res.answers)}
                  />
                );
              case 'RADIOBUTTON':
                return (
                  <CustomPieChart
                    key={res.id}
                    title={res.title}
                    data={Object.values(res.answers)}
                  />
                );
              case 'DROPDOWN':
                return (
                  <CustomPieChart
                    key={res.id}
                    title={res.title}
                    data={Object.values(res.answers)}
                  />
                );
              case 'INPUT':
                return (
                  <CustomTextChart
                    key={res.id}
                    title={res.title}
                    data={Object.values(res.textAnswers)}
                    count={res.textAnswers.length}
                  />
                );
              case 'RANGE':
                return (
                  <CustomRangeChart
                    key={res.id}
                    title={res.title}
                    data={Object.values(res.answers)}
                    startValue={res.startValue}
                    endValue={res.endValue}
                    stepValue={res.stepValue}
                  />
                );
              default:
                return (
                  <Card key={uuid()} style={{marginBottom: 14}}>
                    <CardContent>
                      <Typography>
                        There is no answer
                      </Typography>
                    </CardContent>
                  </Card>
                )
            }
          })}
        </Typography>
      </Container>
    </>
  );
}

ResultsBlock.propTypes = {
  answers: PropTypes.array.isRequired,
}

export default ResultsBlock;
