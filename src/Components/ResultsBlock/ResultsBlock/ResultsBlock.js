import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import PrepareSurveyResults from '../PrepareSurveyResults';
import CustomPieChart from '../Charts/CustomPieChart/CustomPieChart';
import CustomTextChart from '../Charts/CustomTextChart';
import CustomRangeChart from '../Charts/CustomRangeChart';
import CustomActiveShapePieChart from '../Charts/CustomActiveShapePieChart/CustomActiveShapePieChart';

function ResultsBlock({answers}) {
  const result = PrepareSurveyResults(answers);
  console.log(result)
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div">
          {Object.values(result).map(res => {
            switch (res.type) {
              case 'CHECKBOX':
                return (
                  <CustomPieChart
                    title={res.title}
                    data={Object.values(res.answers)}
                  />
                );
              case 'RADIOBUTTON':
                return (
                  <CustomPieChart
                    title={res.title}
                    data={Object.values(res.answers)}
                  />
                );
              case 'DROPDOWN':
                return (
                  <CustomPieChart
                    title={res.title}
                    data={Object.values(res.answers)}
                  />
                );
              case 'INPUT':
                return (
                  <CustomTextChart
                    title={res.title}
                    data={Object.values(res.textAnswers)}
                    count={res.textAnswers.length}
                  />
                );
              case 'RANGE':
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
                return (
                  <Card style={{marginBottom: 14}}>
                    <CardContent>
                      <Typography>
                        There is no answer
                      </Typography>
                    </CardContent>
                  </Card>
                )
            }
          })}
          <CustomActiveShapePieChart />
        </Typography>
      </Container>
    </>
  );
}

export default ResultsBlock;
