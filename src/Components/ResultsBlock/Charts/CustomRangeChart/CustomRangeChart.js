import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import CalculateRangeData from '../../CalculateRangeData';

import { useStyles } from './CustomRangeChart.style';

function CustomRangeChart({ data, title, startValue, endValue }) {
  const classes = useStyles();
  console.log(data)
  const rangeData = CalculateRangeData(data);

  const lastValue = data.filter(item => item.name === endValue);
  const firsValue = data.filter(item => item.name === startValue);

  if (!lastValue) {
    data.unshift({ name: startValue, value: startValue });
  }

  if (!firsValue) {
    data.unshift({ name: startValue, value: startValue });
  }
  return (
    <Card className={classes.root}>
      <div>
        <CardContent className={classes.content}>
          <List component="div" aria-label="main mailbox folders">
            <div className={classes.answerDetails}>
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
              <div className={classes.answers}>
                {Object.keys(rangeData).map(item => (
                  <ListItem key={item}>
                    <ListItemIcon>{`${item} :`}</ListItemIcon>
                    <ListItemText primary={rangeData[item]} />
                  </ListItem>
                ))}
              </div>
            </div>
          </List>
          <div className={classes.chartList}>
            <ResponsiveContainer>
              <BarChart className={classes.rangeBarChart} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="answers" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

CustomRangeChart.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  startValue: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired
};

export default CustomRangeChart;
