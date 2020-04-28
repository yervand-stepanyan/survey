import React from 'react';
import PropTypes from 'prop-types';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Typography from '@material-ui/core/Typography';
import uuid from 'react-uuid';

import renderCustomizedLabel from './renderCustomizedLabel';
import CustomAnswersModal from './CustomAnswersModal';

import { useStyles } from './CustomPieChart.style';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B43ACE'];

function CustomPieChart({ data, title, customText }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.chartList}>
            <List component="nav" aria-label="main mailbox folders">
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
              {data.map((val, id) =>
                COLORS.map(
                  (color, index) =>
                    index === id && (
                      val.name === 'other' ? (
                        <ListItem key={uuid()} className={classes.answerDetails}>
                          <ListItemIcon>
                            <Brightness1RoundedIcon style={{ fill: color }} />
                          </ListItemIcon>
                          <ListItemText primary={val.name} className={classes.customAnswer} />
                          <CustomAnswersModal customText={customText} title={title}  />

                        </ListItem>
                      ) : (
                        <ListItem key={uuid()} className={classes.answerDetails}>
                          <ListItemIcon>
                            <Brightness1RoundedIcon style={{ fill: color }} />
                          </ListItemIcon>

                          <ListItemText primary={val.name} />
                        </ListItem>
                      )
                      
                    ) 
                )
              )}
            </List>
          </div>
          <PieChart width={250} height={250} key={uuid()}>
            <Pie
              innerRadius={40}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              data={data}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={uuid()} fill={COLORS[index % COLORS.length]} />
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
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  customText: PropTypes.array.isRequired
};

export default CustomPieChart;
