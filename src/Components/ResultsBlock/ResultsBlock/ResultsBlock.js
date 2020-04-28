import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import { ANSWER_TYPES } from '../../../Globals/variables';
import CustomPieChart from '../Charts/CustomPieChart/CustomPieChart';
import CustomRangeChart from '../Charts/CustomRangeChart';
import CustomTextChart from '../Charts/CustomTextChart';
import PrepareSurveyResults from '../PrepareSurveyResults';
import { useStyles } from './ResultsBlock.style';

function ResultsBlock({ answers, surveyTitle }) {
  const classes = useStyles();
  const result = PrepareSurveyResults(answers);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography className={classes.surveyTitle} variant="h4">
          {surveyTitle}
        </Typography>
        <Typography component="div">
          {Object.values(result).length > 0 ?
            Object.values(result).map(res => {
              switch (res.type) {
                case ANSWER_TYPES.checkbox:
                  return (
                    <CustomPieChart
                      data={Object.values(res.answers)}
                      key={res.id}
                      title={res.title}
                    />
                  );
                case ANSWER_TYPES.radiobutton:
                  return (
                    <CustomPieChart
                      data={Object.values(res.answers)}
                      key={res.id}
                      title={res.title}
                      customText={res.textAnswers}
                    />
                  );
                case ANSWER_TYPES.dropdown:
                  return (
                    <CustomPieChart
                      data={Object.values(res.answers)}
                      key={res.id}
                      title={res.title}
                    />
                  );
                case ANSWER_TYPES.input:
                  return (
                    <CustomTextChart
                      count={res.textAnswers.length}
                      data={Object.values(res.textAnswers)}
                      key={res.id}
                      title={res.title}
                    />
                  );
                case ANSWER_TYPES.range:
                  return (
                    <CustomRangeChart
                      data={Object.values(res.answers)}
                      endValue={res.endValue}
                      key={res.id}
                      startValue={res.startValue}
                      stepValue={res.stepValue}
                      title={res.title}
                    />
                  );
                default:
                  return (
                    <Card key={uuid()} style={{ marginBottom: 14 }}>
                      <CardContent>
                        <Typography>There is no answer</Typography>
                      </CardContent>
                    </Card>
                  );
              }
            }) : (
              <Card key={uuid()} className={classes.noAnswerContainer}>
                <Typography className={classes.noAnswer}>
                  There is no answers for this survey
                </Typography>
              </Card>
            )}
         
        </Typography>
      </Container>
    </>
  );
}

ResultsBlock.propTypes = {
  answers: PropTypes.array.isRequired,
  surveyTitle: PropTypes.string.isRequired
};

export default ResultsBlock;
