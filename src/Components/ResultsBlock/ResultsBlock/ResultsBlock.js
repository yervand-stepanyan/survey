import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { useStyles } from './ResultsBlock.style';

const SURVEYS = [
  {
    id: 1,
    title: 'survey number 1 - Lorem Ipsum has been  took a galley of type and scrambled it to make a',
    date: '10/03/2019',
    questions: [
      {
        id: 1,
        question: 'question 1',
        answers: ['my answer 1', 'my answer 2']
      },
      {
        id: 2,
        question: 'question 2',
        answers: ['my answer 1', 'my answer 2', 'my answer 3']
      },
      {
        id: 3,
        question: 'question 1',
        answers: ['my answer ']
      }
    ]
  },
  {
    id: 2,
    title: 'survey number 2 - Lorem Ipsum has been the  scrambled it to make a',
    date: '11/01/2020',
    questions: [
      {
        id: 1,
        question: 'question 1',
        answers: ['my answer 1', 'my answer 2']
      },
      {
        id: 2,
        question: 'question 2',
        answers: ['my answer 1', 'my answer 2', 'my answer 3']
      },
      {
        id: 3,
        question: 'question 1',
        answers: ['my answer ']
      }
    ]
  },
  {
    id: 3,
    title: 'survey number 3 - Lorem Ipsum has been thea galley of type and scrambled it to make a',
    date: '10/03/2020',
    questions: [
      {
        id: 1,
        question: 'question 1',
        answers: ['my answer 1', 'my answer 2']
      },
      {
        id: 2,
        question: 'question 2',
        answers: ['my answer 1', 'my answer 2', 'my answer 3']
      },
      {
        id: 3,
        question: 'question 1',
        answers: ['my answer ']
      }
    ]
  },
  {
    id: 4,
    title: 'survey number 4 - Lorem Ipsum has been the industrys standard dummy text ever scrambled it to make a',
    date: '10/03/2019',
    questions: [
      {
        id: 1,
        question: 'question 1',
        answers: ['my answer 1', 'my answer 2']
      },
      {
        id: 2,
        question: 'question 2',
        answers: ['my answer 1', 'my answer 2', 'my answer 3']
      },
      {
        id: 3,
        question: 'question 1',
        answers: ['my answer ']
      }
    ]
  },
  {
    id: 5,
    title: 'survey number 5 - Lorem Ipsum has been the industry\'s standard  it to make a',
    date: '11/01/2020',
    questions: [
      {
        id: 1,
        question: 'question 1',
        answers: ['my answer 1', 'my answer 2']
      },
      {
        id: 2,
        question: 'question 2',
        answers: ['my answer 1', 'my answer 2', 'my answer 3']
      },
      {
        id: 3,
        question: 'question 1',
        answers: ['my answer ']
      }
    ]
  },
  {
    id: 6,
    title: 'survey number 6 - Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    date: '10/03/2020',
    questions: [
      {
        id: 1,
        question: 'question 1',
        answers: ['my answer 1', 'my answer 2']
      },
      {
        id: 2,
        question: 'question 2',
        answers: ['my answer 1', 'my answer 2', 'my answer 3']
      },
      {
        id: 3,
        question: 'question 1',
        answers: ['my answer ']
      }
    ]
  }
]

function ResultsBlock() {
  const classes = useStyles();

  return (
    <Route>
      <div className={classes.container}>
        <Grid container spacing={3}>

          { SURVEYS.map((survey, index) => (
            <Grid item lg={2} md={3} sm={4} xs={12}>
              <Card className={classes.root} key={survey.id} sm={12}>
                <CardActionArea className={classes.cardHeader}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Survey
                      {` ${index + 1} `}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.cardTitle}>
                      {survey.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardButton}>
                  <Button size="small" color="primary">
                    <DateRangeIcon />
                    {survey.date}
                  </Button>
                  <Button size="small" color="primary">
                    <Link to={`/results/${survey.id}`} className={classes.seeAnswersButton}>See answers</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            
          ))}
        </Grid>
      </div>        
    </Route>
  )
}

export default ResultsBlock;
