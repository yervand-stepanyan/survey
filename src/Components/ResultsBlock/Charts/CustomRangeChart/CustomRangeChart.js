import React from 'react';
import Brightness1RoundedIcon from '@material-ui/icons/Brightness1Rounded';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import CalculateRangeData from '../../CalculateRangeData';

import { useStyles } from './CustomRangeChart.style';

function CustomRangeChart ({ data, title, startValue, endValue }) {
    const classes = useStyles();

    const rangeData = CalculateRangeData(data);
    console.log(rangeData)
    
    const lastValue = data.filter(item => item.name === endValue);
    const firsValue = data.filter(item => item.name === startValue)

    if(!lastValue) {
      data.unshift({name: startValue, value: startValue})
    }

    if(!firsValue) {
      data.unshift({name: startValue, value: startValue})
    }
    return (
      <Card className={classes.root}>

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.chartList}>
              <BarChart
                className={classes.rangeBarChart}
                width={500} 
                height={300}
                data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="answers" fill="#82ca9d" />
              </BarChart>

            </div>
            <List 
              component="div" 
              aria-label="main mailbox folders"
            >
              <Typography 
                variant="subtitle1" 
                color="textSecondary">
                {title}
              </Typography>
              <div className={classes.avarageVal}>
                {Object.keys(rangeData).map(item =>  (
                  <ListItem button className={classes.answerDetails}>
                    <ListItemIcon>
                      {item} 
                      :
                    </ListItemIcon>

                    <ListItemText primary={rangeData[item]} />
                  </ListItem>
                )
                )}                
              </div>
            </List>
            
          </CardContent>
        </div>
      </Card>
    )
}

export default CustomRangeChart;