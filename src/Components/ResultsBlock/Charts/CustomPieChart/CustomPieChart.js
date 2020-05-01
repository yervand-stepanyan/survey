import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import Typography from '@material-ui/core/Typography';

import CustomAnswersModal from '../CustomAnswersModal';
import { CUSTOM_PIE_CHART_COLORS } from '../../../../Globals/variables';
import renderCustomizedLabel from './renderCustomizedLabel';
import { useStyles } from './CustomPieChart.style';

function CustomPieChart({ customText, data, title }) {
  const classes = useStyles();
  const answers = data.filter(other => other.name !== 'other');
  const [otherAnswer] = data.filter(other => other.name === 'other');

  if (otherAnswer) {
    answers.splice(answers.length + 1, 1, otherAnswer);
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.chartList}>
            <List aria-label="main mailbox folders" component="nav">
              <Typography color="textSecondary" variant="h6">
                {title}
              </Typography>
              {answers.map((val, id) =>
                CUSTOM_PIE_CHART_COLORS.map(
                  (color, index) =>
                    index === id &&
                    (val.name === 'other' ? (
                      <ListItem className={classes.answerDetails} key={uuid()}>
                        <ListItemIcon>
                          <Brightness1RoundedIcon style={{ fill: color }} />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.customAnswer}
                          primary={val.name}
                        />
                        <CustomAnswersModal
                          customText={customText}
                          title={title}
                        />
                      </ListItem>
                    ) : (
                      <ListItem className={classes.answerDetails} key={uuid()}>
                        <ListItemIcon>
                          <Brightness1RoundedIcon style={{ fill: color }} />
                        </ListItemIcon>

                        <ListItemText primary={val.name} />
                      </ListItem>
                    ))
                )
              )}
            </List>
          </div>
          <PieChart
            className={classes.pieChart}
            key={uuid()}
            height={250}
            width={250}
          >
            <Pie
              data={answers}
              dataKey="value"
              fill="#8884d8"
              innerRadius={40}
              label={renderCustomizedLabel}
              labelLine={false}
              outerRadius={120}
            >
              {data.map((entry, index) => (
                <Cell
                  fill={
                    CUSTOM_PIE_CHART_COLORS[
                      index % CUSTOM_PIE_CHART_COLORS.length
                    ]
                  }
                  key={uuid()}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </CardContent>
      </div>
    </Card>
  );
}

CustomPieChart.propTypes = {
  customText: PropTypes.array,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
CustomPieChart.defaultProps = {
  customText: []
};

export default CustomPieChart;
