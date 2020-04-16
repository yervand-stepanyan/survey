import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './ResultsBlock.style';

const SURVEYS = [
  {
    id: 1,
    title: 'survey number 1',
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
    title: 'survey number 2',
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
    title: 'survey number 2',
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
    <div className={classes.container}>
      { SURVEYS.map(survey => (
        <Card className={classes.root} key={survey.id}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {survey.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {survey.date}
            </Button>
            <Button size="small" color="primary">
              See answers
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default ResultsBlock;
